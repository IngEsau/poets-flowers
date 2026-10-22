import SectionMarker from "./SectionMarker";
import CollectionProduct from "./CollectionProduct";
import CollectionTabs from "./CollectionTabs";
import LineHeading from "@/components/motion/LineHeading";
import { arrangements, occasions } from "@/lib/collection";
import { getDictionary, type Locale } from "@/lib/i18n";
import styles from "@/app/page.module.css";

export default function Collection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className={styles.collection} id="flowers" aria-labelledby="collection-title">
      <SectionMarker number="03" name={t.collection.marker} />
      <LineHeading id="collection-title" className={styles.collectionTitle} lines={t.collection.title} />
      <CollectionTabs label={t.collection.occasionsLabel} panels={occasions.map((occasion) => ({
        id: `collection-${occasion.id}`,
        label: t.collection.occasions[occasion.id],
        content: (
          <div className={styles.collectionGrid} data-occasion={occasion.id} data-story-group>
            {occasion.items.map((key, index) => {
              const arrangement = arrangements[key];
              return <CollectionProduct key={key} {...arrangement} {...t.arrangements[key]} labels={t.collection} className={styles.collectionCard}
                image={`/assets/collection/${arrangement.image}.webp`} sizes="(max-width: 767px) 88vw, (max-width: 1100px) 58vw, 60vw" delay={index * 0.07} />;
            })}
          </div>
        ),
      }))} />
      <p className={styles.collectionPricing}>{t.collection.pricing}</p>
    </section>
  );
}
