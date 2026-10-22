import Image from "next/image";
import { Fragment } from "react";
import QuotePaper from "@/components/motion/QuotePaper";
import { getDictionary, type Locale } from "@/lib/i18n";
import styles from "@/app/page.module.css";

export default function Quote({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).quote;
  return (
    <section className={styles.quote} id="quote" aria-label={t.label}>
      <QuotePaper alt={`${t.lines.join(" ")} — J. Aguilar`} labels={t}>
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
            <p>{t.lines.map((line, lineIndex) => <Fragment key={lineIndex}>
              {lineIndex > 0 && <><br className={styles.desktopBreak} />{" "}</>}
              {line.split(" ").map((word, index) => <Fragment key={index}>{index > 0 && " "}<span data-story-word>{word}</span></Fragment>)}
            </Fragment>)}</p>
            <footer data-story-author>— J. Aguilar</footer>
          </blockquote>
          <p className={styles.quotePaperHint} aria-hidden="true">{t.hint}</p>
        </div>
      </QuotePaper>
    </section>
  );
}
