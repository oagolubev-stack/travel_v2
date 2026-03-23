export interface Hotel {
  id: string;
  name: string;
  resort: string;
  resortSlug: string;
  stars: 3 | 4 | 5;
  mealPlan: "AI" | "UAI" | "HB" | "BB" | "RO";
  distanceToSea: number;
  hasKidsClub: boolean;
  hasPool: boolean;
  hasSpa: boolean;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  image: string;
  description: string;
  beach: string;
}

export const hotels: Hotel[] = [
  {
    id: "crystal-flora",
    name: "Crystal Flora Beach Resort",
    resort: "Кемер",
    resortSlug: "kemer",
    stars: 5,
    mealPlan: "UAI",
    distanceToSea: 0,
    hasKidsClub: true,
    hasPool: true,
    hasSpa: true,
    rating: 4.8,
    reviewCount: 890,
    pricePerNight: 18500,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600",
    description: "Роскошный 5★ отель прямо на берегу с аквапарком и широкой развлекательной программой.",
    beach: "Галечный, 1-я линия",
  },
  {
    id: "rixos-sungate",
    name: "Rixos Sungate",
    resort: "Кемер",
    resortSlug: "kemer",
    stars: 5,
    mealPlan: "UAI",
    distanceToSea: 0,
    hasKidsClub: true,
    hasPool: true,
    hasSpa: true,
    rating: 4.9,
    reviewCount: 1200,
    pricePerNight: 24000,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    description: "Флагман сети Rixos: огромная территория, 10 ресторанов, ночной клуб, детский Rixy Club.",
    beach: "Песчано-галечный, 1-я линия",
  },
  {
    id: "beldibi-bera",
    name: "Bera Alanya Hotel",
    resort: "Кемер",
    resortSlug: "kemer",
    stars: 4,
    mealPlan: "AI",
    distanceToSea: 150,
    hasKidsClub: true,
    hasPool: true,
    hasSpa: false,
    rating: 4.5,
    reviewCount: 560,
    pricePerNight: 9800,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
    description: "Комфортный 4★ с бесплатным трансфером на пляж и хорошей кухней.",
    beach: "Песчаный, 150 м",
  },
  {
    id: "sea-planet",
    name: "Sea Planet Resort & Spa",
    resort: "Кемер",
    resortSlug: "kemer",
    stars: 5,
    mealPlan: "UAI",
    distanceToSea: 0,
    hasKidsClub: true,
    hasPool: true,
    hasSpa: true,
    rating: 4.7,
    reviewCount: 740,
    pricePerNight: 16200,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
    description: "Современный отель с СПА, открытым кинотеатром и вечерними шоу.",
    beach: "Галечный, 1-я линия",
  },
  {
    id: "amara-dolce-vita",
    name: "Amara Dolce Vita Luxury",
    resort: "Кемер",
    resortSlug: "kemer",
    stars: 5,
    mealPlan: "UAI",
    distanceToSea: 0,
    hasKidsClub: false,
    hasPool: true,
    hasSpa: true,
    rating: 4.6,
    reviewCount: 420,
    pricePerNight: 22000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
    description: "Отель для взрослых 16+. Изысканная кухня, тихий пляж, романтическая атмосфера.",
    beach: "Галечный, 1-я линия",
  },
];

export function getHotelsByResort(resortSlug: string): Hotel[] {
  return hotels.filter((h) => h.resortSlug === resortSlug);
}
