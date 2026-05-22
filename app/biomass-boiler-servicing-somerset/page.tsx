import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/LocationPageTemplate";
import { locationBySlug } from "@/lib/locations";

const loc = locationBySlug("biomass-boiler-servicing-somerset")!;

export const metadata: Metadata = {
  title: `Biomass Boiler Services in ${loc.city} | ${loc.region}`,
  description: loc.intro,
  alternates: { canonical: "/biomass-boiler-servicing-somerset" },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageTemplate loc={loc} />;
}
