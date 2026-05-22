import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FAQAccordion, type FAQCategory } from "@/components/FAQAccordion";
import { CTAStrip } from "@/components/CTAStrip";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renewable Heat Incentive (RHI) — Biomass Boiler Compliance",
  description:
    "Keep your RHI payments on track with annual RHI-compliant servicing, metering support and compliance remediation from Biomass Engineers Limited.",
  alternates: { canonical: "/renewable-heat-incentive-rhi" },
};

const categories: FAQCategory[] = [
  {
    name: "About the RHI",
    faqs: [
      { q: "Is the RHI still paying out?", a: "Yes. Existing accredited recipients continue to receive payments for the full term — typically 20 years from the date of accreditation. The scheme closed to new applicants in March 2022." },
      { q: "Who administers the RHI?", a: "OFGEM (Office of Gas and Electricity Markets) administers the domestic and non-domestic RHI on behalf of the UK government." },
      { q: "What is a typical annual RHI payment?", a: "Payments depend on metered heat output and the tariff rate at accreditation. Domestic recipients typically receive £1,000–£5,000/year; commercial rates vary widely with scale." },
    ],
  },
  {
    name: "Compliance requirements",
    faqs: [
      { q: "What do I need to keep my RHI payments?", a: "An annual service by a qualified engineer, correct metering (where required), a maintained and operational system, and up-to-date ownership and address details with OFGEM." },
      { q: "What does an RHI-compliant service include?", a: "A full combustion and safety check, written service record with engineer details and qualifications, confirmation that the system is operating correctly, and any metering check required for your tariff band." },
      { q: "How often do I need a service for RHI compliance?", a: "Annually. OFGEM compliance checks can be triggered at any time, and a missed or overdue service is the most common cause of payment suspension." },
      { q: "Does my installer need to be HETAS registered?", a: "OFGEM requires service work to be carried out by a suitably qualified engineer. HETAS registration is the recognised UK standard for solid fuel and biomass. All Biomass Engineers Limited engineers are HETAS registered." },
    ],
  },
  {
    name: "Compliance failures and remediation",
    faqs: [
      { q: "What happens if I fail an OFGEM compliance check?", a: "OFGEM can suspend payments pending remediation. In serious cases of non-compliance or misrepresentation, they can require repayment of previous sums received. Prevention is significantly cheaper than cure." },
      { q: "My payments have been suspended — can you help?", a: "Yes. We carry out a full system audit, produce the documentation OFGEM require, and advise on any remedial works needed before you submit your response to OFGEM." },
      { q: "I have not had the system serviced for several years — is it too late?", a: "Not necessarily. Contact us to discuss your position. The sooner remediation begins, the better the outcome is likely to be." },
      { q: "My metering is faulty or missing — what do I do?", a: "We carry out metering assessment visits and can install or replace metering equipment where required. We also produce the metering reports OFGEM may request." },
    ],
  },
  {
    name: "Change of ownership",
    faqs: [
      { q: "I am buying a property with an RHI-accredited biomass boiler — what do I need to do?", a: "The RHI registration must be transferred to you before or at completion. We strongly recommend a pre-purchase audit visit to confirm the system is compliant and the history is sound before you commit." },
      { q: "I am selling a property — can the buyer inherit my RHI payments?", a: "Yes, subject to OFGEM's transfer process. The boiler must be compliant and the transfer must be completed correctly. We provide documentation to support property sale transactions." },
    ],
  },
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="RHI Compliance"
        title="Protect your RHI payments"
        subtitle="Annual RHI-compliant servicing, metering support and compliance remediation — from engineers who know what OFGEM requires."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "20-year payments", body: "Existing recipients continue to receive RHI payments for the full accreditation term." },
              { label: "Annual compliance", body: "Servicing by a qualified, HETAS-registered engineer is the core compliance requirement." },
              { label: "Suspension risk", body: "OFGEM can suspend and clawback payments for non-compliant systems. Servicing is not optional." },
            ].map((card) => (
              <div key={card.label} className="bg-[var(--white)] border-2 border-[var(--green)] border-t-[6px] border-t-[var(--amber)] p-6">
                <div className="font-display text-xl mb-2">{card.label}</div>
                <p className="text-sm text-[var(--mid)]">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-display text-3xl mb-4">What we provide</h2>
              <ul className="space-y-3">
                {[
                  "Annual RHI-compliant service with written record",
                  "HETAS-registered engineers across the South West",
                  "Metering assessment, installation and replacement",
                  "Compliance audit and documentation for OFGEM",
                  "Remediation advice for suspended payments",
                  "Pre-purchase audit reports for property transactions",
                  "Change-of-ownership documentation support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-[var(--amber)] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/biomass-boiler-servicing-and-maintenance" className="btn btn-green-solid">Book RHI service →</Link>
                <Link href="/contact" className="btn btn-green">Contact us</Link>
              </div>
            </div>
            <div className="bg-[var(--charcoal)] text-[var(--cream)] p-8">
              <div className="font-display text-2xl mb-4">RHI compliance checklist</div>
              <ul className="space-y-3">
                {[
                  "Annual service by HETAS-registered engineer",
                  "Written service record retained",
                  "Metering in place and functioning (where required)",
                  "System operational — no major faults outstanding",
                  "OFGEM registration details up to date",
                  "Ownership records current",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-[var(--amber)] shrink-0 mt-0.5">□</span>
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs opacity-60 mt-6">This checklist is a guide. Always verify requirements directly with OFGEM for your specific accreditation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream-dark)]">
        <div className="container-bx section px-4 max-w-4xl">
          <h2 className="font-display text-3xl mb-8 text-center">RHI FAQs</h2>
          <FAQAccordion categories={categories} />
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
