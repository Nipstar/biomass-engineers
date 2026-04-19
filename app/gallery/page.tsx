import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from Biomass Engineers Limited installations and service visits across the UK.",
};

const items = Array.from({ length: 18 }).map((_, i) => ({
  label: [
    "Commercial plant room",
    "Wood chip store",
    "Pellet delivery",
    "Dartmoor farmhouse boiler",
    "Fröling T4e",
    "Hargassner ECO-PK",
    "District heating pipework",
    "Coded weld inspection",
    "Wood chip combustion",
    "Herz BioFire",
    "Hotel plant room",
    "School commissioning",
    "Leisure centre district heating",
    "Windhager BioWIN",
    "Log boiler installation",
    "Workshop parts store",
    "Flue assembly",
    "Engineer on site",
  ][i],
}));

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="On site with Biomass Engineers"
        subtitle="Installation, servicing, commissioning — a sample of the systems and sites we work on."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {items.map((it, i) => (
              <ImagePlaceholder key={i} label={it.label} aspect="1/1" tone={i % 3 === 0 ? "green" : i % 3 === 1 ? "cream" : "charcoal"} />
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
