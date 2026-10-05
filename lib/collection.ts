export const arrangements = {
  sunshine: { image: "a-little-sunshine", name: "A LITTLE SUNSHINE", alt: "Pink roses and cream flowers on a warm ivory background" },
  softly: { image: "softly-with-love", name: "SOFTLY, WITH LOVE", alt: "Pink roses and blue hydrangeas on a warm ivory background" },
  love: { image: "love-no-01", name: "LOVE Nº 01", alt: "Red roses and white lilies in black wrapping on a cream background", description: "Roses, lilies & seasonal flowers", price: "$450 MXN*" },
  bloom: { image: "let-love-bloom", name: "LET LOVE BLOOM", alt: "Pink and cream blossoms against a soft ivory backdrop" },
  gratitude: { image: "a-little-gratitude", name: "A LITTLE GRATITUDE", alt: "Sunflowers, pink roses and white filler flowers on a cream background" },
  warmth: { image: "all-your-warmth", name: "ALL YOUR WARMTH", alt: "Cream roses and lilies in orange wrapping on a cream background" },
  tender: { image: "a-tender-thought", name: "A TENDER THOUGHT", alt: "Pink roses in pale pink wrapping on an ivory background" },
  joy: { image: "a-day-for-joy", name: "A DAY FOR JOY", alt: "Orange gerberas and white roses on a warm cream background" },
  moment: { image: "make-it-a-moment", name: "MAKE IT A MOMENT", alt: "Pink lilies and orange roses in purple wrapping on a cream background" },
  because: { image: "just-because", name: "JUST BECAUSE", alt: "Pink, orange and white gerberas with white filler flowers on a cream background" },
} satisfies Record<string, { image: string; name: string; alt: string; description?: string; price?: string }>;

export const occasions = [
  { id: "love", label: "Love", items: ["sunshine", "softly", "love", "bloom"] },
  { id: "thank-you", label: "Thank you", items: ["gratitude", "warmth", "tender", "softly"] },
  { id: "celebrate", label: "Celebrate", items: ["joy", "moment", "because", "gratitude"] },
  { id: "for-you", label: "For you", items: ["tender", "bloom", "warmth", "sunshine"] },
] as const;
