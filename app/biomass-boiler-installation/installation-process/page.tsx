import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CallbackForm } from "@/components/CallbackForm";
import { CTAStrip } from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Biomass Boiler Installation Process — Step by Step",
  description:
    "Every stage of a biomass boiler installation explained — from first enquiry through survey, design, install, commissioning and first service.",
};

const steps = [
  { n: "01", title: "Enquiry", body: "A call or form submission. We triage the site — building type, existing heating, rough load, location — and book a survey.", time: "Same day" },
  { n: "02", title: "Site Survey", body: "On-site visit. Heat demand assessment, fuel access review, plant room walk-through, flue routing, site photographs.", time: "1–2 hours" },
  { n: "03", title: "System Specification", body: "Boiler brand, model and output; fuel store design; buffer and separation; flue; BMS integration notes; outline plant room layout.", time: "3–10 working days" },
  { n: "04", title: "Quote", body: "Fixed price for the full scope. Options written in where they matter. Timeline and deposit terms agreed.", time: "Included" },
  { n: "05", title: "Installation Date", body: "Booked around your site. Fuel store build scheduled. Contractors and trades coordinated where needed.", time: "2–8 weeks lead" },
  { n: "06", title: "Installation", body: "On-site install. Existing system usually stays live until commissioning. We protect the site and keep the plant room clean.", time: "3–5 days domestic / commercial varies" },
  { n: "07", title: "Commissioning", body: "Full-load commissioning, combustion tuning, controls setup, safety testing. Integration with controls or BMS.", time: "1–2 days" },
  { n: "08", title: "MCS Handover", body: "MCS and HETAS paperwork, O&M manual, manufacturer documentation, user training and warranty registration.", time: "Day of handover" },
  { n: "09", title: "First Annual Service", body: "We book the first annual service before we leave site — usually 10 months out. RHI compliance documentation handled as part of the visit.", time: "10 months post-install" },
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Installation Process"
        title="Our Biomass Boiler Installation Process, Step by Step"
        subtitle="What happens, when, and what you need to do — from first call through to the first service visit."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div className="space-y-6">
            {steps.map((s) => (
              <article
                key={s.n}
                className="bg-[var(--white)] border-2 border-[var(--green)] p-6 md:p-8 relative"
              >
                <div className="flex flex-wrap items-baseline gap-4 mb-3">
                  <span className="font-display text-3xl text-[var(--amber)] font-extrabold">{s.n}</span>
                  <h2 className="font-display text-2xl">{s.title}</h2>
                  <span className="ml-auto text-xs uppercase tracking-widest text-[var(--muted)] bg-[var(--cream-dark)] px-3 py-1">
                    {s.time}
                  </span>
                </div>
                <p className="text-[var(--mid)]">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 space-y-4" id="callback">
            <CallbackForm
              variant="dark"
              heading="Start the process"
              subheading="Tell us about your site — we'll come back with next steps."
              showPostcode
              defaultService="Installation"
            />
            <div className="bg-[var(--white)] border-2 border-[var(--green)] p-5">
              <div className="font-display text-lg mb-2">Need more detail?</div>
              <ul className="text-sm space-y-1 text-[var(--mid)]">
                <li>→ <Link href="/biomass-boiler-installation" className="text-[var(--green)] hover:text-[var(--amber)] font-semibold">Installation overview</Link></li>
                <li>→ <Link href="/biomass-boiler-specification-system-design" className="text-[var(--green)] hover:text-[var(--amber)] font-semibold">Specification & system design</Link></li>
                <li>→ <Link href="/biomass-boiler-servicing-cost" className="text-[var(--green)] hover:text-[var(--amber)] font-semibold">Servicing cost</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
