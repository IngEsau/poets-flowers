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
      <SectionMarker number="02" name={t.meaning.marker} />
      <div className={styles.meaningLayout}>
        <LineHeading id="meaning-title" className={styles.meaningTitle} pace="slow" lines={t.meaning.title} />
        <figure className={styles.meaningFigure} data-story-reveal="image" data-story-photo data-story-direction="horizontal">
          <div className={styles.meaningPhoto}>
            <Image src={`/assets/collection/${arrangements.bloom.image}.webp`} alt={t.arrangements.bloom.alt} fill sizes="(max-width: 767px) 88vw, (max-width: 900px) 72vw, 42vw" />
          </div>
          <figcaption className={styles.meaningCaption}>
            <span>{t.arrangements.bloom.name}</span>
            <span>{t.meaning.detail}</span>
          </figcaption>
        </figure>
        <div className={styles.meaningEditorial}>
          <div className={styles.meaningCopy} data-story-group data-story-body>
            {t.meaning.paragraphs.map((lines, index) => <p key={index} data-story-reveal="soft" data-story-distance="20" data-story-delay={index * 0.1}><TextLines lines={lines} breakClassName={styles.desktopBreak} /></p>)}
          </div>
          <a className={styles.meaningLink} href="#flowers" data-story-reveal="soft" data-story-delay="0.15">{t.meaning.find} <span aria-hidden="true"><ArrowRightIcon size="1em" /></span></a>
        </div>
      </div>
    </section>
  );
}
