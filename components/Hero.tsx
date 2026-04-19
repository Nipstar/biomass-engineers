import { site } from "@/lib/site";

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Book a Service Visit",
  ctaHref = "/contact",
  phone = true,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  phone?: boolean;
  compact?: boolean;
}) {
  return (
    <section className="bg-[var(--green)] text-[var(--cream)] hero-diagonal border-b-2 border-[var(--charcoal)]">
      <div className={`container-bx px-4 ${compact ? "py-14 md:py-20" : "section"}`}>
        {eyebrow && (
          <div className="eyebrow-mono text-xs text-[var(--amber)] uppercase tracking-widest mb-4">
            ◆ {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-4xl mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-[var(--cream-dark)] max-w-3xl mb-8 leading-relaxed">{subtitle}</p>
        )}
        <div className="flex flex-wrap gap-4">
          <a href={ctaHref} className="btn btn-amber">
            {ctaLabel}
          </a>
          {phone && (
            <a href={site.phoneEnquiriesHref} className="btn btn-white-outline">
              Call {site.phoneEnquiries}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
