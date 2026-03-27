import { otdykhImages, vygodnoImages, countryImages } from './site-images';

// ─────────────────────────────────────────────────
// КУДА ПОЕХАТЬ
// ─────────────────────────────────────────────────

export interface KudaCountry {
  slug: string;
  name: string;
  emoji: string;
  cover: string;
  description: string;
  resorts: Array<{ name: string; slug: string; countrySlug: string }>;
  articleSlugs: string[];
  popular: boolean;
  isRussia?: boolean;
}

export const kudaCountries: KudaCountry[] = [
  {
    slug: 'turtsiya',
    name: 'Турция',
    emoji: '🇹🇷',
    cover: countryImages.turtsiya.src,
    description: 'Средиземноморье, all-inclusive отели, древняя история — всё рядом',
    resorts: [
      { name: 'Анталья', slug: 'antalya', countrySlug: 'turkey' },
      { name: 'Кемер', slug: 'kemer', countrySlug: 'turkey' },
      { name: 'Сиде', slug: 'side', countrySlug: 'turkey' },
      { name: 'Бодрум', slug: 'bodrum', countrySlug: 'turkey' },
      { name: 'Аланья', slug: 'alanya', countrySlug: 'turkey' },
    ],
    articleSlugs: ['kemer-or-side', 'turkey-2026-complete-guide', 'tours-turkey-all-inclusive', 'turkey-visa-2026'],
    popular: true,
  },
  {
    slug: 'egipet',
    name: 'Египет',
    emoji: '🇪🇬',
    cover: countryImages.egipet.src,
    description: 'Красное море, дайвинг, коралловые рифы и пирамиды',
    resorts: [
      { name: 'Хургада', slug: 'hurghada', countrySlug: 'egypt' },
      { name: 'Шарм-эль-Шейх', slug: 'sharm-el-sheikh', countrySlug: 'egypt' },
    ],
    articleSlugs: ['when-to-go-egypt'],
    popular: true,
  },
  {
    slug: 'tailand',
    name: 'Таиланд',
    emoji: '🇹🇭',
    cover: countryImages.tailand.src,
    description: 'Тропические острова, буддийские храмы, уличная еда',
    resorts: [
      { name: 'Пхукет', slug: 'phuket', countrySlug: 'thailand' },
      { name: 'Самуи', slug: 'samui', countrySlug: 'thailand' },
      { name: 'Паттайя', slug: 'pattaya', countrySlug: 'thailand' },
    ],
    articleSlugs: ['phuket-budget-calculator'],
    popular: true,
  },
  {
    slug: 'oae',
    name: 'ОАЭ',
    emoji: '🇦🇪',
    cover: countryImages.oae.src,
    description: 'Дубай и Абу-Даби — роскошь, небоскрёбы, шоппинг',
    resorts: [
      { name: 'Дубай', slug: 'dubai', countrySlug: 'uae' },
      { name: 'Абу-Даби', slug: 'abu-dhabi', countrySlug: 'uae' },
    ],
    articleSlugs: [],
    popular: true,
  },
  {
    slug: 'bali',
    name: 'Бали',
    emoji: '🌴',
    cover: countryImages.bali.src,
    description: 'Остров богов — рисовые террасы, храмы, серфинг, рисовые поля',
    resorts: [],
    articleSlugs: [],
    popular: true,
  },
  {
    slug: 'maldivi',
    name: 'Мальдивы',
    emoji: '🏝',
    cover: countryImages.maldivi.src,
    description: 'Кристальное море, бунгало над водой, абсолютный релакс',
    resorts: [],
    articleSlugs: [],
    popular: true,
  },
  {
    slug: 'vietnam',
    name: 'Вьетнам',
    emoji: '🇻🇳',
    cover: countryImages.vietnam.src,
    description: 'Залив Халонг, Хой Ан, Дананг — культура и пляжи',
    resorts: [],
    articleSlugs: [],
    popular: false,
  },
  {
    slug: 'sri-lanka',
    name: 'Шри-Ланка',
    emoji: '🇱🇰',
    cover: countryImages['sri-lanka'].src,
    description: 'Чайные плантации, слоны, пляжи и буддийские ступы',
    resorts: [],
    articleSlugs: [],
    popular: false,
  },
  {
    slug: 'goa',
    name: 'Гоа',
    emoji: '🇮🇳',
    cover: countryImages.goa.src,
    description: 'Индийский штат с пляжами, хиппи-культурой и морепродуктами',
    resorts: [],
    articleSlugs: [],
    popular: false,
  },
  {
    slug: 'seyshely',
    name: 'Сейшелы',
    emoji: '🏖',
    cover: countryImages.seyshely.src,
    description: 'Гранитные острова, тропические джунгли, люксовый отдых',
    resorts: [],
    articleSlugs: [],
    popular: false,
  },
  {
    slug: 'kitay',
    name: 'Китай',
    emoji: '🇨🇳',
    cover: countryImages.kitay.src,
    description: 'Пекин, Шанхай, Великая стена — история и мегаполисы',
    resorts: [],
    articleSlugs: [],
    popular: false,
  },
  {
    slug: 'kuba-dominikana',
    name: 'Куба и Доминикана',
    emoji: '🌊',
    cover: countryImages['kuba-dominikana'].src,
    description: 'Карибские острова, сальса, всё включено на белом песке',
    resorts: [],
    articleSlugs: [],
    popular: false,
  },
  {
    slug: 'sochi',
    name: 'Сочи',
    emoji: '⛰',
    cover: countryImages.sochi.src,
    description: 'Черноморское побережье, Красная Поляна, субтропики',
    resorts: [],
    articleSlugs: [],
    popular: false,
    isRussia: true,
  },
  {
    slug: 'anapa',
    name: 'Анапа',
    emoji: '☀',
    cover: countryImages.anapa.src,
    description: 'Семейный курорт с песчаными пляжами и мелководьем',
    resorts: [],
    articleSlugs: [],
    popular: false,
    isRussia: true,
  },
  {
    slug: 'krym',
    name: 'Крым',
    emoji: '🌄',
    cover: countryImages.krym.src,
    description: 'Горы, виноградники, Ялта и чистые пляжи',
    resorts: [],
    articleSlugs: [],
    popular: false,
    isRussia: true,
  },
];

