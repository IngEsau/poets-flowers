import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("es");

export default function Home() {
  return <HomePage locale="es" />;
}
