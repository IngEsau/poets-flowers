"use client";

import { useEffect } from "react";
import { animate, inView, scroll, type AnimationSequence, type DOMKeyframesDefinition } from "motion/react";
import { storyMotion as tokens } from "./tokens";

type RevealOptions = {
  kind?: "fade" | "soft" | "line" | "image" | "collage" | "mask";
  delay?: number;
  duration?: number;
  distance?: number;
  trigger?: HTMLElement;
  immediate?: boolean;
};

function mountStory(root: HTMLElement, mobile: boolean, played: WeakSet<HTMLElement>) {
  const cleanups: Array<() => void> = [];
  const originals = new Map<HTMLElement, string>();
  const finishers = new Map<HTMLElement, () => void>();
  const query = (selector: string) => Array.from(root.querySelectorAll<HTMLElement>(selector));
  const remember = (element: HTMLElement) => {
    if (!originals.has(element)) originals.set(element, element.style.cssText);
  };
  const teardown = () => {
    cleanups.reverse().forEach((cleanup) => cleanup());
    originals.forEach((style, element) => { element.style.cssText = style; });
    delete root.dataset.storyActive;
  };

  // All initial styles are applied after hydration. The server-rendered page is visible.
  const reveal = (element: HTMLElement, options: RevealOptions = {}) => {
    if (played.has(element) || element.getBoundingClientRect().bottom < 0) return;
    const { kind = "soft", delay = 0, duration = tokens.duration.normal } = options;
    const distance = mobile
      ? Math.min(options.distance ?? tokens.distance.mobile, 18)
      : options.distance ?? tokens.distance.reveal;
    const initial: Record<string, string> = { opacity: "0" };
    const keyframes: DOMKeyframesDefinition = { opacity: [0, 1] };
    if (kind !== "fade" && kind !== "mask" && kind !== "image") {
      initial.transform = `translateY(${distance}px)`;
      keyframes.transform = [initial.transform, "translateY(0px)"];
    }
    if (kind === "line" || kind === "image" || kind === "mask") {
      const sideways = kind === "mask" || element.dataset.storyDirection === "horizontal";
      initial.clipPath = sideways ? "inset(0 100% 0 0)" : "inset(0 0 100% 0)";
      keyframes.clipPath = [initial.clipPath, "inset(0 0 0 0)"];
    }
    const image = kind === "image" || kind === "collage"
      ? element.querySelector<HTMLElement>("img:not([data-story-gradient])") : null;
    remember(element);
    Object.assign(element.style, initial);
    if (image && !mobile) { remember(image); image.style.transform = `scale(${tokens.imageScale})`; }

    let animation: ReturnType<typeof animate> | undefined;
    let imageAnimation: ReturnType<typeof animate> | undefined;
    let started = false;
    const finish = () => {
      animation?.cancel();
      imageAnimation?.cancel();
      element.style.opacity = "1";
      if (keyframes.transform) element.style.transform = "none";
      if (keyframes.clipPath) element.style.clipPath = "none";
      element.style.willChange = "";
      if (image && !mobile) image.style.transform = "none";
      played.add(element);
    };
    finishers.set(element, finish);
    const start = () => {
      if (started || played.has(element)) return;
      started = true;
      element.style.willChange = "opacity, transform";
      animation = animate(element, keyframes, {
        duration, delay, ease: tokens.ease,
        onComplete: () => { played.add(element); element.style.willChange = ""; },
      });
      cleanups.push(() => animation?.cancel());
      if (image && !mobile) {
        imageAnimation = animate(image, { transform: [`scale(${tokens.imageScale})`, "scale(1)"] }, { duration, delay, ease: tokens.ease });
        cleanups.push(() => imageAnimation?.cancel());
      }
    };
    if (options.immediate) start();
    else cleanups.push(inView(options.trigger ?? element, start, { margin: "0px 0px -8% 0px", amount: "some" }));
  };

  const linked = (element: HTMLElement, keyframes: DOMKeyframesDefinition, target: HTMLElement, offset: Parameters<typeof scroll>[1], times?: number[]) => {
    remember(element);
    const animation = animate(element, keyframes, { duration: 1, ease: "linear", times });
    cleanups.push(() => animation.cancel());
    cleanups.push(scroll(animation, { target, ...offset }));
  };

  try {
    root.dataset.storyActive = "";
    query("[data-story-hero-word]").forEach((word, index) => reveal(word, {
      immediate: true, duration: mobile ? 0.65 : tokens.duration.slow,
      distance: mobile ? 14 + index * 4 : 36 + index * 12, delay: 0.08 + index * 0.16,
    }));
    query("[data-story-hero-intro]").forEach((element) => reveal(element, { immediate: true, distance: mobile ? 10 : 18, delay: 0.4 }));
    query("[data-story-hero-cta]").forEach((element) => reveal(element, { immediate: true, distance: 10, delay: 0.58 }));

    query("[data-story-heading]").forEach((heading) => {
      Array.from(heading.querySelectorAll<HTMLElement>("[data-story-line]")).forEach((line, index) => reveal(line, {
        kind: "line", trigger: heading, delay: 0.12 + index * tokens.stagger,
        duration: heading.dataset.storyHeading === "slow" ? tokens.duration.slow : 0.65,
        distance: mobile ? 16 : 44,
      }));
    });

    query("[data-story-reveal]").forEach((element) => {
      if (!mobile && element.hasAttribute("data-story-gesture-cta")) return;
      const kind = element.dataset.storyReveal as RevealOptions["kind"];
      let trigger = element.closest<HTMLElement>("[data-story-group]") ?? element;
      if (!mobile && element.dataset.storyTrigger === "body") {
        trigger = element.closest("section")?.querySelector<HTMLElement>("[data-story-body]") ?? element;
      }
      // Touch layouts reveal photos when the photo itself enters, rather than off-screen.
      if (mobile && element.hasAttribute("data-story-photo")) trigger = element;
      reveal(element, {
        kind, trigger,
        delay: Number(element.dataset.storyDelay ?? 0),
        duration: kind === "image" || kind === "mask" ? tokens.duration.slow : tokens.duration.normal,
        distance: element.dataset.storyDistance ? Number(element.dataset.storyDistance) : undefined,
      });
    });

    const hero = root.querySelector<HTMLElement>("[data-story-hero]");
    if (hero) {
      const chapter = hero.querySelector<HTMLElement>("[data-story-hero-number]");
      if (chapter) linked(chapter, { opacity: [0.72, 1, 1] }, hero, { offset: ["start start", "end start"] }, [0, 0.16, 1]);
    }
    if (hero && !mobile) {
      const offsets = { offset: ["start start", "end start"] } satisfies NonNullable<Parameters<typeof scroll>[1]>;
      const image = hero.querySelector<HTMLElement>("[data-story-hero-image]");
      if (image) linked(image, { scale: [1, 1.035, 1] }, hero, offsets, [0, 0.85, 1]);
      hero.querySelectorAll<HTMLElement>("[data-story-hero-word]").forEach((word, index) => {
        linked(word, { translate: ["0px 0px", `0px ${index === 0 ? -24 : 24}px`, "0px 0px"] }, hero, offsets, [0, 0.85, 1]);
      });
      // Individual CSS translate composes with the entry transform, including on reverse scroll.
      // Start the scroll fade after the entrance so both animations never write opacity together.
      const fadeTimer = window.setTimeout(() => {
        hero.querySelectorAll<HTMLElement>("[data-story-hero-intro], [data-story-hero-cta]").forEach((element) => {
          linked(element, { opacity: [1, 0.75, 1] }, hero, offsets, [0, 0.85, 1]);
        });
      }, 1200);
      cleanups.push(() => window.clearTimeout(fadeTimer));
    }

    if (!mobile) {
      query("[data-story-parallax]").forEach((element, index) => {
        const section = element.closest<HTMLElement>("section");
        if (section) linked(element, { translate: ["0px 0px", `0px ${tokens.distance.parallax * (index % 2 ? -1 : 1)}px`, "0px 0px"] }, section, { offset: ["start end", "end start"] }, [0, 0.5, 1]);
      });
    }

    const steps = root.querySelector<HTMLElement>("[data-story-steps]");
    if (steps) {
      steps.querySelectorAll<HTMLElement>("[data-story-step]").forEach((step, index) => {
        if (mobile) reveal(step, { distance: 12, delay: index * tokens.stagger });
        else {
          const times = index === 0 ? [0, 0.13, 0.38, 0.82, 1] : index === 1 ? [0, 0.25, 0.48, 0.82, 1] : [0, 0.57, 0.82, 1];
          const opacity = index === 2 ? [0.3, 0.3, 1, 1] : [0.3, index === 0 ? 1 : 0.3, index === 0 ? 0.6 : 1, 0.6, 1];
          linked(step, { opacity }, steps, { offset: ["start 85%", "end 35%"] }, times);
        }
      });
      // The CTA stays readable in its existing position, gaining full presence after the three steps.
      if (!mobile) {
        const cta = root.querySelector<HTMLElement>("[data-story-gesture-cta]");
        if (cta) linked(cta, { opacity: [0.72, 0.72, 1] }, steps, { offset: ["start 85%", "end 35%"] }, [0, 0.82, 1]);
      }
    }

    const quote = root.querySelector<HTMLElement>("[data-story-quote]");
    if (quote) {
      const words = Array.from(quote.querySelectorAll<HTMLElement>("[data-story-word]"));
      const author = quote.querySelector<HTMLElement>("[data-story-author]");
      const wordStagger = 0.085;
      const wordDuration = 0.15;
      const sequence: AnimationSequence = words.map((word, index) => {
        remember(word);
        return [word, { opacity: [0.2, 1] }, { at: index * wordStagger, duration: wordDuration, ease: "linear" }];
      });
      if (author) {
        remember(author);
        const phraseDuration = Math.max(0, words.length - 1) * wordStagger + wordDuration;
        sequence.push([author, { opacity: [0.2, 1] }, { at: 0, duration: phraseDuration, ease: "linear" }]);
      }
      const animation = animate(sequence, { duration: 1 });
      cleanups.push(() => animation.cancel());
      cleanups.push(scroll(animation, { target: quote, offset: ["start 80%", "end 40%"] }));
    }

    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      for (const [element, finish] of finishers) {
        if (element === event.target || element.contains(event.target)) finish();
      }
    };
    root.addEventListener("focusin", onFocus);
    cleanups.push(() => root.removeEventListener("focusin", onFocus));
    return teardown;
  } catch (error) {
    teardown();
    throw error;
  }
}

export default function StoryMotion() {
  useEffect(() => {
    const root = document.getElementById("home");
    if (!root) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 768px)");
    const played = new WeakSet<HTMLElement>();
    let teardown = () => {};
    const sync = () => {
      teardown();
      teardown = () => {};
      if (reducedMotion.matches) return;
      try { teardown = mountStory(root, mobile.matches, played); }
      catch (error) { console.error("Story motion could not start; the static page remains available.", error); }
    };
    sync();
    reducedMotion.addEventListener("change", sync);
    mobile.addEventListener("change", sync);
    return () => {
      reducedMotion.removeEventListener("change", sync);
      mobile.removeEventListener("change", sync);
      teardown();
    };
  }, []);
  return null;
}
