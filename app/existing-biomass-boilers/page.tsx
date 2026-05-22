import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { CallbackForm } from "@/components/CallbackForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Existing Biomass Boiler Support & Takeovers",
  description:
    "Take-on servicing, fault diagnosis and ongoing support for existing biomass boilers — regardless of who installed them or when.",
  alternates: { canonical: "/existing-biomass-boilers" },
};

const scenarios = [
  {
    heading: "Previous installer has gone",
    body: "We regularly take on boilers whose original installer no longer trades or no longer covers your area. We obtain whatever manufacturer documentation we can and take it from there.",
  },
  {
    heading: "Manufacturer warranty expired",
    body: "Once the warranty period ends, you need an independent service partner. We offer annual service plans and PPM contracts for all major brands.",
  },
  {
    heading: "Neglected or poorly maintained",
    body: "Systems that have not been serviced in years are routine for us. The first visit runs longer, but we get neglected boilers back to full health.",
  },
  {
    heading: "RHI compliance concerns",
    body: "If your system has drifted out of RHI compliance — missed services, faulty metering, incomplete records — we can assess the position and put a remediation plan in place.",
  },
  {
    heading: "Unknown fault history",
    body: "We carry out a full audit visit on any system we have not seen before: combustion check, controls calibration, safety review and a written report.",
  },
  {
    heading: "Manufacturer no longer active",
    body: "Some biomass brands have ceased trading or changed ownership. We source parts through our extended supply network and carry service knowledge for discontinued models.",
  },
];

const brands = [
  "Fröling", "Hargassner", "Herz", "Heizomat", "Binder", "Windhager",
  "Guntamatic", "KWB", "Eta", "Viessman Vitoflex", "Ökofen", "Buderus",
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Existing Boilers"
        title="Already have a biomass boiler?"
        subtitle="We service, repair and take over existing systems across all major brands — whether your original installer is still trading or not."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-[var(--mid)] mb-8 leading-relaxed">
                Most of our work is on boilers we did not install. We take on systems across the South West — the Bristol – Bournemouth – Penzance triangle — auditing them, getting them compliant, and providing ongoing service support regardless of make, age or history.
              </p>
              <h2 className="font-display text-2xl mb-6">Common scenarios we handle</h2>
              <div className="space-y-4">
                {scenarios.map((s) => (
                  <div key={s.heading} className="border-l-4 border-[var(--amber)] pl-4">
                    <div className="font-semibold mb-1">{s.heading}</div>
                    <p className="text-sm text-[var(--mid)]">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl mb-6">Brands we cover</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {brands.map((b) => (
                  <span key={b} className="pill">{b}</span>
                ))}
              </div>
              <div className="bg-[var(--green)] text-[var(--cream)] p-6 mb-6">
                <div className="font-display text-xl mb-3">Audit visit</div>
                <p className="text-sm opacity-90 mb-4">
                  For any system we have not previously serviced, we carry out a full audit visit before committing to an ongoing contract. Written report included.
                </p>
                <Link href="/contact" className="btn btn-white text-sm">Book an audit →</Link>
              </div>
              <div className="bg-[var(--white)] border-2 border-[var(--green)] p-6">
                <div className="font-display text-xl mb-3">Service plans</div>
                <p className="text-sm text-[var(--mid)] mb-4">
                  Annual service plans from £TBC/year for domestic. PPM contracts for commercial sized around your boiler and operating hours.
                </p>
                <Link href="/biomass-boiler-servicing-and-maintenance" className="btn btn-green text-sm">Servicing →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--charcoal)] text-[var(--cream)]">
        <div className="container-bx section px-4 max-w-3xl">
          <h2 className="font-display text-3xl mb-4">How a takeover works</h2>
          <ol className="space-y-4">
            {[
              "Contact us with your boiler make, model, approximate age and postcode.",
              "We confirm coverage and arrange an initial audit visit.",
              "Audit visit: full combustion check, controls review, safety inspection, written report.",
              "We advise on any immediate works required and quote for ongoing service plan.",
              "You choose: standalone visit, annual plan, or PPM contract.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-[var(--amber)] text-2xl leading-none mt-0.5 shrink-0">{i + 1}</span>
                <span className="text-[var(--cream)] opacity-90">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 max-w-2xl">
          <CallbackForm
            heading="Take on my boiler"
            subheading="Tell us your boiler make, model and postcode and we will confirm whether we can cover you."
            showPostcode
          />
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
