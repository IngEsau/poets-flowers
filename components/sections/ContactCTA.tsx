import Image from "next/image";
import styles from "@/app/page.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title" data-story-reveal="mask" data-story-contact data-story-group>
      <div className={styles.contactPhoto}><Image src="/assets/collection-feature.jpeg" alt="Red rose bouquet" fill sizes="(max-width: 767px) 100vw, 28vw" /></div>
      <div className={styles.contactCopy}>
        <h2 id="contact-title" data-story-reveal="soft" data-story-delay="0.3">HAVE A MOMENT<br />IN MIND?</h2>
        <p data-story-reveal="fade" data-story-delay="0.42"><a href="mailto:info@poetsflowers.buxdev.com">¿Tell us what you want to say?</a></p>
        <div className={styles.contactChannels} aria-label="Contact channels shown in the design">
          <span className={styles.whatsapp} data-story-reveal="soft" data-story-delay="0.5" data-story-distance="10" data-story-channel><span>WhatsApp <span data-story-arrow>→</span></span></span>
          <span data-story-reveal="soft" data-story-delay="0.57" data-story-distance="10" data-story-channel>Instagram <span data-story-arrow>→</span></span>
        </div>
      </div>
    </section>
  );
}