export function getKudaCountry(slug: string): KudaCountry | undefined {
  return kudaCountries.find(c => c.slug === slug);
}

// ─────────────────────────────────────────────────
// ВЫБЕРИ ОТДЫХ
// ─────────────────────────────────────────────────

export interface OtdykhType {
  slug: string;
  name: string;
  emoji: string;
  cover: string;
  description: string;
  articleSlugs: string[];
}

export const otdykhTypes: OtdykhType[] = [
  {
    slug: 's-detmi',
    name: 'С детьми',
    emoji: '👨‍👩‍👧',
    cover: otdykhImages['s-detmi'].src,
    description: 'Лучшие курорты и отели для семейного отдыха с детьми любого возраста',
    articleSlugs: ['best-family-resorts-2026', 'tours-with-kids-2026', 'family-hotels-discount-16', 'two-rooms-instead-one-family', '5-star-vs-4-star-with-kids', 'kids-beach-packing-list'],
  },
  {
    slug: 'vlyublennym',
    name: 'Влюблённым',
    emoji: '💑',
    cover: otdykhImages.vlyublennym.src,
    description: 'Романтические направления, отели для пар и идеи для медового месяца',
    articleSlugs: [],
  },
  {
    slug: 'godovshchina',
    name: 'Годовщина и юбилей',
    emoji: '💍',
    cover: otdykhImages.godovshchina.src,
    description: 'Особые поводы — как сделать поездку незабываемой',
    articleSlugs: [],
  },
  {
    slug: 'luks-vip',
    name: 'Люкс и VIP',
    emoji: '👑',
    cover: otdykhImages['luks-vip'].src,
    description: 'Отели 5★, виллы, Butler Service и эксклюзивные туры',
    articleSlugs: [],
  },
  {
    slug: 'aktivnyy',
    name: 'Активный отдых',
    emoji: '🏃',
    cover: otdykhImages.aktivnyy.src,
    description: 'Дайвинг, серфинг, горы, треккинг — для тех, кто не умеет скучать',
    articleSlugs: [],
  },
  {
    slug: 'plyazh-relaks',
    name: 'Пляж и релакс',
    emoji: '🏖',
    cover: otdykhImages['plyazh-relaks'].src,
    description: 'Лучшие пляжные направления для тех, кто хочет просто лежать у моря',
    articleSlugs: [],
  },
  {
    slug: 'spa',
    name: 'СПА и оздоровление',
    emoji: '🧖',
    cover: otdykhImages.spa.src,
    description: 'Талассо, велнес-отели, оздоровительные программы',
    articleSlugs: [],
  },
  {
    slug: 'ekskursionnyy',
    name: 'Экскурсионный тур',
    emoji: '🏙',
    cover: otdykhImages.ekskursionnyy.src,
    description: 'Города, история, культура — путешествие с программой',
    articleSlugs: [],
  },
  {
    slug: 'korotkiy',
    name: 'Короткий отпуск',
    emoji: '⚡',
    cover: otdykhImages.korotkiy.src,
    description: 'Туры 3–5 ночей — успеть отдохнуть в выходные или за мини-отпуск',
    articleSlugs: [],
  },
  {
    slug: 'molodezhnyy',
    name: 'Молодёжный',
    emoji: '🎉',
    cover: otdykhImages.molodezhnyy.src,
    description: 'Тусовки, активности, ночная жизнь и бюджетный отдых',
    articleSlugs: [],
  },
  {
    slug: 'kompaniey',
    name: 'Компанией',
    emoji: '👫',
    cover: otdykhImages.kompaniey.src,
    description: 'Отдых с друзьями, корпоративные выезды, групповые туры',
    articleSlugs: [],
  },
  {
    slug: 'solo',
    name: 'Соло',
    emoji: '🧳',
    cover: otdykhImages.solo.src,
    description: 'Для тех, кто едет один — безопасные направления и советы',
    articleSlugs: ['solo-travel-guide-2026', 'best-solo-destinations-2026'],
  },
  {
    slug: 'byudzhetnyy',
    name: 'Бюджетный',
    emoji: '💰',
    cover: otdykhImages.byudzhetnyy.src,
    description: 'Отдых до 60 000 руб. на двоих — куда поехать не разорившись',
    articleSlugs: ['budget-vacation-50k-2026', 'save-money-on-tour-2026'],
  },
];

