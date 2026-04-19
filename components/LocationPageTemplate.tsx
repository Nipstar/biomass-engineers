import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CallbackForm } from "@/components/CallbackForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAStrip } from "@/components/CTAStrip";
import type { Location } from "@/lib/locations";
import { locations } from "@/lib/locations";
import { servicePages } from "@/lib/services";

const kindTitles = {
  servicing: "Biomass Boiler Servicing",
  maintenance: "Biomass Boiler Maintenance",
  repair: "Biomass Boiler Servicing & Repair",
  installers: "Biomass Boiler Installers",
} as const;

export function LocationPageTemplate({ loc }: { loc: Location }) {
  const related = locations
    .filter((l) => l.region === loc.region && l.slug !== loc.slug)
    .slice(0, 4);

  return (
    <>
      <Hero
        eyebrow={`${loc.region} · ${kindTitles[loc.kind]}`}
        title={`${kindTitles[loc.kind]} in ${loc.city}`}
        subtitle={loc.intro}
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-4xl mb-4">Local context</h2>
            <p className="text-[var(--mid)] mb-10">{loc.localContext}</p>

            <h2 className="font-display text-2xl md:text-4xl mb-4">Services available in {loc.city}</h2>
            <ul className="grid md:grid-cols-2 gap-3 mb-10">
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="block border-2 border-[var(--green)] bg-[var(--white)] p-4 hover:bg-[var(--amber)] hover:border-[var(--amber)]"
                  >
                    <div className="font-semibold">{s.navLabel}</div>
                    <div className="text-xs text-[var(--muted)]">{s.h1}</div>
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-4xl mb-4">Coverage around {loc.city}</h2>
            <p className="text-[var(--mid)] mb-4">
              We cover {loc.city} and the surrounding towns and villages, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {loc.nearbyTowns.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border-2 border-[var(--green)] text-[var(--green)] text-sm font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-4xl mb-6">Local FAQs</h2>
            <FAQAccordion faqs={loc.faqs} />

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl md:text-4xl mb-4">Nearby areas</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/${r.slug}`}
                      className="border-2 border-[var(--green)] bg-[var(--white)] p-4 hover:bg-[var(--cream-dark)]"
                    >
                      <div className="font-display text-lg">{r.city}</div>
                      <div className="text-xs text-[var(--muted)]">{kindTitles[r.kind]}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-28" id="callback">
            <CallbackForm
              variant="dark"
              heading={`Book in ${loc.city}`}
              subheading="Tell us your postcode and we'll come back with availability."
              showPostcode
            />
          </div>
        </div>
      </section>

      <CTAStrip heading={`Looking for biomass engineers in ${loc.city}?`} subtext="Call now or request a callback." />
    </>
  );
}
