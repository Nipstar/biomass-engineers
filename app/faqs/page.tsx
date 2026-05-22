import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FAQAccordion, type FAQCategory } from "@/components/FAQAccordion";
import { CTAStrip } from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Biomass Boiler FAQs",
  description:
    "Answers to the most common questions about biomass boilers — servicing, installation, RHI, repairs and commercial systems.",
  alternates: { canonical: "/faqs" },
};

const categories: FAQCategory[] = [
  {
    name: "General",
    faqs: [
      { q: "What is a biomass boiler?", a: "A biomass boiler burns wood — pellet, chip or log — to produce heat for a wet central heating system. It plays the same role as a gas or oil boiler but runs on a renewable fuel." },
      { q: "What fuels do biomass boilers use?", a: "Wood pellets (most common for domestic and light commercial), wood chip (larger commercial and agricultural) and logs (smaller rural properties). Some systems handle multiple fuels." },
      { q: "Are biomass boilers still worth it in 2025?", a: "For off-grid, rural, agricultural and high-demand sites, yes — fuel costs compete favourably with oil, and existing RHI income continues for accredited systems. For small mains-gas homes, heat pumps now often win." },
      { q: "How efficient are biomass boilers?", a: "Modern biomass boilers typically achieve 88–94% efficiency when correctly commissioned and serviced. Poor fuel quality or missed servicing can drop efficiency sharply." },
      { q: "What's the difference between pellet, chip and log boilers?", a: "Pellets are uniform and automated — best for domestic. Chip suits larger commercial and agricultural sites with bulk storage. Logs are manual-feed, best for rural properties with on-site wood." },
    ],
  },
  {
    name: "Servicing & Maintenance",
    faqs: [
      { q: "How often should a biomass boiler be serviced?", a: "Annually at minimum. Heavy-use commercial sites often need two visits per year. RHI-registered systems must be serviced annually." },
      { q: "What's included in a biomass boiler service?", a: "Combustion chamber clean, flue and heat exchanger inspection, auger and hopper check, controls calibration, lambda probe check, safety checks and a written service record with RHI compliance information." },
      { q: "What happens if I miss a service?", a: "Efficiency drops, fault frequency rises, and RHI payments can be suspended at the next compliance check. In severe cases, safety interlocks may trip and shut down the boiler." },
      { q: "Can you service a boiler that has not been serviced for several years?", a: "Yes — we take on neglected systems regularly. The first visit often runs long, but it is routine work for us." },
      { q: "Do you offer ongoing maintenance contracts?", a: "Yes — annual service plans for domestic clients and PPM contracts for commercial. Both optional; you can book standalone visits whenever." },
    ],
  },
  {
    name: "Installation",
    faqs: [
      { q: "How long does installation take?", a: "A typical domestic installation is 3–5 days on site. Commercial projects and district heating schemes run to weeks depending on pipework and plant room works." },
      { q: "What size biomass boiler do I need?", a: "It is determined by a heat demand calculation — building fabric, size, temperature requirements and hot water load. We size every installation properly, not from a postcode table." },
      { q: "Do I need planning permission for a biomass boiler?", a: "Usually not for domestic. Chimney height, listed building status and neighbour proximity can trigger planning — we advise during the survey." },
      { q: "What fuel storage do I need?", a: "Pellet installations need a store or silo sized for a bulk delivery. Chip needs a larger store with delivery vehicle access. Log systems need dry, covered storage." },
    ],
  },
  {
    name: "RHI & Funding",
    faqs: [
      { q: "Is the RHI still paying out?", a: "Yes — existing accredited recipients continue to receive their payments for the full term (typically 20 years from accreditation). The scheme is closed to new applicants." },
      { q: "What do I need to maintain my RHI payments?", a: "Annual RHI-compliant servicing, correct metering where required, and a maintained system. Non-compliant equipment or missed servicing can result in suspension." },
      { q: "What happens if I fail an RHI compliance check?", a: "OFGEM can suspend payments pending remediation, and in severe cases clawback previously paid sums. Prevention is far cheaper than cure — keep your servicing up to date." },
      { q: "Can I still get funding for a new biomass boiler?", a: "The Boiler Upgrade Scheme is focused on heat pumps. Rural commercial biomass sometimes attracts regional grants — we can advise on current routes on a case by case basis." },
    ],
  },
  {
    name: "Repairs & Parts",
    faqs: [
      { q: "Can you repair any brand of biomass boiler?", a: "Yes — our engineers are trained across all major manufacturers, and we source parts for brands no longer supported by the original installer." },
      { q: "Do I need a service contract to book a repair?", a: "No. Single repair visits are available to anyone; we just need a fault description and your postcode." },
      { q: "How quickly can you respond to a breakdown?", a: "Priority breakdowns normally attended within 24–48 hours. Service plan customers and commercial PPM clients get fastest response." },
      { q: "Do you supply parts without fitting them?", a: "Yes — supply-only is fine. Tell us the brand, model and part, or describe the fault, and we will work it out." },
    ],
  },
  {
    name: "Commercial & District Heating",
    faqs: [
      { q: "What size commercial boiler can you service?", a: "50 kW to around 3,500 kW as standard. Larger industrial sites in partnership with specialist plant teams." },
      { q: "Do you cover PPM contracts?", a: "Yes. Multi-visit PPM contracts sized around your boiler, operating hours and fuel type. Quarterly, half-yearly or annual." },
      { q: "Can you design a district heating system from scratch?", a: "Yes — feasibility, design, specification, install, commissioning and ongoing maintenance. Multi-building and campus schemes." },
    ],
  },
];

export default function Page() {
  return (
    <>
      <Hero eyebrow="FAQs" title="Frequently Asked Questions" subtitle="Answers to the most common questions about biomass boilers, servicing, RHI and our services." />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 max-w-4xl">
          <FAQAccordion categories={categories} />
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
