import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("biomass-boiler-servicing-and-repair")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Biomass boiler repair and fault diagnosis — every major brand. Emergency call-outs, priority response and no contract required.",
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Repair & Breakdown" />;
}
