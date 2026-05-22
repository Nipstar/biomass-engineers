import { NextResponse } from "next/server";

const CHAT_WEBHOOK_URL =
  process.env.CHAT_WEBHOOK_URL ??
  "https://auto.juxtarank.com/webhook/biomass-chat";

type ChatMessage = { role: "user" | "assistant"; content: string };

function isMessage(m: unknown): m is ChatMessage {
  return (
    !!m &&
    typeof m === "object" &&
    "role" in m &&
    "content" in m &&
    ((m as { role: unknown }).role === "user" ||
      (m as { role: unknown }).role === "assistant") &&
    typeof (m as { content: unknown }).content === "string"
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.messages || !Array.isArray(body.messages)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const messages: ChatMessage[] = body.messages.filter(isMessage).slice(-20);
  if (!messages.length) {
    return NextResponse.json({ error: "No messages" }, { status: 400 });
  }

  const lastUserMessage =
    [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  const payload = {
    message: lastUserMessage,
    messages,
    sessionId: request.headers.get("x-session-id") ?? null,
    source: "biomass-engineers.co.uk",
    userAgent: request.headers.get("user-agent") ?? null,
    submittedAt: new Date().toISOString(),
  };

  let upstream: Response;
  try {
    upstream = await fetch(CHAT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Chat webhook fetch failed:", err);
    return NextResponse.json({ error: "Chat unavailable" }, { status: 502 });
  }

  if (!upstream.ok) {
    console.error("Chat webhook returned non-OK:", upstream.status);
    return NextResponse.json({ error: "Chat unavailable" }, { status: 502 });
  }

  const contentType = upstream.headers.get("content-type") ?? "";
  let reply = "";

  const extractText = (d: unknown): string => {
    if (Array.isArray(d)) {
      return d.map((item) => extractText(item)).filter(Boolean).join("\n\n");
    }
    if (d && typeof d === "object") {
      const obj = d as Record<string, unknown>;
      for (const key of ["output", "response", "message", "text", "reply", "content"]) {
        if (typeof obj[key] === "string" && obj[key]) return obj[key] as string;
      }
      return JSON.stringify(d);
    }
    return d == null ? "" : String(d);
  };

  if (contentType.includes("application/json")) {
    const data = await upstream.json().catch(() => null);
    reply = extractText(data);
  } else {
    reply = await upstream.text();
  }

  return new Response(reply, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
