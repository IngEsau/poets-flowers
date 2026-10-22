"use client";

import type { MouseEvent } from "react";
import { localePaths, locales, type Locale } from "@/lib/i18n";
import styles from "@/app/page.module.css";

export default function LanguageSwitch({ locale, label, placement = "hero" }: {
  locale: Locale;
  label: string;
  placement?: "hero" | "footer";
}) {
  const follow = (event: MouseEvent<HTMLAnchorElement>, target: Locale) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    // Keep the reader in the same chapter, even when scrolling has not changed the URL.
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[id], main > footer[id]"));
    const chapter = sections.find(section => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= window.innerHeight / 2 && bounds.bottom > window.innerHeight / 2;
    });
    const hash = chapter ? `#${chapter.id}` : window.scrollY > 0 ? window.location.hash : "";
    event.currentTarget.href = `${localePaths[target]}${hash}`;
  };

  return (
    <nav className={styles.languageSwitch} data-placement={placement} aria-label={label}>
      {locales.map(target => (
        <a key={target} href={localePaths[target]} hrefLang={target} lang={target}
          aria-label={target === "es" ? "Español" : "English"}
          aria-current={target === locale ? "page" : undefined}
          onClick={event => follow(event, target)}>
          {target.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
