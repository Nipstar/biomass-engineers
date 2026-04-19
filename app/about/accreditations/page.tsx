import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Accreditations & Certifications",
  description:
    "HETAS, MCS and manufacturer-specific certifications held by Biomass Engineers Limited — and what they mean for you.",
};

const items = [
  { name: "HETAS", what: "UK industry body approving appliances, fuels and businesses in the solid fuel and biomass sector. Registered for Domestic and Non-Domestic systems (including 200kW to 1000kW).", why: "HETAS registration means our installations and servicing meet recognised standards, with paperwork that satisfies Building Control, insurers and RHI." },
  { name: "MCS", what: "Microgeneration Certification Scheme — the UK standard for small-scale renewable installation.", why: "MCS certification is required for domestic biomass installations to access financial support schemes and to provide compliant commissioning paperwork." },
  { name: "Manufacturer Certifications", what: "Brand-specific training and authorisation from key biomass manufacturers.", why: "We hold current training certifications with our primary manufacturer partners so service and commissioning work is accepted under manufacturer warranty." },
  { name: "Coded Welding", what: "Formal welding procedure and welder qualifications (WPS/WPQ) for pressurised pipework.", why: "Required for district heating, plant room and pressurised primary circuits — we keep this in-house for speed and accountability." },
  { name: "Public Liability Insurance", what: "Comprehensive cover for on-site work.", why: "Protects clients, third parties and their property throughout our work on site." },
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Accreditations"
        title="The standards we meet"
        subtitle="We are HETAS registered, hold manufacturer-specific certifications, and maintain in-house coded welding — so your biomass work is properly certified from first survey to final commissioning."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((i) => (
              <article key={i.name} className="bg-[var(--white)] border-2 border-[var(--green)] p-6 md:p-8">
                <div className="w-20 h-20 bg-[var(--cream-dark)] border-2 border-[var(--green)] mb-4 flex items-center justify-center font-display font-extrabold text-[var(--green)]">
                  {i.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <h2 className="font-display text-2xl mb-2">{i.name}</h2>
                <div className="text-xs uppercase tracking-widest text-[var(--amber)] mb-1">What it is</div>
                <p className="text-[var(--mid)] text-sm mb-3">{i.what}</p>
                <div className="text-xs uppercase tracking-widest text-[var(--amber)] mb-1">Why it matters</div>
                <p className="text-[var(--mid)] text-sm">{i.why}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--muted)]">
            Specific certification numbers and current status will be listed in the footer of estimates and on request during handover.
          </p>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
