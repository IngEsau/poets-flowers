export const storyMotion = {
  duration: { fast: 0.35, normal: 0.55, slow: 0.8 },
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  distance: { reveal: 28, mobile: 12, parallax: 12 },
  imageScale: 1.04,
  stagger: 0.09,
} as const;
