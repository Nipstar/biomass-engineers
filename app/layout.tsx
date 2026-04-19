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
    "Specialist biomass boiler installation, servicing, repair and maintenance. HETAS registered, RHI compliant. Based in Exmouth, Devon — covering the South West and the whole of the UK.",
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phoneEnquiries,
  email: site.email,
  description: "Specialist biomass boiler installation, servicing and repair. HETAS registered. South West specialist, UK-wide coverage.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
    postalCode: site.address.postalCode,
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "HETAS Registered" },
  ],
  sameAs: [],
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
