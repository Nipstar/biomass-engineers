import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAStrip } from "@/components/CTAStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Marquee } from "@/components/Marquee";
import { site } from "@/lib/site";
import { brands } from "@/lib/brands";
import { caseStudies } from "@/lib/caseStudies";
import { getAllPosts, blogImageForPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | ${site.tagline}` },
  description:
    "Specialist biomass boiler installation, servicing, repair and maintenance across the South West — Bristol to Bournemouth to Penzance. HETAS registered. RHI compliant. Every major brand.",
  alternates: { canonical: "/" },
};

const stats = [
  { n: "500+", label: "Systems Serviced" },
  { n: "15+", label: "Years Experience" },
  { n: "South West", label: "Coverage" },
  { n: "100%", label: "RHI Compliant" },
];

const headlineServices = [
  { n: "01", title: "Biomass Boiler Installation", body: "Pellet, chip and log installations for domestic, agricultural and commercial sites. Survey-led design, full MCS paperwork and first annual service included.", href: "/biomass-boiler-installation" },
  { n: "02", title: "Servicing & Maintenance", body: "Annual and PPM servicing for every major brand. RHI-compliant service records issued as standard. No lock-in contracts.", href: "/biomass-boiler-servicing-and-maintenance" },
  { n: "03", title: "Repairs & Breakdowns", body: "Fault diagnosis, emergency call-outs and standalone engineer visits. Parts sourced for all major brands including orphaned systems.", href: "/biomass-boiler-servicing-and-repair" },
  { n: "04", title: "Commercial Systems", body: "From 50 kW to 3,500 kW. PPM contracts, district heating specification and commissioning for schools, hotels, leisure and agricultural sites.", href: "/commercial-biomass-boiler-service" },
  { n: "05", title: "RHI Compliance", body: "Protect your Renewable Heat Incentive payments. Annual compliant servicing, metering checks and OFGEM documentation.", href: "/renewable-heat-incentive-rhi" },
  { n: "06", title: "Existing Boilers", body: "Take on any biomass system — regardless of who installed it, how old it is, or whether the original engineer is still trading.", href: "/existing-biomass-boilers" },
];

const benefits = [
  { title: "Lower Carbon Emissions", body: "Biomass cuts heating carbon by 85–95% against oil and LPG — the right choice for rural decarbonisation." },
  { title: "RHI Income Protection", body: "Existing RHI payments continue for accredited systems. We protect your income through compliant annual servicing." },
  { title: "Fuel Security", body: "Domestic supply chain. Land Energy premium pellet partnership for guaranteed South West delivery." },
  { title: "Independent Advice", body: "We work on every major brand and represent no single manufacturer — the specification fits your building." },
];

const process = [
  { n: "01", title: "Survey", body: "On-site visit, heat demand assessment and fuel/access review." },
  { n: "02", title: "Design", body: "Boiler specification, fuel store and plant room layout." },
  { n: "03", title: "Installation", body: "3–5 day domestic install; commercial scheduled around your site." },
  { n: "04", title: "Ongoing Support", body: "Annual servicing, RHI reporting and priority breakdown response." },
];

const reviews = [
  { quote: "Delivered on time, left the plant room cleaner than they found it. The system has run faultlessly through two winters.", name: "Country Hotel Manager", location: "Mid Devon" },
  { quote: "We'd had three installers look at our Hargassner before we called Biomass Engineers — they fixed the fault on the first visit.", name: "Estate Manager", location: "Dartmoor" },
  { quote: "The annual service is thorough, the paperwork is immaculate, and we've never had a single RHI compliance concern.", name: "Facilities Director", location: "South West" },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero — prototype layout: left text + stats, right diagonal visual */}
      <section className="bg-[var(--green)] text-[var(--cream)] hero-diagonal overflow-hidden">
        <div className="container-bx px-4 pt-20 pb-0 grid lg:grid-cols-[1fr_0.85fr] gap-0 items-stretch">
          <div className="pb-16 lg:pr-16">
            <span className="eyebrow-mono text-xs text-[var(--amber)] tracking-widest uppercase mb-6 block">
              ◆ HETAS Registered · South West Specialists · Bristol – Bournemouth – Penzance
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.0] mb-8">
              Specialist Biomass Boiler Engineers
            </h1>
            <p className="text-lg text-[var(--cream-dark)] max-w-xl mb-10 leading-relaxed">
              Installation, servicing and repair for every major brand — across the Bristol – Bournemouth – Penzance triangle. HETAS registered. RHI compliant.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact" className="btn btn-amber">Get a Quote</Link>
              <a href={site.phoneEnquiriesHref} className="btn btn-white-outline">Call {site.phoneEnquiries}</a>
            </div>

            {/* Stats row at bottom of hero */}
            <div className="grid grid-cols-4 gap-0 border-t-2 border-[var(--cream)]/20 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="pr-6">
                  <div className="font-display text-3xl md:text-4xl text-[var(--amber)]">{s.n}</div>
                  <div className="eyebrow-mono text-[10px] text-[var(--cream-dark)] tracking-widest uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — diagonal visual */}
          <div className="hidden lg:block relative self-stretch">
            <ImagePlaceholder
              src="/images/work/froling-tx-install.webp"
              label="Fröling TX install · Devon"
              aspect="3/4"
              tone="charcoal"
              priority
              sizes="(max-width: 1024px) 0px, 40vw"
              className="h-full"
            />
            <a
              href={site.hetasUrl}
              target="_blank"
              rel="noopener"
              aria-label="HETAS Registered — view profile"
              className="absolute bottom-8 right-[-20px] bg-[var(--cream)] border-2 border-[var(--charcoal)] shadow-[4px_4px_0_0_var(--charcoal)] px-3 py-2 hover:bg-[var(--amber)] transition-colors"
            >
              <Image src="/hetas-logo.svg" alt="HETAS Registered" width={117} height={72} className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Services 2×3 grid */}
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="section-head">
            <div className="section-head-index">01</div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-3">What we do</h2>
              <p className="text-[var(--mid)] max-w-xl">Full-service biomass engineering — from initial survey through to ongoing maintenance and emergency cover.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {headlineServices.map((s) => (
              <Link
                key={s.n}
                href={s.href}
                className="group bg-[var(--white)] border-2 border-[var(--charcoal)] p-7 flex flex-col hover:shadow-[6px_6px_0_0_var(--amber)] transition-shadow"
              >
                <div className="eyebrow-mono text-xs text-[var(--amber)] mb-3">{s.n}</div>
                <h3 className="font-display text-xl mb-3 group-hover:text-[var(--amber)] transition-colors">{s.title}</h3>
                <p className="text-sm text-[var(--mid)] flex-1 mb-4">{s.body}</p>
                <span className="text-sm font-semibold text-[var(--green)] group-hover:text-[var(--amber)]">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-[var(--charcoal)] text-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="section-head">
            <div className="section-head-index text-[var(--amber)]">02</div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-3">Brands we work on</h2>
              <p className="text-[var(--cream-dark)] max-w-xl">Authorised service and installation relationships with every major manufacturer.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/biomass-boilers/${b.slug}`}
                className="border-2 border-[var(--cream)]/30 bg-[var(--cream)]/5 text-center py-7 font-display font-extrabold text-[var(--cream)] hover:bg-[var(--amber)] hover:text-[var(--charcoal)] hover:border-[var(--amber)] transition-all"
              >
                {b.name}
              </Link>
            ))}
          </div>
          <Link href="/biomass-boilers" className="btn btn-white text-sm">All brands →</Link>
        </div>
      </section>

      {/* Why biomass */}
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-head mb-0">
              <div className="section-head-index">03</div>
              <div>
                <h2 className="font-display text-4xl md:text-5xl mb-4">The right heat source for rural Britain</h2>
              </div>
            </div>
            <p className="text-[var(--mid)] mb-8 max-w-xl leading-relaxed">
              Biomass heating is now one of the lowest-carbon, highest-resilience options for rural, off-grid and high-demand sites — and it keeps delivering when installed and serviced properly.
            </p>
            <ul className="space-y-5">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-4 items-start border-l-4 border-[var(--amber)] pl-4">
                  <div>
                    <div className="font-display font-bold text-lg mb-1">{b.title}</div>
                    <div className="text-[var(--mid)] text-sm">{b.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <ImagePlaceholder 
              src="/images/pellets-hand.jpg"
              label="Biomass wooden fuel pellets" 
              aspect="4/5" 
              tone="green" 
            />
            <div className="absolute -bottom-4 -right-4 bg-[var(--amber)] text-[var(--charcoal)] px-5 py-3 border-2 border-[var(--charcoal)] shadow-[4px_4px_0_0_var(--charcoal)] font-semibold text-sm">
              ENplus A1 Pellets
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--cream-dark)]">
        <div className="container-bx section px-4">
          <div className="section-head">
            <div className="section-head-index">04</div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-3">How it works</h2>
              <p className="text-[var(--mid)] max-w-xl">A straightforward four-stage process from first contact to ongoing support.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {process.map((p) => (
              <div key={p.n} className="bg-[var(--white)] border-2 border-[var(--charcoal)] p-6">
                <div className="eyebrow-mono text-xs text-[var(--amber)] mb-3">{p.n}</div>
                <div className="font-display text-xl mb-2">{p.title}</div>
                <p className="text-sm text-[var(--mid)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="section-head">
            <div className="section-head-index">05</div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-3">Projects we&apos;re proud of</h2>
              <p className="text-[var(--mid)] max-w-xl">Real installs, real challenges, real outcomes.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((c) => (
              <article key={c.slug} className="bg-[var(--white)] border-2 border-[var(--charcoal)] flex flex-col hover:shadow-[6px_6px_0_0_var(--amber)] transition-shadow">
                <ImagePlaceholder
                  src={c.image}
                  label={c.title}
                  aspect="4/3"
                  tone="green"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="self-start eyebrow-mono text-[10px] px-2 py-1 bg-[var(--amber)] text-[var(--charcoal)] font-semibold mb-3 uppercase tracking-widest">
                    {c.sector}
                  </span>
                  <h3 className="font-display text-xl mb-2">{c.title}</h3>
                  <p className="text-sm text-[var(--mid)] mb-4 flex-1">{c.summary}</p>
                  <div className="grid grid-cols-3 gap-2 text-xs border-t-2 border-[var(--charcoal)] pt-3 mb-4">
                    <div><div className="font-bold">{c.boilerBrand}</div><div className="text-[var(--muted)]">Brand</div></div>
                    <div><div className="font-bold">{c.output}</div><div className="text-[var(--muted)]">Output</div></div>
                    <div><div className="font-bold">{c.fuelType}</div><div className="text-[var(--muted)]">Fuel</div></div>
                  </div>
                  <Link href={`/case-studies/${c.slug}`} className="text-[var(--amber)] font-semibold text-sm">
                    View project →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/case-studies" className="btn btn-green">All case studies →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--charcoal)] text-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="section-head">
            <div className="section-head-index text-[var(--amber)]">06</div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-3">What clients say</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure key={i} className="border-2 border-[var(--cream)]/20 border-t-4 border-t-[var(--amber)] p-6">
                <div className="text-[var(--amber)] mb-3">★★★★★</div>
                <blockquote className="italic text-[var(--cream-dark)] mb-4">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption>
                  <div className="text-sm font-semibold text-[var(--cream)]">{r.name}</div>
                  <div className="text-xs text-[var(--muted)]">{r.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link href="/testimonials" className="btn btn-white">All testimonials →</Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-[var(--cream-dark)]">
        <div className="container-bx section px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="section-head mb-0">
              <div className="section-head-index">07</div>
              <div>
                <h2 className="font-display text-4xl md:text-5xl">Biomass insight</h2>
              </div>
            </div>
            <Link href="/blog" className="text-[var(--green)] font-semibold underline underline-offset-4 text-sm">
              All articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
                <article key={p.slug} className="bg-[var(--white)] border-2 border-[var(--charcoal)] flex flex-col hover:shadow-[6px_6px_0_0_var(--amber)] transition-shadow">
                  <ImagePlaceholder src={blogImageForPost(p.slug)} label={p.title} aspect="16/9" tone="green" />
                  <div className="p-6 flex-1 flex flex-col">
                  <span className="self-start eyebrow-mono text-[10px] px-2 py-1 bg-[var(--green)] text-[var(--cream)] font-semibold mb-3 uppercase tracking-widest">
                    {p.category}
                  </span>
                  <h3 className="font-display text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--mid)] mb-4 flex-1">{p.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[var(--muted)]">{p.date}</span>
                    <Link href={`/blog/${p.slug}`} className="text-[var(--amber)] font-semibold text-sm">Read →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
