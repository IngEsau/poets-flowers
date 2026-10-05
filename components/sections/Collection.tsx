import SectionMarker from "./SectionMarker";
import CollectionProduct from "./CollectionProduct";
import CollectionTabs from "./CollectionTabs";
import LineHeading from "@/components/motion/LineHeading";
import { arrangements, occasions } from "@/lib/collection";
import styles from "@/app/page.module.css";

export default function Collection() {
  return (
    <section className={styles.collection} id="flowers" aria-labelledby="collection-title">
      <SectionMarker number="03" name="The Collection" />
      <LineHeading id="collection-title" className={styles.collectionTitle} lines={["CHOOSE WHAT YOU WANT", "TO SAY."]} />
      <CollectionTabs panels={occasions.map((occasion) => ({
        id: `collection-${occasion.id}`,
        label: occasion.label,
        content: (
          <div className={styles.collectionGrid} data-occasion={occasion.id} data-story-group>
            {occasion.items.map((key, index) => {
              const arrangement = arrangements[key];
              return <CollectionProduct key={key} {...arrangement} className={styles.collectionCard}
                image={`/assets/collection/${arrangement.image}.webp`} sizes="(max-width: 767px) 88vw, (max-width: 1100px) 58vw, 60vw" delay={index * 0.07} />;
            })}
          </div>
        ),
      }))} />
      <p className={styles.collectionPricing}>Prices may vary according to your quote. *Reference price.</p>
      <p className={styles.collectionStatement} data-story-reveal="soft"><em>Flowers are chosen for more than how they look.</em><br /><strong>Start with the feeling.</strong></p>
    </section>
  );
}
