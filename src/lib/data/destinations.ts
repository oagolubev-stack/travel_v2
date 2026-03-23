export interface Destination {
  slug: string;
  country: string;
  countrySlug: string;
  name: string;
  description: string;
  climate: string;
  bestSeason: string;
  flightTime: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  highlights: string[];
  suitableFor: {
    families: boolean;
    couples: boolean;
    active: boolean;
    budget: boolean;
  };
}

export const destinations: Destination[] = [
  {
    slug: "kemer",
    country: "Турция",
    countrySlug: "turkey",
    name: "Кемер",
    description:
      "Кемер — курорт на юго-западном побережье Турции, утопающий в сосновых лесах на фоне гор Тавр. Чистейшие пляжи с Голубым флагом, развитая инфраструктура и руины античного Фаселиса.",
    climate: "Средиземноморский. Лето жаркое и сухое (+32–36°C), зима мягкая (+12–16°C).",
    bestSeason: "Май–октябрь",
    flightTime: "3,5 часа из Москвы",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    rating: 4.8,
    reviewCount: 1240,
    tags: ["пляжный отдых", "история", "горы", "семейный"],
    highlights: ["Пляж Чамьюва", "Руины Фаселиса", "Каньон Гёйнюк", "Аквапарк Акваленд"],
    suitableFor: { families: true, couples: true, active: true, budget: false },
  },
  {
    slug: "side",
    country: "Турция",
    countrySlug: "turkey",
    name: "Сиде",
    description:
      "Сиде — древний портовый город на берегу Средиземного моря. Античные колонны Аполлона соседствуют с отелями all-inclusive, широкие песчаные пляжи тянутся на километры.",
    climate: "Средиземноморский. Очень жаркое лето (+35–38°C).",
    bestSeason: "Апрель–ноябрь",
    flightTime: "3,5–4 часа из Москвы",
    coverImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800",
    rating: 4.7,
    reviewCount: 980,
    tags: ["пляжный отдых", "история", "all-inclusive", "семейный"],
    highlights: ["Храм Аполлона", "Пляжи Восточный и Западный", "Водопад Манавгат", "Рынок Сиде"],
    suitableFor: { families: true, couples: true, active: false, budget: true },
  },
  {
    slug: "alanya",
    country: "Турция",
    countrySlug: "turkey",
    name: "Аланья",
    description:
      "Аланья — популярный турецкий курорт с крепостью на скале, живописными пещерами и длинными песчаными пляжами. Идеален для бюджетного отдыха.",
    climate: "Средиземноморский. Купальный сезон с апреля по декабрь.",
    bestSeason: "Май–октябрь",
    flightTime: "4 часа из Москвы",
    coverImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
    rating: 4.6,
    reviewCount: 2100,
    tags: ["пляжный отдых", "бюджетный", "история", "ночная жизнь"],
    highlights: ["Крепость Аланья", "Пещера Дамлаташ", "Мыс Клеопатры", "Пляж Клеопатры"],
    suitableFor: { families: true, couples: true, active: true, budget: true },
  },
  {
    slug: "hurghada",
    country: "Египет",
    countrySlug: "egypt",
    name: "Хургада",
    description:
      "Хургада — главный курорт Египта на берегу Красного моря. Круглогодичный дайвинг, кораллы и атмосфера восточного базара.",
    climate: "Пустынный. Лето +38–42°C, зима +22–26°C. Практически без осадков.",
    bestSeason: "Октябрь–май",
    flightTime: "4 часа из Москвы",
    coverImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800",
    rating: 4.5,
    reviewCount: 3200,
    tags: ["дайвинг", "снорклинг", "пляжный отдых", "круглогодичный"],
    highlights: ["Коралловые рифы", "Базар в Эль-Гуне", "Дайв-центры", "Пустынные сафари"],
    suitableFor: { families: true, couples: true, active: true, budget: true },
  },
  {
    slug: "phuket",
    country: "Таиланд",
    countrySlug: "thailand",
    name: "Пхукет",
    description:
      "Пхукет — жемчужина Таиланда, крупнейший остров с роскошными пляжами, буддийскими храмами и развитой туристической инфраструктурой.",
    climate: "Тропический. Дождливый сезон май–октябрь, сухой ноябрь–апрель.",
    bestSeason: "Ноябрь–апрель",
    flightTime: "9–11 часов из Москвы",
    coverImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800",
    rating: 4.9,
    reviewCount: 5600,
    tags: ["экзотика", "пляжный отдых", "еда", "буддизм"],
    highlights: ["Пляж Патонг", "Храм Ват Чалонг", "Острова Пхи-Пхи", "Старый город Пхукет"],
    suitableFor: { families: true, couples: true, active: true, budget: false },
  },
];

export function getDestinationBySlug(
  country: string,
  resort: string
): Destination | undefined {
  return destinations.find(
    (d) => d.countrySlug === country && d.slug === resort
  );
}

export function getDestinationsByCountry(countrySlug: string): Destination[] {
  return destinations.filter((d) => d.countrySlug === countrySlug);
}
