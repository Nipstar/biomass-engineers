const items = [
  "HETAS Registered",
  "South West Specialist",
  "UK-Wide Coverage",
  "Fröling · Hargassner · Herz · Heizomat · Binder · Windhager",
  "RHI Compliance",
  "Annual Service Plans",
  "Commercial & Agricultural",
  "District Heating",
  "Parts & Spares",
  "Based in Exmouth, Devon",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[var(--green)] py-3 overflow-hidden border-y-2 border-[var(--charcoal)]">
      <div className="marquee-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8 text-[var(--cream)] text-sm font-semibold tracking-wide">
            {item}
            <span className="text-[var(--amber)] font-bold">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
