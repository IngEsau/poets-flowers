import Image from "next/image";
import { ArrowRightIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@/components/ui/icons";
import { contact } from "@/lib/contact";
import { arrangements } from "@/lib/collection";
import styles from "@/app/page.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title" data-story-reveal="mask" data-story-contact data-story-group>
      <div className={styles.contactPhoto}><Image src={`/assets/collection/${arrangements.love.image}.webp`} alt={arrangements.love.alt} fill sizes="(max-width: 767px) 100vw, 28vw" /></div>
      <div className={styles.contactCopy}>
        <h2 id="contact-title" data-story-reveal="soft" data-story-delay="0.3">HAVE A MOMENT<br />IN MIND?</h2>
        <p data-story-reveal="fade" data-story-delay="0.42"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">¿Tell us what you want to say?</a></p>
        <div className={styles.contactChannels} aria-label="Contact channels">
          <a className={styles.whatsapp} href={contact.whatsapp} target="_blank" rel="noopener noreferrer" data-story-reveal="soft" data-story-delay="0.5" data-story-distance="10" data-story-channel><WhatsappLogoIcon size="1.15em" aria-hidden="true" />WhatsApp <ArrowRightIcon size="1em" aria-hidden="true" data-story-arrow /></a>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" data-story-reveal="soft" data-story-delay="0.57" data-story-distance="10" data-story-channel><InstagramLogoIcon size="1.15em" aria-hidden="true" />Instagram <ArrowRightIcon size="1em" aria-hidden="true" data-story-arrow /></a>
        </div>
      </div>
    </section>
  );
}
