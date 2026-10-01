import Image from "next/image";
import SectionMarker from "./SectionMarker";
import styles from "@/app/page.module.css";

export default function Meaning() {
  return (
    <section className={styles.meaning} id="meaning" aria-labelledby="meaning-title">
      <Image src="/assets/watercolor-branch.png" alt="" width={1122} height={1402} className={styles.meaningFlowerTop} />
      <Image src="/assets/watercolor-large.png" alt="" width={1254} height={1254} className={styles.meaningFlowerLeft} />
      <SectionMarker number="02" name="The Meaning" />
      <h2 id="meaning-title" className={styles.meaningTitle}>SOME THINGS<br />ARE BETTER SAID</h2>
      <p className={styles.meaningAccent}>WITH FLOWERS.</p>
      <div className={styles.meaningCopy}>
        <p>There are moments when words<br className={styles.desktopBreak} /> arrive late, fall short, or simply<br className={styles.desktopBreak} /> aren&apos;t enough.</p>
        <p>A flower can say I thought of you.<br className={styles.desktopBreak} /> A bouquet can say I&apos;m here.</p>
      </div>
      <div className={styles.meaningCollage} aria-label="Flower arrangements">
        <div className={styles.meaningPhotoTop}><Image src="/assets/meaning-lily.jpeg" alt="Pink lilies in bloom" fill sizes="(max-width: 767px) 72vw, 35vw" /></div>
        <div className={styles.meaningPhotoBottom}><Image src="/assets/meaning-roses.jpeg" alt="Pink rose bouquet" fill sizes="(max-width: 767px) 58vw, 25vw" /></div>
      </div>
      <a className={styles.meaningLink} href="#flowers">Find flowers for the moment <span aria-hidden="true">→</span></a>
      <p className={styles.meaningAside}><em>At Poet&apos;s Flowers,<br />every arrangement begins with an</em><br /><strong>intention</strong></p>
    </section>
  );
}
