import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from Biomass Engineers Limited installations and service visits across the UK.",
  alternates: { canonical: "/gallery" },
};

const items: { label: string; src: string }[] = [
  { label: "Fröling boiler",                              src: "/images/canva/square/frolig-boiler.webp" },
  { label: "Fröling P4 pellet boiler",                    src: "/images/canva/square/3.webp" },
  { label: "Fröling Turbomat 350 kW",                     src: "/images/canva/portrait/1.webp" },
  { label: "Binda boiler relocated",                      src: "/images/canva/square/binda-boiler-relocated.webp" },
  { label: "Megawatt boiler",                             src: "/images/canva/portrait/megawatt-boiler.webp" },
  { label: "Ariterm Bioenergy boiler service",            src: "/images/canva/landscape/ariterm-boiler-service.webp" },
  { label: "Waste-wood boiler",                           src: "/images/canva/landscape/waste-wood-boiler.webp" },
  { label: "350 kW district heating + gas back-up",       src: "/images/canva/landscape/350kw-district-heating-system-with-gas-back-up-boiler.webp" },
  { label: "Heat matrix on anaerobic digestion dome",     src: "/images/canva/landscape/heat-matrix-anearobic-boiler.webp" },
  { label: "Food-waste-to-energy unit",                   src: "/images/canva/landscape/food-waste-to-energy-unit.webp" },
  { label: "Bespoke concentration unit (Siemens HMI)",    src: "/images/canva/landscape/bespoke-concentration-unit.webp" },
  { label: "Wood shredder with overband magnets",         src: "/images/canva/landscape/waste-wood-shredder-with-overband-magnets.webp" },
  { label: "Fuel delivery and storage",                   src: "/images/canva/landscape/fuel-delivery-and-storage.webp" },
  { label: "Tipped fuel delivery",                        src: "/images/canva/square/tipped-fuel-delivery.webp" },
  { label: "Biomass boiler PLC controls",                 src: "/images/canva/landscape/biomass-boiler-controls.webp" },
  { label: "Biomass controller (touchscreen)",            src: "/images/canva/square/biomass-controller.webp" },
  { label: "Boiler control cabinet",                      src: "/images/canva/portrait/boiler-controls.webp" },
  { label: "Pump manifold pipework",                      src: "/images/canva/landscape/9.webp" },
  { label: "Reconditioned heat exchanger",                src: "/images/canva/portrait/reconditioned-rebuild-heat-exchanger.webp" },
  { label: "Combustion chamber flame",                    src: "/images/canva/portrait/7.webp" },
  { label: "Industrial air heating",                      src: "/images/canva/square/industrial-air-heating.webp" },
  { label: "Bespoke boiler build",                        src: "/images/canva/portrait/boiler-build.webp" },
  { label: "Freestanding flue",                           src: "/images/canva/portrait/freestanding-flue.webp" },
  { label: "Kalvis hydraulic moving-floor fuel store",    src: "/images/canva/portrait/kalvis-hydraulic-moving-floor-fuel-store.webp" },
  { label: "Gas engine CHP — chicken-shed heating",       src: "/images/canva/portrait/gas-engine-generator-heat-distribution-heating-chicken-sheds.webp" },
  { label: "Replacement water-to-air units (crop dryer)", src: "/images/canva/portrait/replacement-water-to-air-units.webp" },
  { label: "Jim King — Director",                         src: "/images/canva/square/jim-king.webp" },
  { label: "Gary Thorne — Director",                      src: "/images/canva/square/gary-thorne.webp" },
];

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
              <ImagePlaceholder key={i} src={it.src} label={it.label} aspect="1/1" tone={i % 3 === 0 ? "green" : i % 3 === 1 ? "cream" : "charcoal"} />
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
