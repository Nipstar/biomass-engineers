import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CallbackForm } from "@/components/CallbackForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Biomass Engineers Limited",
  description:
    "Call, email or request a callback. Biomass Engineers Limited is based in Exmouth, Devon and covers the South West and the whole of the UK.",
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImagePlaceholder src="/images/devon-map.png" label="Map — Exmouth, Devon" aspect="1/1" tone="cream" />
                <div className="text-[10px] text-[var(--muted)]">
                  Map: Exmouth, Devon base
                </div>
              </div>
              <div className="space-y-4">
                <ImagePlaceholder src="/images/service-van.jpg" label="Service Van" aspect="1/1" tone="green" />
                <div className="text-[10px] text-[var(--muted)]">
                  Coverage: UK-wide technical support
                </div>
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
