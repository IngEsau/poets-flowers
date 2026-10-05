import Image from "next/image";
import SectionMarker from "./SectionMarker";
import LineHeading from "@/components/motion/LineHeading";
import styles from "@/app/page.module.css";

export default function Collection() {
  return (
    <section className={styles.collection} id="flowers" aria-labelledby="collection-title">
      <SectionMarker number="03" name="The Collection" />
      <LineHeading id="collection-title" className={styles.collectionTitle} lines={["CHOOSE WHAT YOU WANT", "TO SAY."]} />
      <ul className={styles.collectionCategories} aria-label="Occasions shown in the design" data-story-group>
        <li className={styles.activeCategory} data-story-reveal="soft" data-story-distance="10">Love</li><li data-story-reveal="soft" data-story-distance="10" data-story-delay="0.06">Thank you</li><li data-story-reveal="soft" data-story-distance="10" data-story-delay="0.12">Celebrate</li><li data-story-reveal="soft" data-story-distance="10" data-story-delay="0.18">For you</li>
      </ul>
      <div className={styles.collectionGrid} data-story-group>
        <div className={styles.collectionPhotoOne} data-story-reveal="collage" data-story-photo><Image src="/assets/collection-one.jpeg" alt="Flowers in a pink and yellow arrangement" fill sizes="(max-width: 767px) 48vw, 30vw" /></div>
        <div className={styles.collectionPhotoTwo} data-story-reveal="collage" data-story-photo data-story-delay="0.09"><Image src="/assets/collection-two.jpeg" alt="Pastel rose bouquet" fill sizes="(max-width: 767px) 48vw, 30vw" /></div>
        <article className={styles.collectionFeature} aria-label="Love number one arrangement" data-story-reveal="collage" data-story-photo data-story-delay="0.18" data-story-product>
          <Image src="/assets/collection-feature.jpeg" alt="Red roses and lilies in a bouquet" fill sizes="(max-width: 767px) 100vw, 60vw" data-story-product-photo />
          <Image src="/assets/collection-gradient.svg" alt="" fill sizes="(max-width: 767px) 100vw, 60vw" className={styles.collectionGradient} data-story-gradient />
          <div className={styles.collectionProductInfo} data-story-product-info>
            <div><a href="#contact" aria-label="Ask about Love number one, roses, lilies and seasonal flowers">LOVE Nº 01 <span className={styles.productArrow} aria-hidden="true" data-story-product-arrow>→</span></a><p>Roses, lilies &amp; seasonal flowers</p></div>
            <p className={styles.collectionPrice}>$450 MXN</p>
          </div>
        </article>
        <div className={styles.collectionPhotoTall} data-story-reveal="collage" data-story-photo data-story-delay="0.27"><Image src="/assets/meaning-lily.jpeg" alt="Pink lilies and other flowers" fill sizes="(max-width: 767px) 100vw, 26vw" /></div>
      </div>
      <p className={styles.collectionStatement} data-story-reveal="soft"><em>Flowers are chosen for more than how they look.</em><br /><strong>Start with the feeling.</strong></p>
    </section>
  );
}
