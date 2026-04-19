"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import Link from "next/link";

const tabs = ["All", "Domestic", "Commercial", "Agricultural", "Hospitality"] as const;

type Review = {
  sector: (typeof tabs)[number];
  quote: string;
  name: string;
  location: string;
  boiler: string;
};

const reviews: Review[] = [
  { sector: "Hospitality", quote: "From survey through to handover the team were professional, informed and respectful of guests. The system has run faultlessly for two winters.", name: "General Manager", location: "Country Hotel, Mid Devon", boiler: "Fröling 500 kW" },
  { sector: "Agricultural", quote: "Harvest is the deciding test — and it has worked perfectly two years running. Highly recommended.", name: "Estate Manager", location: "Dartmoor Estate", boiler: "Hargassner 200 kW" },
  { sector: "Commercial", quote: "Delivered on time around our term calendar, with none of the usual contractor drama. The system has been dependable since day one.", name: "Business Manager", location: "Secondary School, Somerset", boiler: "Herz 150 kW" },
  { sector: "Commercial", quote: "A high-stakes, high-visibility project delivered with total professionalism. Two winters in, the numbers have beaten projections.", name: "Facilities Director", location: "South West Leisure Centre", boiler: "Heizomat 800 kW" },
  { sector: "Commercial", quote: "We had residents in the building throughout and not a single complaint. The boiler has run without interruption since the day it was commissioned.", name: "Home Manager", location: "Nursing Home, Devon", boiler: "Windhager 100 kW" },
  { sector: "Domestic", quote: "It has transformed the house and the log pile is its own kind of satisfaction. The team taught us exactly how to run it properly.", name: "Property Owner", location: "Exmoor Farmhouse", boiler: "Fröling 30 kW log" },
  { sector: "Agricultural", quote: "We had three installers look at our Hargassner before we called Biomass Engineers — they fixed the fault on the first visit.", name: "Estate Owner", location: "Cornwall", boiler: "Hargassner 300 kW" },
  { sector: "Commercial", quote: "The annual service is thorough, the paperwork is immaculate, and we have never had a single RHI compliance concern.", name: "Facilities Director", location: "South West Business Park", boiler: "Herz 400 kW" },
  { sector: "Domestic", quote: "Patient, practical, fair on pricing. We felt safe throughout and our Windhager has never missed a beat.", name: "Homeowner", location: "Devon", boiler: "Windhager 25 kW" },
  { sector: "Hospitality", quote: "Our holiday cottages run on one boiler now — simple for guests, cheap to run, and we never worry about the winter booking.", name: "Holiday Let Owner", location: "Cornwall", boiler: "Hargassner 100 kW" },
  { sector: "Agricultural", quote: "They took on a system two previous companies had walked away from and had it compliant within the month.", name: "Farm Owner", location: "Dorset", boiler: "Herz 180 kW" },
  { sector: "Domestic", quote: "When our controller failed in February they had it working again within 36 hours in mid-winter. Exceptional service.", name: "Homeowner", location: "Somerset", boiler: "Fröling PE1c" },
];

export default function Page() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const list = active === "All" ? reviews : reviews.filter((r) => r.sector === active);
  return (
    <>
      <Hero
        eyebrow="Testimonials"
        title="What our clients say"
        subtitle="A selection of recent feedback from domestic, commercial, agricultural and hospitality clients."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`px-4 py-2 text-sm font-semibold border-2 ${
                  active === t
                    ? "bg-[var(--green)] border-[var(--green)] text-[var(--cream)]"
                    : "border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--cream)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((r, i) => (
              <figure key={i} className="bg-[var(--white)] border-2 border-[var(--green)] border-t-[6px] border-t-[var(--amber)] p-6">
                <div className="text-[var(--amber)] mb-3">★★★★★</div>
                <blockquote className="italic mb-4">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-[var(--muted)]">{r.location}</div>
                  <div className="text-xs text-[var(--amber)] mt-1">{r.sector} · {r.boiler}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <span className="pill pill-amber">★ 5.0 Google Reviews</span>
            <Link href="/case-studies" className="btn btn-green">View case studies →</Link>
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
