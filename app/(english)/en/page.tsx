import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en");

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
