import type { Metadata } from "next";
import { contact } from "./contact";
import { getDictionary, localePaths, type Locale } from "./i18n";

// The public domain used by this site's FTP deployment.
export const siteUrl = "https://poetsflowers.buxdev.com";
export const languageAlternates = {
  es: `${siteUrl}${localePaths.es}`,
  en: `${siteUrl}${localePaths.en}`,
  "x-default": `${siteUrl}${localePaths.es}`,
};

export function pageMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).seo;
  const url = `${siteUrl}${localePaths[locale]}`;
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    // These terms also guide the visible copy. Google does not use the keywords meta tag for ranking.
    keywords: t.keywords,
    applicationName: "Poet’s Flowers",
    alternates: { canonical: url, languages: languageAlternates },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "website",
      siteName: "Poet’s Flowers",
      title: t.title,
      description: t.description,
      url,
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      images: [{ url: "/assets/og-poets-flowers.jpg", width: 1200, height: 630, alt: t.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: [{ url: "/assets/og-poets-flowers.jpg", alt: t.imageAlt }],
    },
    icons: { icon: [{ url: "/favicon.ico", type: "image/x-icon" }] },
  };
}

export function structuredData(locale: Locale) {
  const t = getDictionary(locale).seo;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Poet’s Flowers",
        url: `${siteUrl}/`,
        image: `${siteUrl}/assets/og-poets-flowers.jpg`,
        email: contact.email.replace("mailto:", ""),
        telephone: contact.phoneLabel,
        sameAs: [contact.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}${localePaths[locale]}#website`,
        name: "Poet’s Flowers",
        url: `${siteUrl}${localePaths[locale]}`,
        description: t.description,
        inLanguage: locale,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}
