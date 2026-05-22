import Image from "next/image";

const items = [
  "HETAS Registered",
  "South West Specialist",
  "Bristol · Bournemouth · Penzance Triangle",
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
          <span key={i} className="inline-flex items-center gap-3 px-8 text-[var(--cream)] text-sm font-semibold tracking-wide">
            {item === "HETAS Registered" && (
              <Image
                src="/hetas-logo.svg"
                alt=""
                width={117}
                height={72}
                className="h-5 w-auto bg-[var(--cream)] px-1 py-0.5"
              />
            )}
            {item}
            <span className="text-[var(--amber)] font-bold ml-3">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
