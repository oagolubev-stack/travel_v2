export type DestinationCard = {
  title: string;
  location: string;
  price: string;
  image: string;
  badge?: string;
};

export type OfferCard = {
  title: string;
  description: string;
  price: string;
  tag: string;
};

export type ReviewCard = {
  name: string;
  text: string;
  rating: number;
  trip: string;
};

export const destinations: DestinationCard[] = [
  {
    title: "Турция",
    location: "Анталья, Кемер, Аланья",
    price: "от 78 900 ₽",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    badge: "Все включено",
  },
  {
    title: "Египет",
    location: "Шарм-эль-Шейх, Хургада",
    price: "от 84 500 ₽",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1200&q=80",
    badge: "Горящие туры",
  },
  {
    title: "ОАЭ",
    location: "Дубай, Абу-Даби",
    price: "от 96 300 ₽",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    badge: "Премиум",
  },
  {
    title: "Таиланд",
    location: "Пхукет, Паттайя",
    price: "от 112 700 ₽",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    badge: "Зима/лето",
  },
];

export const offers: OfferCard[] = [
  {
    title: "Горящие туры",
    description: "Подборка самых выгодных предложений на ближайшие даты вылета.",
    price: "от 52 000 ₽",
    tag: "Скидки до 35%",
  },
  {
    title: "Семейный отдых",
    description: "Отели с аквапарками, детской анимацией и удобным пляжем.",
    price: "от 109 000 ₽",
    tag: "2 взрослых + ребенок",
  },
  {
    title: "Романтический отпуск",
    description: "Отели 4–5★ для пар, медовый месяц и спокойные курорты.",
    price: "от 128 000 ₽",
    tag: "Для двоих",
  },
];

export const reviews: ReviewCard[] = [
  {
    name: "Ирина, Москва",
    text: "Очень быстро подобрали тур в Египет, все документы пришли вовремя, поддержка отвечала даже поздно вечером.",
    rating: 5,
    trip: "Шарм-эль-Шейх",
  },
  {
    name: "Алексей, Казань",
    text: "Удобный поиск и понятные цены без сюрпризов. Забронировали Турцию за один вечер.",
    rating: 5,
    trip: "Анталья",
  },
  {
    name: "Марина, Санкт-Петербург",
    text: "Понравилось, что можно быстро сравнить несколько отелей и выбрать лучший вариант по рейтингу и питанию.",
    rating: 4,
    trip: "Дубай",
  },
];

export const stats = [
  { value: "100+", label: "туроператоров в поиске" },
  { value: "24/7", label: "поддержка клиентов" },
  { value: "15 мин", label: "среднее время подбора" },
  { value: "4.8/5", label: "средняя оценка сервиса" },
];
