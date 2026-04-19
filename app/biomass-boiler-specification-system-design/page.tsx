import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("biomass-boiler-specification-system-design")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Biomass boiler specification and system design for architects, M&E consultants and developers. Heat calcs, fuel store design, tender-ready documentation.",
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Other" />;
}
