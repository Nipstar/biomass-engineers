"use client";

import { useState } from "react";

export type FAQ = { q: string; a: string };
export type FAQCategory = { name: string; faqs: FAQ[] };

export function FAQAccordion({
  faqs,
  categories,
  defaultOpen = 0,
}: {
  faqs?: FAQ[];
  categories?: FAQCategory[];
  defaultOpen?: number;
}) {
  const [activeCat, setActiveCat] = useState(0);
  const list = categories ? categories[activeCat].faqs : faqs ?? [];

  return (
    <div>
      {categories && (
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c, i) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setActiveCat(i)}
              className={`px-4 py-2 text-sm font-semibold border-2 transition-colors ${
                i === activeCat
                  ? "bg-[var(--green)] border-[var(--green)] text-[var(--cream)]"
                  : "border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--cream)]"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div>
        {list.map((f, i) => (
          <Item key={`${activeCat}-${i}`} q={f.q} a={f.a} open={i === defaultOpen} />
        ))}
      </div>
    </div>
  );
}

function Item({ q, a, open: initOpen }: { q: string; a: string; open?: boolean }) {
  const [open, setOpen] = useState(Boolean(initOpen));
  return (
    <div className="border-b-2 border-[var(--green)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-4 py-4 text-left font-semibold text-[var(--charcoal)] hover:text-[var(--amber)]"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="text-[var(--amber)] text-xl leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pb-4 text-[var(--mid)]">{a}</div>}
    </div>
  );
}
