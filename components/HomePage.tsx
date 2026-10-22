import Hero from "@/components/sections/Hero";
import Meaning from "@/components/sections/Meaning";
import Collection from "@/components/sections/Collection";
import Gesture from "@/components/sections/Gesture";
import Quote from "@/components/sections/Quote";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";
import StoryMotion from "@/components/motion/StoryMotion";
import FloatingActions from "@/components/layout/FloatingActions";
import { getDictionary, type Locale } from "@/lib/i18n";
import { structuredData } from "@/lib/seo";
import styles from "@/app/page.module.css";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(locale)).replace(/</g, "\\u003c") }} />
      <main className={styles.page} id="home" data-locale={locale}>
        <Hero locale={locale} />
        <Meaning locale={locale} />
        <Collection locale={locale} />
        <Gesture locale={locale} />
        <Quote locale={locale} />
        <ContactCTA locale={locale} />
        <Footer locale={locale} />
        <FloatingActions labels={getDictionary(locale).actions} />
        <StoryMotion />
      </main>
    </>
  );
}
