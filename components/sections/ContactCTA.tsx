import Image from "next/image";
import { ArrowRightIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@/components/ui/icons";
import { contact } from "@/lib/contact";
import { arrangements } from "@/lib/collection";
import { getDictionary, type Locale } from "@/lib/i18n";
import TextLines from "@/components/ui/TextLines";
import styles from "@/app/page.module.css";

export default function ContactCTA({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title" data-story-contact data-story-group>
      <div className={styles.contactPhoto} aria-hidden="true" data-story-contact-photo><Image src={`/assets/collection/${arrangements.love.image}.webp`} alt="" fill sizes="100vw" /></div>
      <div className={styles.contactCopy}>
        <h2 id="contact-title" data-story-reveal="soft" data-story-delay="0.3"><TextLines lines={t.contact.title} breakClassName={styles.contactTitleBreak} /></h2>
        <div className={styles.contactDetails}>
          <p className={styles.contactNote} data-story-reveal="soft" data-story-delay="0.4">{t.contact.note}</p>
          <div className={styles.contactChannels} aria-label={t.contact.channels}>
            <a className={styles.whatsapp} href={contact.whatsapp} target="_blank" rel="noopener noreferrer" data-story-reveal="soft" data-story-delay="0.5" data-story-distance="10" data-story-channel><WhatsappLogoIcon size="1.15em" aria-hidden="true" />WhatsApp <ArrowRightIcon size="1em" aria-hidden="true" data-story-arrow /></a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" data-story-reveal="soft" data-story-delay="0.57" data-story-distance="10" data-story-channel><InstagramLogoIcon size="1.15em" aria-hidden="true" />Instagram <ArrowRightIcon size="1em" aria-hidden="true" data-story-arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
