"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { PaperCrumpleState } from "./paper-crumple/PaperCrumple";
import styles from "@/app/page.module.css";

const PaperCrumple = dynamic(() => import("./paper-crumple/PaperCrumple"), { ssr: false });
type PaperImage = { src: string; width: number; height: number };

export default function QuotePaper({ children }: { children: ReactNode }) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const fontCSS = useRef<Promise<string> | null>(null);
  const [paper, setPaper] = useState<PaperImage | null>(null);
  const [active, setActive] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const capture = useCallback(async (): Promise<PaperImage> => {
    const panel = sheetRef.current?.firstElementChild;
    if (!(panel instanceof HTMLElement)) throw new Error("Quote paper is unavailable.");

    // Print the current DOM, including its fonts and the scroll reveal of the signature.
    // Reprinting on each hold avoids a separate image with different typography or copy.
    await document.fonts.ready;
    const images = Array.from(panel.querySelectorAll("img"))
      .filter(image => getComputedStyle(image).display !== "none");
    await Promise.all(images.map(image => {
      // Hidden desktop grid images stay lazy on mobile; only print visible artwork.
      image.loading = "eager";
      return image.decode().catch(() => {});
    }));
    const { getFontEmbedCSS, toPng } = await import("html-to-image");
    fontCSS.current ??= getFontEmbedCSS(panel, { preferredFontFormat: "woff2" });
    const { width, height } = panel.getBoundingClientRect();
    const src = await toPng(panel, {
      fontEmbedCSS: await fontCSS.current,
      pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),
      backgroundColor: getComputedStyle(panel).backgroundColor,
      style: { boxShadow: "none" },
      filter: node => !(node instanceof HTMLElement) || getComputedStyle(node).display !== "none",
    });
    return { src, width, height };
  }, []);

  const onError = useCallback((error: Error) => {
    console.error("Paper interaction could not start; the quote remains readable.", error);
    setActive(false);
    setUnavailable(true);
  }, []);

  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet || unavailable) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let nearby = false;
    let prepared = false;
    let revision = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let previousWidth = 0;
    let previousHeight = 0;

    const prepare = () => {
      if (disposed || !nearby || media.matches) return;
      const current = ++revision;
      capture().then(image => {
        if (disposed || media.matches || current !== revision) return;
        prepared = true;
        setActive(false);
        setPaper(image);
      }).catch(error => {
        if (!disposed && current === revision) onError(error);
      });
    };
    const visibility = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      if (nearby && !prepared) prepare();
    }, { rootMargin: "300px" });
    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (Math.abs(width - previousWidth) < 1 && Math.abs(height - previousHeight) < 1) return;
      previousWidth = width;
      previousHeight = height;
      clearTimeout(timer);
      // Invalidate pending snapshots before rebuilding for the new breakpoint.
      revision += 1;
      timer = setTimeout(prepare, 180);
    });
    const motionChange = () => {
      revision += 1;
      prepared = false;
      setActive(false);
      setPaper(null);
      if (!media.matches) prepare();
    };

    visibility.observe(sheet);
    resize.observe(sheet);
    media.addEventListener("change", motionChange);
    return () => {
      disposed = true;
      revision += 1;
      clearTimeout(timer);
      visibility.disconnect();
      resize.disconnect();
      media.removeEventListener("change", motionChange);
    };
  }, [capture, onError, unavailable]);

  const beforeHold = useCallback(async () => (await capture()).src, [capture]);
  const onStateChange = useCallback((state: PaperCrumpleState) => {
    if (state === "holding") setActive(true);
  }, []);
  const onRest = useCallback(() => setActive(false), []);

  return (
    <div className={styles.quoteStage} data-paper-active={active}>
      <div ref={sheetRef} className={styles.quoteSheet}>{children}</div>
      {paper && !unavailable && (
        <PaperCrumple
          {...paper}
          className={styles.quoteCrumple}
          style={{ height: "100%" }}
          stageInset={0}
          alt="Give flowers while they can still be felt. — J. Aguilar"
          releaseBehavior="restore"
          crumpleAmount={0.85}
          crumpleDuration={0.55}
          releaseDuration={0.4}
          foldCount={6}
          foldSharpness={0.6}
          wrinkleDepth={0.65}
          paperColor="#fcf2e5"
          paperTexture={0.08}
          roughness={0.92}
          lightIntensity={1.8}
          lightAngle={-35}
          shadowOpacity={0.16}
          dragRotation={10}
          dragRadius={180}
          seed={7}
          detail={64}
          beforeHold={beforeHold}
          onStateChange={onStateChange}
          onRest={onRest}
          onError={onError}
        />
      )}
    </div>
  );
}
