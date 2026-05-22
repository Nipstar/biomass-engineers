import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Reviews and testimonials from Biomass Engineers Limited clients — hotels, estates, schools, nursing homes and domestic owners across the South West.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