export function getOtdykhType(slug: string): OtdykhType | undefined {
  return otdykhTypes.find(t => t.slug === slug);
}

// ─────────────────────────────────────────────────
// ОТДЫХАЕМ ВЫГОДНО
// ─────────────────────────────────────────────────

export interface VygodnoTopic {
  slug: string;
  name: string;
  emoji: string;
  cover: string;
  description: string;
  articleSlugs: string[];
}

export const vygodnoTopics: VygodnoTopic[] = [
  {
    slug: 'kogda-ehat',
    name: 'Когда лучше ехать',
    emoji: '📅',
    cover: vygodnoImages['kogda-ehat'].src,
    description: 'Лучшие сезоны, погода и цены по месяцам для каждого направления',
    articleSlugs: ['when-to-go-egypt'],
  },
  {
    slug: 'goryashchie-tury',
    name: 'Горящие туры',
    emoji: '🔥',
    cover: vygodnoImages['goryashchie-tury'].src,
    description: 'Как найти горящий тур и не потерять деньги — честный гид',
    articleSlugs: ['hot-tours-guide'],
  },
  {
    slug: 'rannee-bronirovanie',
    name: 'Раннее бронирование',
    emoji: '📆',
    cover: vygodnoImages['rannee-bronirovanie'].src,
    description: 'Когда и как бронировать тур, чтобы сэкономить до 35%',
    articleSlugs: ['when-to-book-tour'],
  },
  {
    slug: 'skolko-stoit',
    name: 'Сколько стоит отдых',
    emoji: '💳',
    cover: vygodnoImages['skolko-stoit'].src,
    description: 'Калькуляторы бюджета для разных направлений и типов отдыха',
    articleSlugs: ['phuket-budget-calculator'],
  },
  {
    slug: 'layfhaki',
    name: 'Лайфхаки туриста',
    emoji: '💡',
    cover: vygodnoImages.layfhaki.src,
    description: 'Советы опытных путешественников: как отдохнуть лучше и дешевле',
    articleSlugs: ['egypt-tips-2026', 'seasonal-menu-all-inclusive', 'stopover-programs-free-hotel', 'hotel-renovation-avoid-construction'],
  },
  {
    slug: 'turooperatory',
    name: 'Туроператоры',
    emoji: '🏢',
    cover: vygodnoImages.turooperatory.src,
    description: 'Сравнение Pegas, Coral, Anex и других — кому доверять деньги',
    articleSlugs: [],
  },
  {
    slug: 'viza-i-dokumenty',
    name: 'Визы и документы',
    emoji: '📋',
    cover: vygodnoImages['viza-i-dokumenty'].src,
    description: 'Что нужно для въезда в разные страны — актуально на 2026 год',
    articleSlugs: ['turkey-visa-2026'],
  },
  {
    slug: 'prava-turista',
    name: 'Права туриста',
    emoji: '⚖',
    cover: vygodnoImages['prava-turista'].src,
    description: 'Что делать если тур отменили, задержали рейс или сменили отель',
    articleSlugs: [],
  },
];

