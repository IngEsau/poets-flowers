import Image from "next/image";
import styles from "@/app/page.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.contactPhoto}><Image src="/assets/collection-feature.jpeg" alt="Red rose bouquet" fill sizes="(max-width: 767px) 100vw, 28vw" /></div>
      <div className={styles.contactCopy}>
        <h2 id="contact-title">HAVE A MOMENT<br />IN MIND?</h2>
        <p><a href="mailto:info@poetsflowers.buxdev.com">¿Tell us what you want to say?</a></p>
        <div className={styles.contactChannels} aria-label="Contact channels shown in the design">
          <span className={styles.whatsapp}>WhatsApp →</span>
          <span>Instagram →</span>
        </div>
      </div>
    </section>
  );
}
