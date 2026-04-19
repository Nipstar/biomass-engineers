import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("biomass-boiler-installation")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Specialist biomass boiler installation for domestic, agricultural and commercial sites — HETAS registered, MCS paperwork and first annual service included.",
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Installation" />;
}
