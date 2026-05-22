import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { CallbackForm } from "@/components/CallbackForm";
import { brands } from "@/lib/brands";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Biomass Boiler Brands We Install, Service & Repair",
  description:
    "We install, service and repair every major biomass boiler brand — Fröling, Hargassner, Herz, Heizomat, Binder and Windhager. Specialist knowledge across all manufacturers.",
  alternates: { canonical: "/biomass-boilers" },
};

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Biomass Boiler Brands"
        title="Biomass Boilers We Install, Service & Repair"
        subtitle="Biomass Engineers Limited works across all major boiler manufacturers. Whether you're choosing a new system or need specialist servicing for an existing boiler, our engineers have hands-on experience across the full range."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/biomass-boilers/${b.slug}`}
                className="group bg-[var(--white)] border-2 border-[var(--green)] p-6 md:p-8 flex flex-col hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-2">
                  {b.country} · {b.technology}
                </div>
                <div className="font-display text-3xl mb-3 group-hover:text-[var(--amber)] transition-colors">
                  {b.name}
                </div>
                <p className="text-sm text-[var(--mid)] mb-4 flex-1">{b.summary}</p>
                <div className="flex items-center justify-between border-t-2 border-[var(--green)] pt-3">
                  <div className="text-xs text-[var(--muted)]">{b.kwRange}</div>
                  <div className="text-[var(--amber)] font-semibold">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-[var(--green)] text-[var(--cream)] p-6 md:p-10 border-2 border-[var(--amber)] flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="text-[var(--amber)] uppercase tracking-widest text-sm mb-2">Not sure which brand you have?</div>
              <h2 className="font-display text-2xl md:text-3xl">
                Call us on {site.phoneEnquiries} — we&apos;ll work it out.
              </h2>
            </div>
            <div className="flex gap-3">
              <a href={site.phoneEnquiriesHref} className="btn btn-amber">Call now</a>
              <Link href="/contact" className="btn btn-white-outline">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream-dark)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Why specialist brand knowledge matters</h2>
            <p className="text-[var(--mid)] mb-4">
              Biomass brands diverge sharply in their control philosophy, fuel handling, combustion management and proprietary parts. A lambda sensor fault on a Fröling doesn&apos;t diagnose the same way as on a Herz. A chip quality fault on a Hargassner tells you different things about the fuel than the equivalent on a Heizomat.
            </p>
            <p className="text-[var(--mid)]">
              Our engineers carry brand-specific diagnostics, hold established distributor contacts for parts, and know the quirks that matter — from touchscreen firmware issues to grate seal wear. That translates to first-visit fixes, cleaner commissioning and fewer repeat callouts.
            </p>
          </div>
          <CallbackForm
            variant="dark"
            heading="Not sure which way to go?"
            subheading="Tell us what you have or what you're considering — we'll come back with options."
            showPostcode
          />
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
