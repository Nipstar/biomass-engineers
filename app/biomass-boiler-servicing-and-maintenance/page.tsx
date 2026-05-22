import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("biomass-boiler-servicing-and-maintenance")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Annual biomass boiler servicing and maintenance — all major brands, RHI-compliant service records, no lock-in. Domestic, agricultural and commercial.",
  alternates: { canonical: "/biomass-boiler-servicing-and-maintenance" },
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Annual Service" />;
}
