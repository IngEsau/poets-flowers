import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import SectionMarker from "./SectionMarker";
import LineHeading from "@/components/motion/LineHeading";
import { contact } from "@/lib/contact";
import { arrangements } from "@/lib/collection";
import { getDictionary, type Locale } from "@/lib/i18n";
import TextLines from "@/components/ui/TextLines";
import styles from "@/app/page.module.css";

export default function Gesture({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className={styles.gesture} id="gesture" aria-labelledby="gesture-title">
      <SectionMarker number="04" name={t.gesture.marker} />
      <div className={styles.gestureLayout}>
        <div className={styles.gestureEditorial} data-story-group data-story-body>
          <LineHeading id="gesture-title" className={styles.gestureTitle} lines={t.gesture.title} />
          <a className={styles.gestureLink} href={contact.whatsapp} target="_blank" rel="noopener noreferrer" data-story-reveal="soft" data-story-delay="0.25" data-story-gesture-cta>{t.gesture.tell} <span aria-hidden="true"><ArrowRightIcon size="1em" /></span></a>
        </div>
        <div className={styles.gesturePhoto} data-story-reveal="image" data-story-photo data-story-trigger="body" data-story-delay="0.22"><Image src={`/assets/collection/${arrangements.softly.image}.webp`} alt={t.arrangements.softly.alt} fill sizes="(max-width: 767px) 100vw, 55vw" /></div>
      </div>
      <ol className={styles.gestureSteps} data-story-steps>
        {t.gesture.steps.map((step, index) => <li key={index} data-story-step><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p><TextLines lines={step.lines} /></p></li>)}
      </ol>
    </section>
  );
}
