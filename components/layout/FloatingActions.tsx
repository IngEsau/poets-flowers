"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpIcon, WhatsappLogoIcon } from "@/components/ui/icons";
import { contact } from "@/lib/contact";
import styles from "@/app/page.module.css";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const actions = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-story-hero]");
    if (!hero) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const pastHero = hero.getBoundingClientRect().bottom <= 1;
      if (!pastHero && actions.current?.contains(document.activeElement)) {
        hero.querySelector<HTMLAnchorElement>('a[href="#flowers"]')?.focus({ preventScroll: true });
      }
      setVisible(pastHero);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <nav ref={actions} className={styles.floatingActions} data-visible={visible} aria-label="Quick actions" inert={!visible} aria-hidden={!visible}>
      <a className={styles.backToTop} href="#home" aria-label="Back to top" title="Back to top">
        <ArrowUpIcon size={26} aria-hidden="true" />
      </a>
      <a className={styles.floatingWhatsapp} href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp: ${contact.phoneLabel}`} title="Talk to us on WhatsApp">
        <WhatsappLogoIcon size={34} aria-hidden="true" />
      </a>
    </nav>
  );
}
