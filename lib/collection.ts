export const arrangements = {
  sunshine: { image: "a-little-sunshine" },
  softly: { image: "softly-with-love" },
  love: { image: "love-no-01", price: "$450 MXN*" },
  bloom: { image: "let-love-bloom" },
  gratitude: { image: "a-little-gratitude" },
  warmth: { image: "all-your-warmth" },
  tender: { image: "a-tender-thought" },
  joy: { image: "a-day-for-joy" },
  moment: { image: "make-it-a-moment" },
  because: { image: "just-because" },
} satisfies Record<string, { image: string; price?: string }>;

export const occasions = [
  { id: "love", items: ["sunshine", "softly", "love", "bloom"] },
  { id: "thank-you", items: ["gratitude", "warmth", "tender", "softly"] },
  { id: "celebrate", items: ["joy", "moment", "because", "gratitude"] },
  { id: "for-you", items: ["tender", "bloom", "warmth", "sunshine"] },
] as const;
