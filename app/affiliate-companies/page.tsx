import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Affiliate Companies & Partners",
  description:
    "Trusted partners and affiliate companies we work with across fuel supply, specialist installation and commercial biomass services.",
  alternates: { canonical: "/affiliate-companies" },
};

const partners = [
  { name: "Land Energy", role: "Premium wood pellet supplier", body: "Our primary pellet supply partner across the South West. ENplus A1 grade pellets delivered direct to site." },
  { name: "Manufacturer Partners", role: "Fröling, Hargassner, Herz, Heizomat, Binder, Windhager", body: "Authorised installation and service relationships with every major manufacturer we work with." },
  { name: "HETAS", role: "Industry registration", body: "Member of the UK solid fuel and biomass industry body — the recognised route to compliant biomass installation." },
  { name: "M&E Consultant Network", role: "Specification partners", body: "We work with a network of M&E consultants on larger commercial and district heating schemes where independent biomass specification is needed." },
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Partners"
        title="Affiliate Companies & Partners"
        subtitle="The companies and industry bodies we work with to deliver compliant, reliable biomass services across the UK."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((p) => (
              <article key={p.name} className="bg-[var(--white)] border-2 border-[var(--green)] p-6 md:p-8">
                <div className="font-display text-2xl mb-1">{p.name}</div>
                <div className="text-sm text-[var(--amber)] font-semibold mb-3">{p.role}</div>
                <p className="text-[var(--mid)] text-sm">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
