export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const localePaths: Record<Locale, string> = { es: "/", en: "/en/" };

const en = {
  seo: {
    title: "Poet’s Flowers | Bouquets & Floral Arrangements",
    description: "Express what you feel with bouquets and floral arrangements from Poet’s Flowers. Add a personal note and request a quote for your special moment on WhatsApp.",
    imageAlt: "Poet’s Flowers — flowers for every feeling",
    keywords: ["flower bouquets", "floral arrangements", "flowers with a personal note", "flowers for special occasions", "Poet’s Flowers"],
  },
  language: { label: "Choose your language", current: "English" },
  hero: {
    intro: ["Flowers for quiet days,", "the words that haven’t found a voice,", "and the people who stay."],
    discover: "View bouquets",
  },
  meaning: {
    marker: "The language",
    title: ["STEM", "BY STEM."],
    paragraphs: [["A bouquet is a letter, too."]],
    detail: "IN DETAIL",
    find: "Choose your bouquet",
  },
  collection: {
    marker: "The collection",
    title: ["BOUQUETS.", "IN YOUR WORDS."],
    occasionsLabel: "Flower occasions",
    occasions: { love: "Love", "thank-you": "Thank you", celebrate: "Celebrate", "for-you": "For you" },
    pricing: "Estimates in MXN. Final price by quotation.",
    estimate: "Estimated price",
    view: "View",
    request: "Request quote",
    inquiry: "Hello! I would like a quote for {name}.",
  },
  arrangements: {
    sunshine: { name: "DAWN", alt: "Pink roses and cream flowers on a warm ivory background" },
    softly: { name: "MIST", alt: "Pink roses and blue hydrangeas on a warm ivory background" },
    love: { name: "CRIMSON", alt: "Red roses and white lilies in black wrapping on a cream background" },
    bloom: { name: "PEARL", alt: "Pink and cream blossoms against a soft ivory backdrop" },
    gratitude: { name: "NOON", alt: "Sunflowers, pink roses and white filler flowers on a cream background" },
    warmth: { name: "AMBER", alt: "Cream roses and lilies in orange wrapping on a cream background" },
    tender: { name: "BLUSH", alt: "Pink roses in pale pink wrapping on an ivory background" },
    joy: { name: "SOLSTICE", alt: "Orange gerberas and white roses on a warm cream background" },
    moment: { name: "JUBILEE", alt: "Pink lilies and orange roses in purple wrapping on a cream background" },
    because: { name: "CHROMA", alt: "Pink, orange and white gerberas with white filler flowers on a cream background" },
  },
  gesture: {
    marker: "Your order",
    title: ["YOUR WORDS,", "AMONG PETALS."],
    tell: "Write your note",
    steps: [
      { title: "NOTE", lines: ["Your words."] },
      { title: "FLOWERS", lines: ["Your choice."] },
      { title: "ARRIVAL", lines: ["For them."] },
    ],
  },
  quote: {
    label: "A thought about giving flowers",
    lines: ["“Give flowers while they can", "still be felt.”"],
    hint: "Hold. Crumple. Release.",
    controls: "Hold to crumple and drag. Keyboard: hold Space or Enter, arrow keys to move, Escape to reset.",
    loading: "Loading interactive paper.",
    unavailable: "Interactive paper unavailable. Showing the original image.",
  },
  contact: { title: ["WHO’S", "IT FOR?"], channels: "Contact channels" },
  footer: { navigation: "Footer navigation", home: "HOME", flowers: "FLOWERS", contact: "CONTACT", developmentCredit: "Developed by Buxdev" },
  actions: { label: "Quick actions", backToTop: "Back to top", whatsapp: "Talk to us on WhatsApp" },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  seo: {
    title: "Poet’s Flowers | Ramos y arreglos florales",
    description: "Expresa lo que sientes con ramos y arreglos florales de Poet’s Flowers. Añade una nota personal y cotiza por WhatsApp las flores para tu momento especial.",
    imageAlt: "Poet’s Flowers — flores para cada sentimiento",
    keywords: ["ramos de flores", "arreglos florales", "flores con mensaje personal", "flores para ocasiones especiales", "Poet’s Flowers"],
  },
  language: { label: "Elige tu idioma", current: "Español" },
  hero: {
    intro: ["Flores para los días en calma,", "las palabras que no encuentran voz", "y las personas que se quedan."],
    discover: "Ver ramos",
  },
  meaning: {
    marker: "El lenguaje",
    title: ["TALLO", "A TALLO."],
    paragraphs: [["Un ramo también se escribe."]],
    detail: "EN DETALLE",
    find: "Elige tu ramo",
  },
  collection: {
    marker: "La colección",
    title: ["RAMOS", "CON VOZ PROPIA."],
    occasionsLabel: "Ocasiones para regalar flores",
    occasions: { love: "Amor", "thank-you": "Gracias", celebrate: "Celebra", "for-you": "Para ti" },
    pricing: "Estimados en MXN. Precio final según cotización.",
    estimate: "Precio estimado",
    view: "Ver",
    request: "Solicitar cotización",
    inquiry: "¡Hola! Me gustaría cotizar el arreglo {name}.",
  },
  arrangements: {
    sunshine: { name: "ALBA", alt: "Rosas rosas y flores color crema sobre un fondo marfil cálido" },
    softly: { name: "BRUMA", alt: "Rosas rosas y hortensias azules sobre un fondo marfil cálido" },
    love: { name: "CARMÍN", alt: "Rosas rojas y lirios blancos con envoltura negra sobre un fondo crema" },
    bloom: { name: "NÁCAR", alt: "Flores rosas y color crema sobre un suave fondo marfil" },
    gratitude: { name: "MEDIODÍA", alt: "Girasoles, rosas rosas y pequeñas flores blancas sobre un fondo crema" },
    warmth: { name: "ÁMBAR", alt: "Rosas color crema y lirios con envoltura naranja sobre un fondo crema" },
    tender: { name: "RUBOR", alt: "Rosas rosas con envoltura rosa pálido sobre un fondo marfil" },
    joy: { name: "SOLSTICIO", alt: "Gerberas naranjas y rosas blancas sobre un fondo crema cálido" },
    moment: { name: "FIESTA", alt: "Lirios rosas y rosas naranjas con envoltura morada sobre un fondo crema" },
    because: { name: "CROMA", alt: "Gerberas rosas, naranjas y blancas con pequeñas flores blancas sobre un fondo crema" },
  },
  gesture: {
    marker: "Tu encargo",
    title: ["TU MENSAJE,", "ENTRE PÉTALOS."],
    tell: "Escribe tu nota",
    steps: [
      { title: "NOTA", lines: ["Tus palabras."] },
      { title: "RAMO", lines: ["Elige las flores."] },
      { title: "ENTREGA", lines: ["Para esa persona."] },
    ],
  },
  quote: {
    label: "Una reflexión sobre regalar flores",
    lines: ["“Regala flores mientras aún", "puedan sentirse.”"],
    hint: "Presiona. Arruga. Suelta.",
    controls: "Mantén presionado para arrugar y arrastrar. Teclado: mantén Espacio o Intro, usa las flechas para mover y Escape para restablecer.",
    loading: "Cargando el papel interactivo.",
    unavailable: "El papel interactivo no está disponible. Se muestra la imagen original.",
  },
  contact: { title: ["¿PARA", "QUIÉN?"], channels: "Medios de contacto" },
  footer: { navigation: "Navegación del pie de página", home: "INICIO", flowers: "FLORES", contact: "CONTACTO", developmentCredit: "Desarrollado por Buxdev" },
  actions: { label: "Acciones rápidas", backToTop: "Volver al inicio", whatsapp: "Escríbenos por WhatsApp" },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
