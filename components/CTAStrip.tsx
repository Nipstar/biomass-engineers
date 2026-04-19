import { site } from "@/lib/site";
import Link from "next/link";

export function CTAStrip({
  heading = "Ready to Book or Get a Quote?",
  subtext = "Call the team, drop us an email, or request a callback — we'll get back to you the same working day.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="bg-[var(--amber)] border-y-2 border-[var(--charcoal)]">
      <div className="container-bx section px-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-3">{heading}</h2>
            <p className="text-[var(--charcoal)]/80 max-w-2xl">{subtext}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={site.phoneEnquiriesHref} className="btn btn-green-solid">
              Call {site.phoneEnquiries}
            </a>
            <Link href="/contact" className="btn btn-green">
              Send a message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
