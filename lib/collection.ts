export const arrangements = {
  sunshine: { image: "a-little-sunshine", estimatedPrice: 280 },
  softly: { image: "softly-with-love", estimatedPrice: 600 },
  love: { image: "love-no-01", estimatedPrice: 450 },
  bloom: { image: "let-love-bloom", estimatedPrice: 150 },
  gratitude: { image: "a-little-gratitude", estimatedPrice: 500 },
  warmth: { image: "all-your-warmth", estimatedPrice: 350 },
  tender: { image: "a-tender-thought", estimatedPrice: 300 },
  joy: { image: "a-day-for-joy", estimatedPrice: 400 },
  moment: { image: "make-it-a-moment", estimatedPrice: 550 },
  because: { image: "just-because", estimatedPrice: 250 },
} satisfies Record<string, { image: string; estimatedPrice: number }>;

export const occasions = [
  { id: "love", items: ["sunshine", "softly", "love", "bloom"] },
  { id: "thank-you", items: ["gratitude", "warmth", "tender", "softly"] },
  { id: "celebrate", items: ["joy", "moment", "because", "gratitude"] },
  { id: "for-you", items: ["tender", "bloom", "warmth", "sunshine"] },
] as const;
