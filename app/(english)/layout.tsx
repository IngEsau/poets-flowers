import type { ReactNode } from "react";
import SiteDocument from "@/components/layout/SiteDocument";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
