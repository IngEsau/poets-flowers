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
    intro: ["Flowers for quiet moments,", "the wild thoughts, and everything", "in between"],
    discover: "Discover the collection",
  },
  meaning: {
    marker: "The Meaning",
    title: ["SOME THINGS", "ARE BETTER SAID"],
    accent: "WITH FLOWERS.",
    paragraphs: [
      ["There are moments when words", "arrive late, fall short, or simply", "aren’t enough."],
      ["A flower can say I thought of you.", "A bouquet can say I’m here."],
    ],
    collageLabel: "Flower arrangements",
    find: "Find flowers for the moment",
    aside: ["At Poet’s Flowers,", "every arrangement begins with an"],
    intention: "intention",
  },
  collection: {
    marker: "The Collection",
    title: ["CHOOSE WHAT YOU WANT", "TO SAY."],
    occasionsLabel: "Flower occasions",
    occasions: { love: "Love", "thank-you": "Thank you", celebrate: "Celebrate", "for-you": "For you" },
    pricing: "Prices may vary according to your quote. *Reference price.",
    statement: "Flowers are chosen for more than how they look.",
    feeling: "Start with the feeling.",
    byQuotation: "By quotation",
    view: "View",
    request: "Request a quote",
    inquiry: "Hello! I would like a quote for {name}.",
  },
  arrangements: {
    sunshine: { name: "A LITTLE SUNSHINE", alt: "Pink roses and cream flowers on a warm ivory background" },
    softly: { name: "SOFTLY, WITH LOVE", alt: "Pink roses and blue hydrangeas on a warm ivory background" },
    love: { name: "LOVE Nº 01", alt: "Red roses and white lilies in black wrapping on a cream background", description: "Roses, lilies & seasonal flowers" },
    bloom: { name: "LET LOVE BLOOM", alt: "Pink and cream blossoms against a soft ivory backdrop" },
    gratitude: { name: "A LITTLE GRATITUDE", alt: "Sunflowers, pink roses and white filler flowers on a cream background" },
    warmth: { name: "ALL YOUR WARMTH", alt: "Cream roses and lilies in orange wrapping on a cream background" },
    tender: { name: "A TENDER THOUGHT", alt: "Pink roses in pale pink wrapping on an ivory background" },
    joy: { name: "A DAY FOR JOY", alt: "Orange gerberas and white roses on a warm cream background" },
    moment: { name: "MAKE IT A MOMENT", alt: "Pink lilies and orange roses in purple wrapping on a cream background" },
    because: { name: "JUST BECAUSE", alt: "Pink, orange and white gerberas with white filler flowers on a cream background" },
  },
  gesture: {
    marker: "The Gesture",
    title: ["A GESTURE,", "WRITTEN IN FLOWERS."],
    paragraphs: ["Some feelings deserve more than a simple bouquet.", "Add a personal note, choose the flowers, and let the gesture arrive with intention."],
    tell: "TELL US THE MOMENT",
    note: "We’ll help you choose the right flowers.",
    steps: [
      { title: "THE NOTE", lines: ["A personal message,", "written for them"] },
      { title: "THE FLOWERS", lines: ["Carefully chosen", "for the moment."] },
      { title: "THE ARRIVAL", lines: ["Delivered with care", "and intention"] },
    ],
  },
  quote: {
    label: "A thought about giving flowers",
    lines: ["“Give flowers while they can", "still be felt.”"],
    hint: "Hold to crumple · release to unfold",
    controls: "Hold to crumple and drag. Keyboard: hold Space or Enter, arrow keys to move, Escape to reset.",
    loading: "Loading interactive paper.",
    unavailable: "Interactive paper unavailable. Showing the original image.",
  },
  contact: { title: ["HAVE A MOMENT", "IN MIND?"], tell: "Tell us what you want to say.", channels: "Contact channels" },
  footer: { navigation: "Footer navigation", home: "HOME", flowers: "FLOWERS", contact: "CONTACT" },
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
    intro: ["Flores para momentos tranquilos,", "pensamientos intensos y todo", "lo que hay entre ellos"],
    discover: "Descubre la colección",
  },
  meaning: {
    marker: "El significado",
    title: ["ALGUNAS COSAS", "SE DICEN MEJOR"],
    accent: "CON FLORES.",
    paragraphs: [
      ["Hay momentos en que las", "palabras llegan tarde, se quedan", "cortas o simplemente no bastan."],
      ["Una flor puede decir: pensé en ti.", "Un ramo puede decir: aquí estoy."],
    ],
    collageLabel: "Arreglos florales",
    find: "Encuentra flores para ese momento",
    aside: ["En Poet’s Flowers,", "cada arreglo comienza con una"],
    intention: "intención",
  },
  collection: {
    marker: "La colección",
    title: ["ELIGE QUÉ QUIERES", "DECIR."],
    occasionsLabel: "Ocasiones para regalar flores",
    occasions: { love: "Amor", "thank-you": "Gracias", celebrate: "Celebra", "for-you": "Para ti" },
    pricing: "Los precios pueden variar según la cotización. *Precio de referencia.",
    statement: "Elegimos cada ramo y arreglo floral por más que su apariencia.",
    feeling: "Empieza por lo que sientes.",
    byQuotation: "Bajo cotización",
    view: "Ver",
    request: "Solicita una cotización",
    inquiry: "¡Hola! Me gustaría cotizar el arreglo {name}.",
  },
  arrangements: {
    sunshine: { name: "UN RAYITO DE SOL", alt: "Rosas rosas y flores color crema sobre un fondo marfil cálido" },
    softly: { name: "CON AMOR Y TERNURA", alt: "Rosas rosas y hortensias azules sobre un fondo marfil cálido" },
    love: { name: "AMOR Nº 01", alt: "Rosas rojas y lirios blancos con envoltura negra sobre un fondo crema", description: "Rosas, lirios y flores de temporada" },
    bloom: { name: "QUE FLOREZCA EL AMOR", alt: "Flores rosas y color crema sobre un suave fondo marfil" },
    gratitude: { name: "UN POCO DE GRATITUD", alt: "Girasoles, rosas rosas y pequeñas flores blancas sobre un fondo crema" },
    warmth: { name: "TODA TU CALIDEZ", alt: "Rosas color crema y lirios con envoltura naranja sobre un fondo crema" },
    tender: { name: "UN PENSAMIENTO TIERNO", alt: "Rosas rosas con envoltura rosa pálido sobre un fondo marfil" },
    joy: { name: "UN DÍA PARA CELEBRAR", alt: "Gerberas naranjas y rosas blancas sobre un fondo crema cálido" },
    moment: { name: "UN MOMENTO ESPECIAL", alt: "Lirios rosas y rosas naranjas con envoltura morada sobre un fondo crema" },
    because: { name: "PORQUE SÍ", alt: "Gerberas rosas, naranjas y blancas con pequeñas flores blancas sobre un fondo crema" },
  },
  gesture: {
    marker: "El gesto",
    title: ["UN GESTO,", "ESCRITO EN FLORES."],
    paragraphs: ["Hay sentimientos que merecen más que un simple ramo.", "Añade una nota personal, elige las flores y deja que el gesto llegue con intención."],
    tell: "CUÉNTANOS EL MOMENTO",
    note: "Te ayudamos a elegir las flores adecuadas.",
    steps: [
      { title: "LA NOTA", lines: ["Un mensaje personal,", "escrito para esa persona"] },
      { title: "LAS FLORES", lines: ["Elegidas con cuidado", "para ese momento."] },
      { title: "LA ENTREGA", lines: ["Entregadas con cuidado", "e intención"] },
    ],
  },
  quote: {
    label: "Una reflexión sobre regalar flores",
    lines: ["“Regala flores mientras aún", "puedan sentirse.”"],
    hint: "Mantén presionado para arrugar · suelta para desplegar",
    controls: "Mantén presionado para arrugar y arrastrar. Teclado: mantén Espacio o Intro, usa las flechas para mover y Escape para restablecer.",
    loading: "Cargando el papel interactivo.",
    unavailable: "El papel interactivo no está disponible. Se muestra la imagen original.",
  },
  contact: { title: ["¿UN MOMENTO", "EN MENTE?"], tell: "Cuéntanos qué quieres expresar.", channels: "Medios de contacto" },
  footer: { navigation: "Navegación del pie de página", home: "INICIO", flowers: "FLORES", contact: "CONTACTO" },
  actions: { label: "Acciones rápidas", backToTop: "Volver al inicio", whatsapp: "Escríbenos por WhatsApp" },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
