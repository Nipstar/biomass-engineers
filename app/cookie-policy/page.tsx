import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Biomass Engineers Limited — what cookies we use and how to control them.",
};

const cookies = [
  { name: "__session", type: "Essential", purpose: "Maintains session state across page navigations.", expires: "Session" },
  { name: "_vercel_no_cache", type: "Essential", purpose: "Infrastructure cookie used by our hosting provider.", expires: "Session" },
  { name: "_ga", type: "Analytics (optional)", purpose: "Google Analytics — tracks page views and session data in aggregate. Only set with your consent.", expires: "2 years" },
  { name: "_gid", type: "Analytics (optional)", purpose: "Google Analytics session identifier.", expires: "24 hours" },
];

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="What cookies we use, why, and how to manage them."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4 max-w-3xl">
          <p className="text-[var(--muted)] text-sm mb-8">Last updated: April 2025</p>

          <h2 className="font-display text-2xl mb-4">What are cookies?</h2>
          <p className="text-[var(--mid)] mb-6 text-sm leading-relaxed">
            Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work correctly and to provide information to website owners.
          </p>

          <h2 className="font-display text-2xl mb-4">Cookies we use</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--green)] text-[var(--cream)]">
                  <th className="p-3 text-left font-semibold">Cookie</th>
                  <th className="p-3 text-left font-semibold">Type</th>
                  <th className="p-3 text-left font-semibold">Purpose</th>
                  <th className="p-3 text-left font-semibold">Expires</th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--cream-dark)]"}>
                    <td className="p-3 font-mono text-xs">{c.name}</td>
                    <td className="p-3">{c.type}</td>
                    <td className="p-3 text-[var(--mid)]">{c.purpose}</td>
                    <td className="p-3 text-[var(--muted)]">{c.expires}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl mb-4">How to control cookies</h2>
          <p className="text-[var(--mid)] mb-4 text-sm leading-relaxed">
            You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for specific websites. Disabling essential cookies may affect website functionality.
          </p>
          <p className="text-[var(--mid)] mb-8 text-sm leading-relaxed">
            For guidance on managing cookies in specific browsers, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline">aboutcookies.org</a>.
          </p>

          <h2 className="font-display text-2xl mb-4">Third-party cookies</h2>
          <p className="text-[var(--mid)] mb-8 text-sm leading-relaxed">
            We may use third-party services that set their own cookies (e.g. analytics providers). We have no direct control over these cookies. Each third party&rsquo;s privacy and cookie policy applies.
          </p>

          <h2 className="font-display text-2xl mb-4">Changes to this policy</h2>
          <p className="text-[var(--mid)] mb-4 text-sm leading-relaxed">
            We may update this cookie policy. The current version is always available on this page.
          </p>

          <p className="text-[var(--mid)] text-sm">
            Questions? Contact us at <a href={site.emailHref} className="underline">{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
