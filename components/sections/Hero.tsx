import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image src="/assets/hero.jpg" alt="" fill priority sizes="(min-width: 1920px) 1920px, 100vw" className={styles.heroImage} />
      <div className={styles.heroContent}>
        <p className={styles.heroNumber}>01 / 04</p>
        <h1 id="hero-title" className={styles.heroTitle}>
          <span>POET’S</span><span>FLOWERS</span>
        </h1>
        <div className={styles.heroIntro}>
          <span className={styles.heroRule} aria-hidden="true" />
          <p>Flowers for quiet moments,<br />the wild thoughts, and everything<br />in between</p>
        </div>
        <a className={styles.heroLink} href="#flowers">Discover the collection <span aria-hidden="true">→</span></a>
      </div>
      <span className={styles.heroNumberDesktop} aria-hidden="true">01 / 04</span>
    </section>
  );
}
