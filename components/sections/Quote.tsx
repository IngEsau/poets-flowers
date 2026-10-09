import Image from "next/image";
import QuotePaper from "@/components/motion/QuotePaper";
import styles from "@/app/page.module.css";

export default function Quote() {
  return (
    <section className={styles.quote} aria-label="A thought about giving flowers">
      <QuotePaper>
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
          <blockquote data-story-quote>
            <p><span data-story-word>“Give</span>{" "}<span data-story-word>flowers</span>{" "}<span data-story-word>while</span>{" "}<span data-story-word>they</span>{" "}<span data-story-word>can</span><br className={styles.desktopBreak} />{" "}<span data-story-word>still</span>{" "}<span data-story-word>be</span>{" "}<span data-story-word>felt.”</span></p>
            <footer data-story-author>— J. Aguilar</footer>
          </blockquote>
          <p className={styles.quotePaperHint} aria-hidden="true">Hold to crumple · release to unfold</p>
        </div>
      </QuotePaper>
    </section>
  );
}
