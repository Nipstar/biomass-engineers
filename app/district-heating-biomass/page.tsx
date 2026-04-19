import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("district-heating-biomass")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Biomass district heating design, install, commissioning and maintenance. Pre-insulated pipework, coded welding, BMS integration and long-term support.",
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Commercial Service" />;
}
