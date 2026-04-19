import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Biomass Engineers Limited",
  description:
    "Based in Exmouth, Devon — biomass specialists with over 15 years in the field. HETAS registered, RHI compliant, UK-wide coverage with a South West focus.",
};

const values = [
  { title: "Brand independence", body: "We don't represent a single manufacturer. Every specification fits your building, not our sales target." },
  { title: "Transparent pricing", body: "Published price bands, quotes before work, no surprises after the van arrives." },
  { title: "Long-term thinking", body: "Most biomass systems run 20+ years. We design and service for the long haul, not the next invoice." },
  { title: "RHI discipline", body: "We understand OFGEM requirements from the inside and our paperwork reflects that — clients never worry about audits." },
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="Biomass engineers with roots in rural Britain"
        subtitle="Biomass Engineers Limited is based in Exmouth, Devon. We service, repair and install biomass boilers across the South West and the whole of the UK."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Who we are</h2>
            <p className="text-[var(--mid)] mb-4">
              We started out servicing biomass boilers for estates and farms across Devon during the RHI boom. Over 15 years we have grown into one of the South West&apos;s most experienced biomass engineering teams — with hands-on depth across every major brand and every scale of system, from 25 kW domestic pellet boilers through to multi-megawatt district heating schemes.
            </p>
            <p className="text-[var(--mid)] mb-4">
              We are HETAS registered, fully insured and proudly independent. We work on every major manufacturer — Fröling, Hargassner, Herz, Heizomat, Binder, Windhager and others — and we don&apos;t represent any single one of them. Our specification and advice is honest, and our service book speaks for itself: a mix of domestic, agricultural, commercial, public sector and hospitality clients up and down the country.
            </p>
            <p className="text-[var(--mid)] mb-6">
              We&apos;re based in Exmouth on the Devon coast. It is a good vantage point — Dartmoor, Exmoor, Cornwall, Somerset, Dorset and up into Bristol, Bath, Wiltshire and Hampshire are all a day&apos;s travel. For UK-wide work we plan routes around clients so travel never becomes the cost.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about/our-team" className="btn btn-green">Meet the team</Link>
              <Link href="/about/accreditations" className="btn btn-green">Accreditations</Link>
            </div>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder src="/images/engineer-at-work.jpg" label="Team photograph" aspect="4/5" tone="green" />
            <div className="bg-[var(--green)] text-[var(--cream)] p-6 border-2 border-[var(--amber)]">
              <div className="font-display text-2xl mb-2">500+</div>
              <div className="text-xs uppercase tracking-widest text-[var(--amber)]">Systems Serviced</div>
              <div className="font-display text-2xl mt-4 mb-2">15+</div>
              <div className="text-xs uppercase tracking-widest text-[var(--amber)]">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--green)] text-[var(--cream)]">
        <div className="container-bx section px-4">
          <h2 className="font-display text-3xl md:text-5xl mb-10 max-w-2xl">What we believe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border-2 border-[var(--amber)] p-6">
                <div className="font-display text-xl text-[var(--amber)] mb-2">{v.title}</div>
                <p className="text-[var(--cream-dark)] text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
