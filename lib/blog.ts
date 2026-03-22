import { BlogPost } from "@/types/blog"

export const blogPosts: BlogPost[] = [
  {
    slug: "luchshie-tury-v-tailand",
    title: "Лучшие туры в Таиланд 2026 — цены, курорты, советы",
    description: "Подборка лучших туров в Таиланд: Пхукет, Паттайя, Краби. Цены на путёвки от 45 000 ₽. Отвечаем на частые вопросы туристов.",
    keywords: ["туры в Таиланд", "путёвки в Таиланд 2026", "Пхукет туры"],
    datePublished: "2026-03-01",
    dateModified: "2026-03-20",
    author: "Редакция 2shezlonga",
    category: "Азия",
    tags: ["Таиланд", "Пхукет", "пляжный отдых"],
    readTime: 7,
    image: "/images/blog/tailand-cover.jpg",
    imageAlt: "Туры в Таиланд — пляж Пхукета",
    faq: [
      { question: "Когда лучше ехать в Таиланд?", answer: "Лучший сезон — ноябрь–апрель, сухой сезон без муссонов." },
      { question: "Нужна ли виза в Таиланд для россиян?", answer: "Нет, россияне въезжают без визы на 30 дней." },
      { question: "Сколько стоит тур в Таиланд из Москвы?", answer: "В 2026 году цены стартуют от 45 000 ₽ на двоих с перелётом." },
    ],
    relatedSlugs: ["luchshie-tury-v-bali", "pляжный-otdyx-aziya"],
    content: "",
  },
  {
    slug: "luchshie-tury-v-bali",
    title: "Туры на Бали 2026 — всё что нужно знать перед поездкой",
    description: "Путёвки на Бали: лучшие отели, безопасные районы, стоимость туров. FAQ для первых визитёров.",
    keywords: ["туры на Бали", "Бали 2026", "отдых на Бали"],
    datePublished: "2026-03-10",
    dateModified: "2026-03-20",
    author: "Редакция 2shezlonga",
    category: "Азия",
    tags: ["Бали", "Индонезия", "пляжный отдых"],
    readTime: 8,
    image: "/images/blog/bali-cover.jpg",
    imageAlt: "Туры на Бали — рисовые террасы",
    faq: [
      { question: "Сколько лететь на Бали из Москвы?", answer: "Перелёт занимает около 13–16 часов с пересадкой." },
      { question: "Нужна ли виза на Бали?", answer: "Виза по прилёту — Visa on Arrival за $35 на 30 дней." },
    ],
    relatedSlugs: ["luchshie-tury-v-tailand"],
    content: "",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((p) => slugs.includes(p.slug))
}
