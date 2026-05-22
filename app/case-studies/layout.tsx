import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biomass Boiler Case Studies",
  description:
    "Real biomass boiler installation, servicing and district-heating projects delivered by Biomass Engineers Limited across the South West — hospitality, agricultural, industrial and commercial.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
