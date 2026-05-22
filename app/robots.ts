import type { MetadataRoute } from "next";

// PRE-LAUNCH — sub-domain staging. Block ALL crawlers until go-live.
// Restore the AI + search-engine allowlist below when ready to launch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}

/* RE-ENABLE ON LAUNCH:
import { site } from "@/lib/site";
return {
  rules: [
    { userAgent: "*", allow: "/" },
    { userAgent: "GPTBot", allow: "/" },
    { userAgent: "ChatGPT-User", allow: "/" },
    { userAgent: "OAI-SearchBot", allow: "/" },
    { userAgent: "ClaudeBot", allow: "/" },
    { userAgent: "Claude-Web", allow: "/" },
    { userAgent: "anthropic-ai", allow: "/" },
    { userAgent: "PerplexityBot", allow: "/" },
    { userAgent: "Perplexity-User", allow: "/" },
    { userAgent: "Google-Extended", allow: "/" },
    { userAgent: "Googlebot", allow: "/" },
    { userAgent: "Applebot-Extended", allow: "/" },
    { userAgent: "Bingbot", allow: "/" },
    { userAgent: "Meta-ExternalAgent", allow: "/" },
    { userAgent: "DuckAssistBot", allow: "/" },
    { userAgent: "Amazonbot", allow: "/" },
  ],
  sitemap: `${site.url}/sitemap.xml`,
  host: site.url,
};
*/
