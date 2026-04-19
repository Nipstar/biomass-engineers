import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM = `You are a helpful assistant for Biomass Engineers Limited, a specialist biomass boiler installation and servicing company based in Exmouth, Devon. You cover the South West of England and the wider UK.

You help website visitors with questions about:
- Biomass boiler servicing and maintenance
- Biomass boiler installation
- Fuel types (wood pellet, wood chip, log)
- Fault diagnosis and repair
- RHI (Renewable Heat Incentive) compliance
- Commercial and agricultural biomass systems
- District heating systems
- Biomass boiler brands: Fröling, Hargassner, Herz, Heizomat, Binder, Windhager

Keep answers concise and practical. If a visitor needs a quote, site visit, or urgent assistance, direct them to call 01395 123456 or submit the contact form. You do not have access to booking systems or live engineer availability.

Do not discuss competitors by name. Do not make guarantees about pricing or timescales without qualification. If you are unsure about something, say so and recommend calling the office.`;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.messages || !Array.isArray(body.messages)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const messages: Anthropic.MessageParam[] = body.messages
    .filter(
      (m: unknown) =>
        m &&
        typeof m === "object" &&
        "role" in m &&
        "content" in m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof (m as { content: unknown }).content === "string"
    )
    .slice(-20);

  if (!messages.length) {
    return NextResponse.json({ error: "No messages" }, { status: 400 });
  }

  const stream = await client.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 500,
    system: SYSTEM,
    messages,
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
    },
  });
}
