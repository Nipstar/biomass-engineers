import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Specialist biomass boiler installation, servicing, repair and maintenance. HETAS registered, RHI compliant. Based in Exmouth, Devon — covering the South West across the Bristol – Bournemouth – Penzance triangle.",
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    locale: "en_GB",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Biomass Engineers Limited — Specialist Biomass Boiler Servicing & Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.jpg"],
  },
  // PRE-LAUNCH: block indexing site-wide. Flip to { index: true, follow: true } at go-live.
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  // Canonical is intentionally NOT set on the root metadata: Next.js inherits
  // parent metadata into children, so a hard-coded root canonical would force
  // every child route to claim the homepage URL. Each page sets its own via
  // resolveCanonical() below, or Google falls back to the rendered URL.
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phoneE164,
  email: site.email,
  description: "Specialist biomass boiler installation, servicing and repair. HETAS registered. South West coverage across the Bristol – Bournemouth – Penzance triangle.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
    postalCode: site.address.postalCode,
  },
  areaServed: {
    "@type": "GeoShape",
    name: "South West England — Bristol to Bournemouth to Penzance",
    polygon: "51.4545 -2.5879 50.7192 -1.8808 50.1186 -5.5373 51.4545 -2.5879",
  },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "HETAS Registered" },
  ],
  sameAs: [site.hetasUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-amber focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <TopBar />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
