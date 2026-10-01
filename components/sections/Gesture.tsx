import Image from "next/image";
import SectionMarker from "./SectionMarker";
import styles from "@/app/page.module.css";

export default function Gesture() {
  return (
    <section className={styles.gesture} id="gesture" aria-labelledby="gesture-title">
      <SectionMarker number="04" name="The Gesture" />
      <h2 id="gesture-title" className={styles.gestureTitle}>A GESTURE,<br />WRITTEN IN FLOWERS.</h2>
      <div className={styles.gestureCopy}>
        <p>Some feelings deserve more than a simple bouquet.</p>
        <p>Add a personal note, choose the flowers, and let the gesture arrive with intention</p>
      </div>
      <a className={styles.gestureLink} href="mailto:info@poetsflowers.buxdev.com?subject=Tell%20us%20the%20moment">TELL US THE MOMENT <span aria-hidden="true">→</span></a>
      <p className={styles.gestureNote}>We’ll help you choose the right flowers.</p>
      <div className={styles.gesturePhoto}><Image src="/assets/collection-two.jpeg" alt="Pink flower bouquet ready to give" fill sizes="(max-width: 767px) 100vw, 55vw" /></div>
      <ol className={styles.gestureSteps}>
        <li><span>01</span><h3>THE NOTE</h3><p>A personal message,<br />written for them</p></li>
        <li><span>02</span><h3>THE FLOWERS</h3><p>Carefully chosen<br />for the moment.</p></li>
        <li><span>03</span><h3>THE ARRIVAL</h3><p>Delivered with care<br />and intention</p></li>
      </ol>
    </section>
  );
}
