export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  coverImage: string;
  tags: string[];
  readingTime: number;
}

export const articles: Article[] = [
  {
    slug: "turkey-visa-2026",
    title: "Виза в Турцию 2026: нужна ли и как оформить",
    excerpt:
      "Россиянам виза в Турцию не нужна при въезде на срок до 60 дней. Разбираем нюансы въезда, правила пребывания и частые вопросы туристов.",
    category: "Визы",
    categorySlug: "visa",
    publishedAt: "2026-02-10",
    author: "Редакция Pro Туры",
    coverImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
    tags: ["турция", "виза", "2026", "документы"],
    readingTime: 5,
  },
  {
    slug: "kemer-or-side",
    title: "Кемер или Сиде: куда лучше поехать в 2026",
    excerpt:
      "Подробное сравнение двух топовых турецких курортов по пляжам, инфраструктуре, ценам и атмосфере.",
    category: "Сравнения",
    categorySlug: "compare",
    publishedAt: "2026-01-28",
    author: "Анна Орлова",
    coverImage: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800",
    tags: ["кемер", "сиде", "турция", "сравнение"],
    readingTime: 8,
  },
  {
    slug: "egypt-tips-2026",
    title: "15 лайфхаков для отдыха в Египте",
    excerpt:
      "Что взять с собой, как не обжечься на базаре, когда ехать и чего не делать. Советы туристов, побывавших в Хургаде и Шарме.",
    category: "Лайфхаки",
    categorySlug: "general",
    publishedAt: "2026-03-01",
    author: "Максим Ковалёв",
    coverImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800",
    tags: ["египет", "лайфхаки", "хургада", "советы"],
    readingTime: 6,
  },
  {
    slug: "phuket-budget-calculator",
    title: "Сколько стоит отдых в Таиланде: калькулятор бюджета",
    excerpt:
      "Рассчитайте стоимость поездки на Пхукет — перелёт, отель, питание, экскурсии. Реальные цены 2026 года.",
    category: "Лайфхаки",
    categorySlug: "tips",
    publishedAt: "2026-02-20",
    author: "Редакция Pro Туры",
    coverImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800",
    tags: ["таиланд", "пхукет", "бюджет", "расходы"],
    readingTime: 7,
  },
  {
    slug: "best-family-resorts-2026",
    title: "Лучшие семейные курорты 2026: ТОП-7",
    excerpt:
      "Куда лететь с детьми в 2026 году: Турция, Египет, Таиланд, Кипр. Рейтинг по отзывам реальных семей.",
    category: "Подборки",
    categorySlug: "collections",
    publishedAt: "2026-01-15",
    author: "Анна Орлова",
    coverImage: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800",
    tags: ["семейный отдых", "2026", "дети", "курорты"],
    readingTime: 9,
  },
];