export function getVygodnoTopic(slug: string): VygodnoTopic | undefined {
  return vygodnoTopics.find(t => t.slug === slug);
}

// ─────────────────────────────────────────────────
// ARTICLE BREADCRUMB MAPPING
// ─────────────────────────────────────────────────

export type BreadcrumbItem = { label: string; href?: string };

export const articleBreadcrumbs: Record<string, BreadcrumbItem[]> = {
  'turkey-visa-2026': [
    { label: 'Куда поехать', href: '/blog/kuda' },
    { label: 'Турция', href: '/blog/kuda/turtsiya' },
  ],
  'kemer-or-side': [
    { label: 'Куда поехать', href: '/blog/kuda' },
    { label: 'Турция', href: '/blog/kuda/turtsiya' },
  ],
  'turkey-2026-complete-guide': [
    { label: 'Куда поехать', href: '/blog/kuda' },
    { label: 'Турция', href: '/blog/kuda/turtsiya' },
  ],
  'tours-turkey-all-inclusive': [
    { label: 'Куда поехать', href: '/blog/kuda' },
    { label: 'Турция', href: '/blog/kuda/turtsiya' },
  ],
  'egypt-tips-2026': [
    { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
    { label: 'Лайфхаки туриста', href: '/blog/vygodno/layfhaki' },
  ],
  'when-to-go-egypt': [
    { label: 'Куда поехать', href: '/blog/kuda' },
    { label: 'Египет', href: '/blog/kuda/egipet' },
  ],
  'phuket-budget-calculator': [
    { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
    { label: 'Сколько стоит отдых', href: '/blog/vygodno/skolko-stoit' },
  ],
  'best-family-resorts-2026': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'С детьми', href: '/blog/otdykh/s-detmi' },
  ],
  'tours-with-kids-2026': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'С детьми', href: '/blog/otdykh/s-detmi' },
  ],
  'family-hotels-discount-16': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'С детьми', href: '/blog/otdykh/s-detmi' },
  ],
  'two-rooms-instead-one-family': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'С детьми', href: '/blog/otdykh/s-detmi' },
  ],
  '5-star-vs-4-star-with-kids': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'С детьми', href: '/blog/otdykh/s-detmi' },
  ],
  'seasonal-menu-all-inclusive': [
    { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
    { label: 'Лайфхаки туриста', href: '/blog/vygodno/layfhaki' },
  ],
  'stopover-programs-free-hotel': [
    { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
    { label: 'Лайфхаки туриста', href: '/blog/vygodno/layfhaki' },
  ],
  'hotel-renovation-avoid-construction': [
    { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
    { label: 'Лайфхаки туриста', href: '/blog/vygodno/layfhaki' },
  ],
  'hot-tours-guide': [
    { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
    { label: 'Горящие туры', href: '/blog/vygodno/goryashchie-tury' },
  ],
  'when-to-book-tour': [
    { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
    { label: 'Раннее бронирование', href: '/blog/vygodno/rannee-bronirovanie' },
  ],
  'kids-beach-packing-list': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'С детьми', href: '/blog/otdykh/s-detmi' },
  ],
  'solo-travel-guide-2026': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'Соло', href: '/blog/otdykh/solo' },
  ],
  'best-solo-destinations-2026': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'Соло', href: '/blog/otdykh/solo' },
  ],
  'budget-vacation-50k-2026': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'Бюджетный', href: '/blog/otdykh/byudzhetnyy' },
  ],
  'save-money-on-tour-2026': [
    { label: 'Выбери отдых', href: '/blog/otdykh' },
    { label: 'Бюджетный', href: '/blog/otdykh/byudzhetnyy' },
  ],
};
