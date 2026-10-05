import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import styles from "@/app/page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title" data-story-hero>
      <Image src="/assets/hero.jpg" alt="" fill priority sizes="(min-width: 1920px) 1920px, 100vw" className={styles.heroImage} data-story-hero-image />
      <div className={styles.heroContent}>
        <h1 id="hero-title" className={styles.heroTitle}>
          <span data-story-hero-word>POET’S</span><span data-story-hero-word>FLOWERS</span>
        </h1>
        <span className={styles.heroNumber} data-story-hero-number aria-hidden="true">01 / 04</span>
        <div className={styles.heroIntro} data-story-hero-intro>
          <span className={styles.heroRule} aria-hidden="true" />
          <p>Flowers for quiet moments,<br />the wild thoughts, and everything<br />in between</p>
        </div>
        <a className={styles.heroLink} href="#flowers" data-story-hero-cta>Discover the collection <span aria-hidden="true"><ArrowRightIcon size="1em" /></span></a>
      </div>
    </section>
  );
}
