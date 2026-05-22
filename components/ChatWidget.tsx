"use client";

import { useState, useRef, useEffect } from "react";
import { site } from "@/lib/site";

type Msg = { role: "user" | "assistant"; content: string };

const quickChips = [
  "How much does servicing cost?",
  "Do you cover my area?",
  "I have a breakdown",
  "Book a service",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const assistantRef = useRef("");

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error("chat failed");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      assistantRef.current = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantRef.current += decoder.decode(value, { stream: true });
        const text = assistantRef.current;
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: text };
          return copy;
        });
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `Sorry, chat is briefly unavailable. Please call ${site.phoneEnquiries} or use the contact form.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Rectangular launcher — matches prototype */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Ask an engineer"}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[var(--green)] text-[var(--cream)] px-5 py-3 border-2 border-[var(--charcoal)] shadow-[4px_4px_0_0_var(--charcoal)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--charcoal)] transition-all font-semibold text-sm"
      >
        {open ? (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" />
            </svg>
            Close
          </>
        ) : (
          <>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--amber)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--amber)]" />
            </span>
            Ask an engineer
          </>
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 w-[min(92vw,360px)] h-[520px] max-h-[85vh] bg-[var(--white)] border-2 border-[var(--charcoal)] shadow-[6px_6px_0_0_var(--charcoal)] flex flex-col"
          role="dialog"
          aria-label="Chat with Biomass Engineers"
        >
          <div className="flex items-center justify-between bg-[var(--green)] text-[var(--cream)] px-4 h-12">
            <div className="font-semibold text-sm tracking-wide">Ask Biomass Engineers</div>
            <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="hover:text-[var(--amber)]">
              ✕
            </button>
          </div>

          <div ref={scrollerRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--cream)]">
            {messages.length === 0 && (
              <>
                <p className="text-sm text-[var(--mid)]">Ask a question, or pick one below to get started:</p>
                <div className="flex flex-wrap gap-2">
                  {quickChips.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => send(c)}
                      className="text-xs px-3 py-2 border-2 border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--green)] hover:text-[var(--cream)] hover:border-[var(--green)] transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                {m.role === "assistant" && (
                  <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1 font-mono">
                    Biomass Engineers
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-3 py-2 text-sm whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-[var(--amber)] text-[var(--charcoal)] border-2 border-[var(--charcoal)]"
                      : "bg-[var(--cream-dark)] text-[var(--charcoal)] border-2 border-[var(--charcoal)]"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[var(--amber)] animate-pulse" />
                <span className="w-2 h-2 bg-[var(--amber)] animate-pulse [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[var(--amber)] animate-pulse [animation-delay:300ms]" />
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-stretch border-t-2 border-[var(--charcoal)] bg-[var(--white)]"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 border-0 focus:outline-none px-3 bg-transparent"
              aria-label="Type your message"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[var(--green)] text-[var(--cream)] px-4 font-semibold disabled:opacity-60 hover:bg-[var(--green-mid)]"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
