import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CallbackForm } from "@/components/CallbackForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAStrip } from "@/components/CTAStrip";
import { JsonLd } from "@/components/JsonLd";
import type { ServicePage } from "@/lib/services";
import { servicePages } from "@/lib/services";
import { locations } from "@/lib/locations";
import type { ServiceFormOption } from "@/lib/site";
import { site } from "@/lib/site";

export function ServicePageTemplate({
  service,
  defaultFormService,
}: {
  service: ServicePage;
  defaultFormService?: ServiceFormOption;
}) {
  const related = servicePages.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.url, telephone: site.phoneE164 },
    description: service.intro,
    areaServed: {
      "@type": "GeoShape",
      name: "South West England — Bristol to Bournemouth to Penzance",
      polygon: "51.4545 -2.5879 50.7192 -1.8808 50.1186 -5.5373 51.4545 -2.5879",
    },
    serviceType: service.navLabel,
    url: `${site.url}/${service.slug}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: service.navLabel, item: `${site.url}/${service.slug}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Hero
        eyebrow="Biomass Services"
        title={service.h1}
        subtitle={service.intro}
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <div className="prose max-w-none">
              <h2 className="font-display text-2xl md:text-4xl mb-6">What&apos;s included</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {service.checklist.map((c) => (
                  <li key={c} className="flex gap-3 items-start">
                    <span className="text-[var(--amber)] font-bold mt-0.5">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl md:text-4xl mb-6">Why Biomass Engineers Limited</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {service.features.map((f) => (
                  <div key={f.title} className="bg-[var(--white)] border-2 border-[var(--green)] p-6">
                    <div className="font-display text-lg mb-2">{f.title}</div>
                    <p className="text-sm text-[var(--mid)]">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl md:text-4xl mb-6">FAQs</h2>
              <FAQAccordion faqs={service.faqs} />
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl md:text-4xl mb-6">Related services</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="block border-2 border-[var(--green)] bg-[var(--white)] p-5 hover:bg-[var(--cream-dark)]"
                  >
                    <div className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
                      {r.navLabel}
                    </div>
                    <div className="font-display text-lg">{r.h1}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28" id="callback">
            <CallbackForm
              variant="dark"
              heading="Request a Callback"
              subheading="We usually reply the same working day."
              defaultService={defaultFormService}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream-dark)]">
        <div className="container-bx section px-4">
          <div className="mb-8 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-[var(--amber)] mb-3">
              Coverage
            </div>
            <h2 className="font-display text-3xl md:text-4xl">
              {service.navLabel} across the South West — Bristol to Bournemouth to Penzance
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {locations.slice(0, 16).map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}`}
                className="text-sm border-2 border-[var(--green)] bg-[var(--white)] p-3 hover:bg-[var(--amber)] hover:border-[var(--amber)]"
              >
                {l.city}
                <div className="text-xs text-[var(--muted)]">{l.region}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
