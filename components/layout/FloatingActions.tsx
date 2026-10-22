"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpIcon, WhatsappLogoIcon } from "@/components/ui/icons";
import { contact } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n";
import styles from "@/app/page.module.css";

export default function FloatingActions({ labels }: { labels: Dictionary["actions"] }) {
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
    <nav ref={actions} className={styles.floatingActions} data-visible={visible} aria-label={labels.label} inert={!visible} aria-hidden={!visible}>
      <a className={styles.backToTop} href="#home" aria-label={labels.backToTop} title={labels.backToTop}>
        <ArrowUpIcon size={26} aria-hidden="true" />
      </a>
      <a className={styles.floatingWhatsapp} href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`${labels.whatsapp}: ${contact.phoneLabel}`} title={labels.whatsapp}>
        <WhatsappLogoIcon size={34} aria-hidden="true" />
      </a>
    </nav>
  );
}
