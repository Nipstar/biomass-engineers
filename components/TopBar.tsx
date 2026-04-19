import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--green)] text-[var(--cream)] text-xs">
      <div className="container-bx flex justify-end items-center gap-6 h-10 px-4">
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
  );
}
