import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/assets/watercolor-branch.png" alt="" width={1122} height={1402} className={styles.footerFlower} />
      <div className={styles.footerContent} data-story-reveal="soft" data-story-distance="14">
        <p className={styles.footerBrand}>POET’S <span>FLOWERS</span></p>
        <nav aria-label="Footer navigation"><a href="#home">HOME</a><a href="#flowers">FLOWERS</a><a href="#contact">CONTACT</a></nav>
        <a className={styles.footerEmail} href="mailto:info@poetsflowers.buxdev.com">info@poetsflowers.buxdev.com</a>
        <small>© 2026</small>
      </div>
    </footer>
  );
}
