import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("biomass-boiler-servicing-cost")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Biomass boiler servicing costs — domestic, commercial, standalone visits and emergency call-outs. Transparent UK pricing from £300 + VAT.",
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Annual Service" />;
}
