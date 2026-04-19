import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("biomass-engineer-services")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Standalone biomass engineer visits — pre-purchase inspections, fuel quality testing, RHI audits, control diagnosis and site training.",
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Standalone Visit" />;
}
