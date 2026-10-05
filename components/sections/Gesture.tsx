import Image from "next/image";
import SectionMarker from "./SectionMarker";
import LineHeading from "@/components/motion/LineHeading";
import styles from "@/app/page.module.css";

export default function Gesture() {
  return (
    <section className={styles.gesture} id="gesture" aria-labelledby="gesture-title">
      <SectionMarker number="04" name="The Gesture" />
      <LineHeading id="gesture-title" className={styles.gestureTitle} lines={["A GESTURE,", "WRITTEN IN FLOWERS."]} />
      <div className={styles.gestureCopy} data-story-group data-story-body>
        <p data-story-reveal="soft">Some feelings deserve more than a simple bouquet.</p>
        <p data-story-reveal="soft" data-story-delay="0.1">Add a personal note, choose the flowers, and let the gesture arrive with intention</p>
      </div>
      <a className={styles.gestureLink} href="mailto:info@poetsflowers.buxdev.com?subject=Tell%20us%20the%20moment" data-story-reveal="soft" data-story-delay="0.25" data-story-gesture-cta>TELL US THE MOMENT <span aria-hidden="true">→</span></a>
      <p className={styles.gestureNote} data-story-reveal="fade" data-story-delay="0.3">We’ll help you choose the right flowers.</p>
      <div className={styles.gesturePhoto} data-story-reveal="image" data-story-photo data-story-trigger="body" data-story-delay="0.22"><Image src="/assets/collection-two.jpeg" alt="Pink flower bouquet ready to give" fill sizes="(max-width: 767px) 100vw, 55vw" /></div>
      <ol className={styles.gestureSteps} data-story-steps>
        <li data-story-step><span>01</span><h3>THE NOTE</h3><p>A personal message,<br />written for them</p></li>
        <li data-story-step><span>02</span><h3>THE FLOWERS</h3><p>Carefully chosen<br />for the moment.</p></li>
        <li data-story-step><span>03</span><h3>THE ARRIVAL</h3><p>Delivered with care<br />and intention</p></li>
      </ol>
    </section>
  );
}
