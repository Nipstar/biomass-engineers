import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CTAStrip } from "@/components/CTAStrip";
import { JsonLd } from "@/components/JsonLd";
import type { CaseStudy } from "@/lib/caseStudies";
import { caseStudies } from "@/lib/caseStudies";
import { site } from "@/lib/site";

export function CaseStudyPageTemplate({ study }: { study: CaseStudy }) {
  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${site.url}/case-studies` },
      { "@type": "ListItem", position: 3, name: study.title, item: `${site.url}/case-studies/${study.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    image: study.image ? `${site.url}${study.image}` : undefined,
    datePublished: `${study.year}-01-01`,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    about: {
      "@type": "Thing",
      name: `${study.boilerBrand} ${study.output} ${study.fuelType} biomass boiler`,
    },
    locationCreated: { "@type": "Place", name: study.location },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <Hero eyebrow={`${study.sector} · ${study.location}`} title={study.title} subtitle={study.summary} />

      <section className="bg-[var(--cream)]">
        <div className="container-bx px-4 py-10 grid grid-cols-2 md:grid-cols-6 gap-4 border-y-2 border-[var(--green)] bg-[var(--white)]">
          <Stat label="Sector" value={study.sector} />
          <Stat label="Boiler Brand" value={study.boilerBrand} />
          <Stat label="Output" value={study.output} />
          <Stat label="Fuel" value={study.fuelType} />
          <Stat label="Year" value={String(study.year)} />
          <Stat label="Location" value={study.location} />
        </div>
      </section>

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1.3fr_0.7fr] gap-12">
          <div className="space-y-10">
            <article>
              <h2 className="font-display text-2xl md:text-4xl mb-4">The challenge</h2>
              <p className="text-[var(--mid)] whitespace-pre-wrap">{study.challenge}</p>
            </article>
            <article>
              <h2 className="font-display text-2xl md:text-4xl mb-4">Our solution</h2>
              <p className="text-[var(--mid)] whitespace-pre-wrap">{study.solution}</p>
            </article>
            <article>
              <h2 className="font-display text-2xl md:text-4xl mb-4">The installation</h2>
              <p className="text-[var(--mid)] whitespace-pre-wrap">{study.installation}</p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-4xl mb-6">The outcome</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Outcome label="Annual Fuel Saving" value={study.outcome.annualFuelSaving} />
                <Outcome label="RHI Annual Income" value={study.outcome.rhiAnnualIncome} />
                <Outcome label="Carbon Reduction" value={study.outcome.carbonReduction} />
                <Outcome label="System Uptime" value={study.outcome.systemUptime} />
              </div>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-4xl mb-6">On site</h2>
              <div className="grid grid-cols-2 gap-3">
                <ImagePlaceholder src={study.image} label={study.title} aspect="4/3" tone="green" />
                <ImagePlaceholder src="/images/canva/landscape/biomass-boiler-controls.webp" label="Boiler controls" aspect="4/3" tone="green" />
                <ImagePlaceholder src="/images/canva/landscape/9.webp" label="Pump manifold pipework" aspect="4/3" tone="cream" />
                <ImagePlaceholder src="/images/canva/landscape/bespoke-concentration-unit.webp" label="Bespoke concentration unit" aspect="4/3" tone="charcoal" />
              </div>
            </article>

            <figure className="bg-[var(--green)] text-[var(--cream)] p-6 md:p-8 border-2 border-[var(--amber)]">
              <div className="text-[var(--amber)] text-xl mb-3">★★★★★</div>
              <blockquote className="font-display text-xl md:text-2xl mb-4">&ldquo;{study.testimonial.quote}&rdquo;</blockquote>
              <figcaption className="text-sm text-[var(--cream-dark)]">
                {study.testimonial.name} · {study.testimonial.role}
              </figcaption>
            </figure>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-[var(--white)] border-2 border-[var(--green)] p-6 offset-amber-sm">
              <div className="text-sm font-semibold uppercase tracking-widest text-[var(--amber)] mb-2">
                Similar project in mind?
              </div>
              <h3 className="font-display text-2xl mb-3">Let&apos;s talk</h3>
              <p className="text-sm text-[var(--mid)] mb-4">
                Whether you&apos;re replacing an ageing boiler, scoping a new scheme or need a compliant service programme — we&apos;d be glad to talk it through.
              </p>
              <Link href="/contact" className="btn btn-green-solid w-full">
                Contact the team
              </Link>
            </div>
            <div className="bg-[var(--cream-dark)] border-2 border-[var(--green)] p-6">
              <div className="font-display text-xl mb-3">More projects</div>
              <ul className="space-y-2 text-sm">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/case-studies/${r.slug}`} className="hover:text-[var(--amber)] font-semibold">
                      → {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center px-2">
      <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-1">{label}</div>
      <div className="font-display font-bold text-sm md:text-base">{value}</div>
    </div>
  );
}

function Outcome({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--white)] border-2 border-[var(--green)] p-4 text-center">
      <div className="font-display text-2xl md:text-3xl font-extrabold">{value}</div>
      <div className="text-xs text-[var(--muted)] uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}
