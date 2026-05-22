import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceBySlug } from "@/lib/services";

const service = serviceBySlug("services/coded-welding")!;

export const metadata: Metadata = {
  title: service.h1,
  description:
    "In-house coded welding for biomass primary circuits, district heating pipework, plant rooms and substations. Certified welders, full QA documentation.",
  alternates: { canonical: "/services/coded-welding" },
};

export default function Page() {
  return <ServicePageTemplate service={service} defaultFormService="Commercial Service" />;
}
