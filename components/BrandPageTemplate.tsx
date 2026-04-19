import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CallbackForm } from "@/components/CallbackForm";
import { CTAStrip } from "@/components/CTAStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { Brand } from "@/lib/brands";
import { brands } from "@/lib/brands";

export function BrandPageTemplate({ brand }: { brand: Brand }) {
  const related = brands.filter((b) => b.slug !== brand.slug).slice(0, 5);

  return (
    <>
      <Hero
        eyebrow={`${brand.country} · ${brand.technology}`}
        title={`${brand.name} Biomass Boiler Servicing, Installation & Repair`}
        subtitle={brand.summary}
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-4xl mb-4">Brand overview</h2>
            <p className="text-[var(--mid)] mb-6">{brand.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[var(--white)] border-2 border-[var(--green)] p-4">
                <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-1">Technology</div>
                <div className="font-display font-bold">{brand.technology}</div>
              </div>
              <div className="bg-[var(--white)] border-2 border-[var(--green)] p-4">
                <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-1">kW Range</div>
                <div className="font-display font-bold">{brand.kwRange}</div>
              </div>
              <div className="bg-[var(--white)] border-2 border-[var(--green)] p-4">
                <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-1">Country</div>
                <div className="font-display font-bold">{brand.country}</div>
              </div>
              <div className="bg-[var(--white)] border-2 border-[var(--green)] p-4">
                <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-1">Popular models</div>
                <div className="font-display font-bold text-sm">{brand.popularModels.join(", ")}</div>
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-4xl mb-4">Why specialist {brand.name} knowledge matters</h2>
            <p className="text-[var(--mid)] mb-8">
              {brand.name} systems have proprietary controls, brand-specific fault patterns and parts that don&apos;t always cross over from other manufacturers. Our engineers carry {brand.name}-specific diagnostics and service tooling, and we source genuine parts through established UK distributor lines.
            </p>

            <h2 className="font-display text-2xl md:text-4xl mb-4">Services we offer for {brand.name}</h2>
            <ul className="grid md:grid-cols-2 gap-3 mb-10">
              {["Annual service", "Fault diagnosis and repair", "Parts sourcing", "Installation", "RHI sign-off and compliance", "Engineer-only visits"].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[var(--amber)] font-bold">✓</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-4xl mb-4">Common {brand.name} faults we resolve</h2>
            <ul className="space-y-3 mb-10">
              {brand.commonFaults.map((f) => (
                <li key={f} className="flex gap-3 items-start">
                  <span className="w-2 h-2 bg-[var(--amber)] mt-2" />
                  <span className="text-[var(--mid)]">{f}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-4xl mb-4">Other brands we service</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {related.map((b) => (
                <Link
                  key={b.slug}
                  href={`/biomass-boilers/${b.slug}`}
                  className="border-2 border-[var(--green)] bg-[var(--white)] text-center py-4 font-display font-extrabold hover:bg-[var(--amber)] hover:border-[var(--amber)]"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:sticky lg:top-28">
            <CallbackForm
              variant="dark"
              heading={`${brand.name} enquiry`}
              subheading="Tell us the model and what's going on."
              showPostcode
            />
            <ImagePlaceholder src={brand.image} label={`${brand.name} plant room photograph`} aspect="4/3" />
          </div>
        </div>
      </section>

      <CTAStrip heading={`Need ${brand.name} servicing or repair?`} subtext="Call the technical line or request a callback — most enquiries answered the same day." />
    </>
  );
}
