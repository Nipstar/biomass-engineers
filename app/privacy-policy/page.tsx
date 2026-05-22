import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Biomass Engineers Limited — how we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Biomass Engineers Limited collects, uses and protects your personal data."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 max-w-3xl prose prose-sm prose-headings:font-display prose-headings:font-black prose-a:text-[var(--green)] max-w-none">
          <p className="text-[var(--muted)] text-sm mb-8">Last updated: April 2025</p>

          <h2>1. Who we are</h2>
          <p>Biomass Engineers Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a company registered in England and Wales. Our registered address is {site.address.streetAddress}, {site.address.locality}, {site.address.region}, {site.address.postalCode}. We can be contacted at <a href={site.emailHref}>{site.email}</a>.</p>

          <h2>2. What data we collect</h2>
          <p>We collect personal data when you:</p>
          <ul>
            <li>Submit a contact or callback form on our website (name, phone number, email address, postcode, message)</li>
            <li>Call or email us directly</li>
            <li>Enter into a contract with us for servicing, installation or other works</li>
            <li>Use our on-site chat feature (conversation content only — no account required)</li>
          </ul>
          <p>We do not collect payment card data via our website. All payments are processed directly or through our accounts department.</p>

          <h2>3. How we use your data</h2>
          <p>We use personal data to:</p>
          <ul>
            <li>Respond to enquiries and callback requests</li>
            <li>Provide, manage and invoice for our services</li>
            <li>Send service reminders and maintenance notifications (where you have an existing service relationship with us)</li>
            <li>Meet our legal obligations, including RHI compliance documentation</li>
          </ul>
          <p>We do not sell your data to third parties. We do not use your data for unsolicited marketing without your consent.</p>

          <h2>4. Legal basis for processing</h2>
          <p>We process personal data on the following legal bases:</p>
          <ul>
            <li><strong>Contract performance</strong> — to carry out services you have engaged us for</li>
            <li><strong>Legitimate interests</strong> — to respond to enquiries and maintain customer relationships</li>
            <li><strong>Legal obligation</strong> — where required by law or regulatory requirement</li>
            <li><strong>Consent</strong> — where you have explicitly agreed (e.g. marketing communications)</li>
          </ul>

          <h2>5. How long we keep your data</h2>
          <p>Enquiry data is retained for up to 24 months. Service and contract records are retained for a minimum of 6 years in accordance with our legal and RHI compliance obligations. You may request deletion of personal data at any time, subject to our legal retention requirements.</p>

          <h2>6. Third parties</h2>
          <p>We use the following third-party services that may process personal data on our behalf:</p>
          <ul>
            <li>Email delivery providers (for form submissions and service communications)</li>
            <li>Website hosting and infrastructure providers</li>
          </ul>
          <p>All third parties we use are GDPR-compliant and data processing agreements are in place where required.</p>

          <h2>7. Your rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure of your data (subject to legal retention obligations)</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href={site.emailHref}>{site.email}</a>.</p>

          <h2>8. Cookies</h2>
          <p>Our website uses cookies. See our <a href="/cookie-policy">Cookie Policy</a> for full details.</p>

          <h2>9. Changes to this policy</h2>
          <p>We may update this policy from time to time. The current version is always available on this page.</p>

          <h2>10. Complaints</h2>
          <p>If you have concerns about how we handle your data, you can contact the Information Commissioner&rsquo;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
        </div>
      </section>
    </>
  );
}
