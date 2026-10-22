import { EnvelopeSimpleIcon } from "@/components/ui/icons";
import { contact } from "@/lib/contact";
import { getDictionary, type Locale } from "@/lib/i18n";
import LanguageSwitch from "./LanguageSwitch";
import styles from "@/app/page.module.css";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContent} data-story-reveal="soft" data-story-distance="14">
        <p className={styles.footerBrand}>POET’S <span>FLOWERS</span></p>
        <nav aria-label={t.footer.navigation}><a href="#home">{t.footer.home}</a><a href="#flowers">{t.footer.flowers}</a><a href="#contact">{t.footer.contact}</a></nav>
        <a className={styles.footerEmail} href={contact.email}><EnvelopeSimpleIcon size="1em" aria-hidden="true" />info@poetsflowers.buxdev.com</a>
        <small>© 2026</small>
        <LanguageSwitch locale={locale} label={t.language.label} placement="footer" />
      </div>
    </footer>
  );
}
