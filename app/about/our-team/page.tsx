import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the Biomass Engineers Limited team — HETAS-registered specialist engineers covering Devon, the South West and UK-wide biomass servicing, installation and repair.",
};

const team = [
  { name: "Jim King", role: "Director & Lead Engineer", specialism: "System design, commercial installation, district heating", years: "20+ years in biomass", image: "/images/engineer-at-work.jpg" },
  { name: "Gary Thorne", role: "Senior Service Engineer", specialism: "Fröling, Hargassner, Herz diagnostics & maintenance", years: "15+ years in engineering", image: undefined },
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Our Team"
        title="The engineers behind the work"
        subtitle="A specialist two-man team combining over 35 years of hands-on experience across every major brand and every scale of biomass system."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {team.map((t, i) => (
              <article key={i} className="bg-[var(--white)] border-2 border-[var(--green)]">
                <ImagePlaceholder src={t.image} label={t.name} aspect="4/5" tone="green" />
                <div className="p-6">
                  <div className="font-display text-2xl">{t.name}</div>
                  <div className="text-base text-[var(--amber)] font-semibold mb-4">{t.role}</div>
                  <div className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">Expertise</div>
                  <div className="text-sm text-[var(--mid)] mb-4">{t.specialism}</div>
                  <div className="text-xs text-[var(--muted)] font-mono">{t.years}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
