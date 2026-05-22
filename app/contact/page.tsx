import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CallbackForm } from "@/components/CallbackForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, email or request a callback. Biomass Engineers Limited is based in Exmouth, Devon and covers the South West — the Bristol – Bournemouth – Penzance triangle.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Talk to the team"
        subtitle="Call, email or send a message. We answer the phone during working hours and respond to forms the same working day."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-[1fr_1fr] gap-12">
          <div className="space-y-6">
            <div className="bg-[var(--white)] border-2 border-[var(--green)] p-6">
              <div className="text-xs uppercase tracking-widest text-[var(--amber)] mb-1">Enquiries</div>
              <a href={site.phoneEnquiriesHref} className="font-display text-3xl hover:text-[var(--amber)] block">
                {site.phoneEnquiries}
              </a>
              <div className="text-xs uppercase tracking-widest text-[var(--amber)] mt-5 mb-1">Technical</div>
              <a href={site.phoneTechnicalHref} className="font-display text-3xl hover:text-[var(--amber)] block">
                {site.phoneTechnical}
              </a>
              <div className="text-xs uppercase tracking-widest text-[var(--amber)] mt-5 mb-1">Email</div>
              <a href={site.emailHref} className="font-display text-xl hover:text-[var(--amber)] break-all">
                {site.email}
              </a>
              <div className="text-xs uppercase tracking-widest text-[var(--amber)] mt-5 mb-1">Address</div>
              <div className="text-[var(--mid)]">
                Biomass Engineers Limited<br />
                {site.address.streetAddress}<br />
                {site.address.locality}, {site.address.region}<br />
                {site.address.postalCode}
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[16/10] border-2 border-[var(--green)] overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Bassetts+Gardens,Exmouth+EX8+4EE&z=8&output=embed"
                  title="Map — Biomass Engineers, Exmouth"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="text-xs text-[var(--muted)]">
                Base: Exmouth, Devon. Coverage: South West — Bristol – Bournemouth – Penzance triangle (Devon, Cornwall, Somerset, Dorset, Wiltshire, Bristol and western Hampshire).
              </div>
            </div>
          </div>
          <CallbackForm
            variant="dark"
            heading="Send a message"
            subheading="Tell us about your boiler or the service you need."
            showPostcode
          />
        </div>
      </section>
    </>
  );
}
