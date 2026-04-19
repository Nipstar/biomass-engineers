import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(1).max(30),
  email: z.string().email().optional().or(z.literal("")),
  postcode: z.string().max(10).optional(),
  message: z.string().max(2000).optional(),
  service: z.string().max(100).optional(),
  honeypot: z.string().max(0),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { honeypot, ...data } = parsed.data;
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const lines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    data.postcode ? `Postcode: ${data.postcode}` : null,
    data.service ? `Service: ${data.service}` : null,
    data.message ? `\nMessage:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: "website@biomass-engineers.co.uk",
    to: process.env.CONTACT_EMAIL ?? "info@biomass-engineers.co.uk",
    subject: `Website enquiry — ${data.name}`,
    text: lines,
    replyTo: data.email || undefined,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
