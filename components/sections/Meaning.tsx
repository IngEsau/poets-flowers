import Image from "next/image";
import SectionMarker from "./SectionMarker";
import LineHeading from "@/components/motion/LineHeading";
import styles from "@/app/page.module.css";

export default function Meaning() {
  return (
    <section className={styles.meaning} id="meaning" aria-labelledby="meaning-title">
      <Image src="/assets/watercolor-branch.png" alt="" width={1122} height={1402} className={styles.meaningFlowerTop} data-story-parallax />
      <Image src="/assets/watercolor-large.png" alt="" width={1254} height={1254} className={styles.meaningFlowerLeft} data-story-parallax />
      <SectionMarker number="02" name="The Meaning" />
      <LineHeading id="meaning-title" className={styles.meaningTitle} pace="slow" lines={["SOME THINGS", "ARE BETTER SAID"]} />
      <p className={styles.meaningAccent} data-story-reveal="soft" data-story-distance="14" data-story-delay="0.2">WITH FLOWERS.</p>
      <div className={styles.meaningCopy} data-story-group data-story-body>
        <p data-story-reveal="soft" data-story-distance="20">There are moments when words<br className={styles.desktopBreak} /> arrive late, fall short, or simply<br className={styles.desktopBreak} /> aren&apos;t enough.</p>
        <p data-story-reveal="soft" data-story-distance="20" data-story-delay="0.1">A flower can say I thought of you.<br className={styles.desktopBreak} /> A bouquet can say I&apos;m here.</p>
      </div>
      <div className={styles.meaningCollage} aria-label="Flower arrangements">
        <div className={styles.meaningPhotoTop} data-story-reveal="image" data-story-photo data-story-trigger="body" data-story-delay="0.28"><Image src="/assets/meaning-lily.jpeg" alt="Pink lilies in bloom" fill sizes="(max-width: 767px) 72vw, 35vw" /></div>
        <div className={styles.meaningPhotoBottom} data-story-reveal="image" data-story-photo data-story-trigger="body" data-story-direction="horizontal" data-story-delay="0.42"><Image src="/assets/meaning-roses.jpeg" alt="Pink rose bouquet" fill sizes="(max-width: 767px) 58vw, 25vw" /></div>
      </div>
      <a className={styles.meaningLink} href="#flowers" data-story-reveal="soft" data-story-delay="0.15">Find flowers for the moment <span aria-hidden="true">→</span></a>
      <p className={styles.meaningAside} data-story-reveal="soft"><em>At Poet&apos;s Flowers,<br />every arrangement begins with an</em><br /><strong>intention</strong></p>
    </section>
  );
}
