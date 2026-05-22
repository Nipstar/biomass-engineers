import Image from "next/image";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--green)] text-[var(--cream)] text-xs">
      <div className="container-bx flex justify-between items-center gap-6 h-10 px-4">
        <a
          href={site.hetasUrl}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="HETAS Registered — view our HETAS profile"
        >
          <Image
            src="/hetas-logo.svg"
            alt="HETAS"
            width={117}
            height={72}
            className="h-6 w-auto bg-[var(--cream)] px-1 py-0.5"
          />
          <span className="font-semibold uppercase tracking-wider text-[10px]">Registered ↗</span>
        </a>
        <div className="flex items-center gap-6">
          <a href={site.phoneEnquiriesHref} className="hover:text-[var(--amber)] transition-colors">
            Enquiries · {site.phoneEnquiries}
          </a>
          <a href={site.phoneTechnicalHref} className="hover:text-[var(--amber)] transition-colors">
            Technical · {site.phoneTechnical}
          </a>
          <a href={site.emailHref} className="hover:text-[var(--amber)] transition-colors">
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
