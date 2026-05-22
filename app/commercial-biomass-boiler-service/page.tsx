import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("commercial-biomass-boiler-service")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Commercial biomass boiler servicing from 50 kW to 3,500 kW+. PPM contracts, RHI compliance, BMS integration and multi-site coverage.",
  alternates: { canonical: "/commercial-biomass-boiler-service" },
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Commercial Service" />;
}
