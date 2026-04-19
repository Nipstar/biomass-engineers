"use client";

import { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CTAStrip } from "@/components/CTAStrip";
import { caseStudies } from "@/lib/caseStudies";

const tabs = ["All", "Commercial", "Agricultural", "Hospitality", "Education", "Public Sector", "Domestic"] as const;

export default function Page() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const list = active === "All" ? caseStudies : caseStudies.filter((c) => c.sector === active);

  return (
    <>
      <Hero
        eyebrow="Case Studies"
        title="Biomass Projects We're Proud Of"
        subtitle="From rural domestic installations to large commercial district heating schemes — see how Biomass Engineers Limited has helped clients across the UK reduce energy costs, cut carbon and protect RHI income."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`px-4 py-2 text-sm font-semibold border-2 transition-colors ${
                  active === t
                    ? "bg-[var(--green)] border-[var(--green)] text-[var(--cream)]"
                    : "border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--cream)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="bg-[var(--white)] border-2 border-[var(--green)] flex flex-col hover:-translate-y-0.5 transition-transform"
              >
                <ImagePlaceholder label={c.title} aspect="4/3" tone="green" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="self-start text-xs px-2 py-1 bg-[var(--amber)] text-[var(--charcoal)] font-semibold mb-3">
                    {c.sector}
                  </span>
                  <h3 className="font-display text-xl mb-2">{c.title}</h3>
                  <p className="text-sm text-[var(--mid)] mb-4 flex-1">{c.summary}</p>
                  <div className="grid grid-cols-3 gap-2 text-xs border-t-2 border-[var(--green)] pt-3 mb-2">
                    <div><div className="font-bold">{c.boilerBrand}</div><div className="text-[var(--muted)]">Brand</div></div>
                    <div><div className="font-bold">{c.output}</div><div className="text-[var(--muted)]">Output</div></div>
                    <div><div className="font-bold">{c.fuelType}</div><div className="text-[var(--muted)]">Fuel</div></div>
                  </div>
                  <div className="text-xs text-[var(--muted)]">{c.location} · {c.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Have a similar project in mind?" />
    </>
  );
}
