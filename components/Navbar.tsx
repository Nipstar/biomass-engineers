"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-[var(--cream)] border-b-2 border-[var(--green)] transition-shadow ${scrolled ? "shadow-[0_4px_0_0_var(--green)]" : ""}`}
    >
      <div className="container-bx flex items-center justify-between gap-4 h-20 px-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl font-extrabold text-[var(--green)]">
            Biomass Engineers
          </span>
          <span className="text-xs md:text-sm text-[var(--muted)] font-medium">
            Limited
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5" aria-label="Primary">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => "children" in item && item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-[var(--charcoal)] hover:text-[var(--amber)] transition-colors py-2"
              >
                {item.label}
                {"children" in item && item.children ? " ▾" : ""}
              </Link>
              {"children" in item && item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-[260px] bg-[var(--white)] border-2 border-[var(--green)] offset-amber-sm z-50">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm font-medium text-[var(--charcoal)] border-b border-[var(--cream-dark)] last:border-b-0 hover:bg-[var(--cream)] hover:text-[var(--amber)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneEnquiriesHref} className="btn btn-amber hidden sm:inline-flex text-sm">
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border-2 border-[var(--green)] text-[var(--green)]"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t-2 border-[var(--green)] bg-[var(--cream)]" aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-[var(--cream-dark)]">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 font-semibold text-[var(--charcoal)]"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <ul className="pl-4 pb-2">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2 text-sm text-[var(--mid)]"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
