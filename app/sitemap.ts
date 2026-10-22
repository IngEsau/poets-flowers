import type { MetadataRoute } from "next";
import { locales, localePaths } from "@/lib/i18n";
import { languageAlternates, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map(locale => ({
    url: `${siteUrl}${localePaths[locale]}`,
    alternates: { languages: languageAlternates },
  }));
}
