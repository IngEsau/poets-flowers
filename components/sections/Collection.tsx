import Image from "next/image";
import SectionMarker from "./SectionMarker";
import styles from "@/app/page.module.css";

export default function Collection() {
  return (
    <section className={styles.collection} id="flowers" aria-labelledby="collection-title">
      <SectionMarker number="03" name="The Collection" />
      <h2 id="collection-title" className={styles.collectionTitle}>CHOOSE WHAT YOU WANT<br />TO SAY.</h2>
      <ul className={styles.collectionCategories} aria-label="Occasions shown in the design">
        <li className={styles.activeCategory}>Love</li><li>Thank you</li><li>Celebrate</li><li>For you</li>
      </ul>
      <div className={styles.collectionGrid}>
        <div className={styles.collectionPhotoOne}><Image src="/assets/collection-one.jpeg" alt="Flowers in a pink and yellow arrangement" fill sizes="(max-width: 767px) 48vw, 30vw" /></div>
        <div className={styles.collectionPhotoTwo}><Image src="/assets/collection-two.jpeg" alt="Pastel rose bouquet" fill sizes="(max-width: 767px) 48vw, 30vw" /></div>
        <article className={styles.collectionFeature} aria-label="Love number one arrangement">
          <Image src="/assets/collection-feature.jpeg" alt="Red roses and lilies in a bouquet" fill sizes="(max-width: 767px) 100vw, 60vw" />
          <Image src="/assets/collection-gradient.svg" alt="" fill sizes="(max-width: 767px) 100vw, 60vw" className={styles.collectionGradient} />
          <div className={styles.collectionProductInfo}>
            <div><a href="#contact" aria-label="Ask about Love number one, roses, lilies and seasonal flowers">LOVE Nº 01 <span className={styles.productArrow} aria-hidden="true">→</span></a><p>Roses, lilies &amp; seasonal flowers</p></div>
            <p className={styles.collectionPrice}>$450 MXN</p>
          </div>
        </article>
        <div className={styles.collectionPhotoTall}><Image src="/assets/meaning-lily.jpeg" alt="Pink lilies and other flowers" fill sizes="(max-width: 767px) 100vw, 26vw" /></div>
      </div>
      <p className={styles.collectionStatement}><em>Flowers are chosen for more than how they look.</em><br /><strong>Start with the feeling.</strong></p>
    </section>
  );
}
