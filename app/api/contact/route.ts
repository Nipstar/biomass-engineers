import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL ??
  "https://auto.juxtarank.com/webhook/biomass-contact";

const schema = z.object({
  name: z.string().min(1).max(100),
  businessName: z.string().max(120).optional().or(z.literal("")),
  phone: z.string().min(1).max(30),
  email: z.string().email().optional().or(z.literal("")),
  postcode: z.string().max(10).optional(),
  message: z.string().max(2000).optional(),
  service: z.string().max(100).optional(),
  // Honeypots: form sends `website_url`, legacy clients may send `company` / `honeypot`.
  website_url: z.string().max(0).optional().or(z.literal("")),
  company: z.string().max(0).optional().or(z.literal("")),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { honeypot, company, website_url, ...data } = parsed.data;
  if (honeypot || company || website_url) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    ...data,
    submittedAt: new Date().toISOString(),
    source: "biomass-engineers.co.uk",
    userAgent: request.headers.get("user-agent") ?? null,
  };

  const webhookPromise = fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((r) => ({ ok: r.ok, status: r.status }))
    .catch((err) => ({ ok: false, status: 0, err: String(err) }));

  const lines = [
    `Name: ${data.name}`,
    data.businessName ? `Business: ${data.businessName}` : null,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    data.postcode ? `Postcode: ${data.postcode}` : null,
    data.service ? `Service: ${data.service}` : null,
    data.message ? `\nMessage:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const emailPromise = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY).emails
        .send({
          from: "website@biomass-engineers.co.uk",
          to: process.env.CONTACT_EMAIL ?? "info@biomass-engineers.co.uk",
          subject: `Website enquiry — ${data.name}`,
          text: lines,
          replyTo: data.email || undefined,
        })
        .then((res) => ({ ok: !res.error, error: res.error }))
        .catch((err) => ({ ok: false, error: err }))
    : Promise.resolve({ ok: false, error: null, skipped: true });

  const [webhookResult, emailResult] = await Promise.all([
    webhookPromise,
    emailPromise,
  ]);

  if (!webhookResult.ok) {
    console.error("Contact webhook failed:", webhookResult);
  }
  if (!emailResult.ok && !("skipped" in emailResult && emailResult.skipped)) {
    console.error("Resend send failed:", emailResult);
  }

  // Treat the submission as successful if either delivery path succeeded.
  if (webhookResult.ok || emailResult.ok) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Send failed" }, { status: 500 });
}
