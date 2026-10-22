import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";
import "@/styles/motion.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export default function SiteDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale}>
      <body className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
