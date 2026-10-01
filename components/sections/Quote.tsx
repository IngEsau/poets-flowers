import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Quote() {
  return (
    <section className={styles.quote} aria-label="A thought about giving flowers">
      <div className={styles.quotePanel}>
        <div className={styles.quoteGrid} aria-hidden="true">
          <Image src="/assets/quote-grid-vertical-1.svg" alt="" width={368} height={1291} />
          <Image src="/assets/quote-grid-vertical-2.svg" alt="" width={368} height={1291} />
          <Image src="/assets/quote-grid-vertical-3.svg" alt="" width={368} height={1291} />
          <Image src="/assets/quote-grid-vertical-4.svg" alt="" width={368} height={1291} />
          <Image src="/assets/quote-grid-horizontal-1.svg" alt="" width={248} height={1920} />
          <Image src="/assets/quote-grid-horizontal-2.svg" alt="" width={248} height={1920} />
          <Image src="/assets/quote-grid-horizontal-1.svg" alt="" width={248} height={1920} />
          <Image src="/assets/quote-grid-horizontal-3.svg" alt="" width={248} height={1920} />
        </div>
        <Image src="/assets/watercolor-quote.png" alt="" width={1122} height={1402} className={styles.quoteFlower} />
        <blockquote>
          <p>“Give flowers while they can<br className={styles.desktopBreak} /> still be felt.”</p>
          <footer>— J. Aguilar</footer>
        </blockquote>
      </div>
    </section>
  );
}
