import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("biomass-boiler-parts-and-spares")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "Biomass boiler parts and spares for every major brand — Fröling, Hargassner, Herz, Heizomat, Binder, Windhager. Supply-only or supply-and-fit.",
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Parts Enquiry" />;
}
