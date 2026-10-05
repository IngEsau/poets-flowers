"use client";

import { useRef, useState, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";
import styles from "@/app/page.module.css";

type Panel = { id: string; label: string; content: ReactNode };
const subscribe = () => () => {};

export default function CollectionTabs({ panels }: { panels: Panel[] }) {
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const [active, setActive] = useState(0);
  const links = useRef<Array<HTMLAnchorElement | null>>([]);

  const select = (index: number) => {
    setActive(index);
    links.current[index]?.focus({ preventScroll: true });
  };
  const onKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % panels.length;
    else if (event.key === "ArrowLeft") next = (index + panels.length - 1) % panels.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = panels.length - 1;
    else if (event.key === " ") next = index;
    else return;
    event.preventDefault();
    select(next);
  };

  return (
    <div className={styles.collectionBrowser} data-tabs-ready={ready ? "" : undefined}>
      <div className={styles.collectionCategories} role={ready ? "tablist" : "navigation"} aria-label="Flower occasions">
        {panels.map((panel, index) => (
          <a key={panel.id} id={`${panel.id}-tab`} href={`#${panel.id}`} ref={(element) => { links.current[index] = element; }}
            role={ready ? "tab" : undefined} aria-controls={ready ? panel.id : undefined} aria-selected={ready ? index === active : undefined}
            tabIndex={ready && index !== active ? -1 : 0} data-category={index}
            onClick={(event) => { if (ready) { event.preventDefault(); select(index); } }}
            onKeyDown={(event) => onKeyDown(event, index)}>
            {panel.label}
          </a>
        ))}
      </div>
      {panels.map((panel, index) => (
        <div key={panel.id} id={panel.id} className={styles.collectionPanel} role={ready ? "tabpanel" : "region"}
          aria-labelledby={`${panel.id}-tab`} hidden={ready ? index !== active : undefined} tabIndex={ready ? 0 : undefined}>
          {panel.content}
        </div>
      ))}
    </div>
  );
}
