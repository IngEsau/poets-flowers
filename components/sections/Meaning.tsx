import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import SectionMarker from "./SectionMarker";
import LineHeading from "@/components/motion/LineHeading";
import { arrangements } from "@/lib/collection";
import { getDictionary, type Locale } from "@/lib/i18n";
import TextLines from "@/components/ui/TextLines";
import styles from "@/app/page.module.css";

export default function Meaning({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className={styles.meaning} id="meaning" aria-labelledby="meaning-title">
      <Image src="/assets/watercolor-branch.png" alt="" width={1122} height={1402} className={styles.meaningFlowerTop} data-story-parallax />
      <Image src="/assets/watercolor-large.png" alt="" width={1254} height={1254} className={styles.meaningFlowerLeft} data-story-parallax />
      <SectionMarker number="02" name={t.meaning.marker} />
      <LineHeading id="meaning-title" className={styles.meaningTitle} pace="slow" lines={t.meaning.title} />
      <p className={styles.meaningAccent} data-story-reveal="soft" data-story-distance="14" data-story-delay="0.2">{t.meaning.accent}</p>
      <div className={styles.meaningCopy} data-story-group data-story-body>
        {t.meaning.paragraphs.map((lines, index) => <p key={index} data-story-reveal="soft" data-story-distance="20" data-story-delay={index * 0.1}><TextLines lines={lines} breakClassName={styles.desktopBreak} /></p>)}
      </div>
      <div className={styles.meaningCollage} aria-label={t.meaning.collageLabel}>
        <div className={styles.meaningPhotoTop} data-story-reveal="image" data-story-photo data-story-trigger="body" data-story-delay="0.28"><Image src={`/assets/collection/${arrangements.bloom.image}.webp`} alt={t.arrangements.bloom.alt} fill sizes="(max-width: 767px) 72vw, 35vw" /></div>
        <div className={styles.meaningPhotoBottom} data-story-reveal="image" data-story-photo data-story-trigger="body" data-story-direction="horizontal" data-story-delay="0.42"><Image src={`/assets/collection/${arrangements.tender.image}.webp`} alt={t.arrangements.tender.alt} fill sizes="(max-width: 767px) 58vw, 25vw" /></div>
      </div>
      <a className={styles.meaningLink} href="#flowers" data-story-reveal="soft" data-story-delay="0.15">{t.meaning.find} <span aria-hidden="true"><ArrowRightIcon size="1em" /></span></a>
      <p className={styles.meaningAside} data-story-reveal="soft"><em><TextLines lines={t.meaning.aside} /></em><br /><strong>{t.meaning.intention}</strong></p>
    </section>
  );
}
