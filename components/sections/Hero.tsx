import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import TextLines from "@/components/ui/TextLines";
import LanguageSwitch from "@/components/layout/LanguageSwitch";
import { getDictionary, type Locale } from "@/lib/i18n";
import styles from "@/app/page.module.css";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className={styles.hero} aria-labelledby="hero-title" data-story-hero>
      <Image src="/assets/hero.jpg" alt="" fill priority sizes="(min-width: 1920px) 1920px, 100vw" className={styles.heroImage} data-story-hero-image />
      <LanguageSwitch locale={locale} label={t.language.label} />
      <div className={styles.heroContent}>
        <h1 id="hero-title" className={styles.heroTitle}>
          <span data-story-hero-word>POET’S</span><span data-story-hero-word>FLOWERS</span>
        </h1>
        <span className={styles.heroNumber} data-story-hero-number aria-hidden="true">01 / 04</span>
        <div className={styles.heroIntro} data-story-hero-intro>
          <span className={styles.heroRule} aria-hidden="true" />
          <p><TextLines lines={t.hero.intro} /></p>
        </div>
        <a className={styles.heroLink} href="#flowers" data-story-hero-cta>{t.hero.discover} <span aria-hidden="true"><ArrowRightIcon size="1em" /></span></a>
      </div>
    </section>
  );
}
