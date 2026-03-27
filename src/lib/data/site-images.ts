/**
 * РЕЕСТР ИЗОБРАЖЕНИЙ САЙТА
 *
 * Все картинки сайта в одном месте.
 * Чтобы заменить изображение — измените поле `src`.
 * Формат замены:
 *   - Unsplash: "https://images.unsplash.com/photo-XXXX?w=800"
 *   - Локально: "/images/[папка]/[название].jpg"
 *
 * Рекомендуемые размеры (width × height):
 *   hero    — 1200 × 630  (для обложек страниц, og:image)
 *   card    — 800  × 450  (карточки статей, 16:9)
 *   square  — 600  × 600  (квадратные превью)
 *   thumb   — 400  × 250  (миниатюры)
 */

export interface SiteImage {
  /** Уникальный ключ — используется при импорте */
  key: string;
  /** URL или путь к файлу */
  src: string;
  /** Alt-текст для SEO и доступности */
  alt: string;
  /** Ширина × Высота в px */
  width: number;
  height: number;
  /**
   * Тема / описание для замены:
   * что должно быть на фото, какое настроение, что важно показать
   */
  theme: string;
}

// ─────────────────────────────────────────────────
// СТРАНЫ (используются на /blog/kuda/[country])
// ─────────────────────────────────────────────────

export const countryImages: Record<string, SiteImage> = {
  turtsiya: {
    key: 'turtsiya',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    alt: 'Турция — побережье Средиземного моря',
    width: 1200, height: 600,
    theme: 'Турецкое средиземноморское побережье. Бирюзовая вода, горы на фоне, отель или пляж.',
  },
  egipet: {
    key: 'egipet',
    src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200',
    alt: 'Египет — курорт Хургада',
    width: 1200, height: 600,
    theme: 'Египетский курорт. Красное море, коралловые рифы под водой или пирамиды на закате.',
  },
  tailand: {
    key: 'tailand',
    src: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200',
    alt: 'Таиланд — остров Пхукет',
    width: 1200, height: 600,
    theme: 'Таиланд. Тропический пляж с длинными хвойными пальмами, бирюзовое море, скалы.',
  },
  oae: {
    key: 'oae',
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200',
    alt: 'ОАЭ — Дубай',
    width: 1200, height: 600,
    theme: 'Дубай. Небоскрёбы, Бурдж-Халифа, пустыня или роскошный отель.',
  },
  bali: {
    key: 'bali',
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
    alt: 'Бали — остров богов',
    width: 1200, height: 600,
    theme: 'Бали. Рисовые террасы, храм Тананг-Лот, рисовые поля или серфинг.',
  },
  maldivi: {
    key: 'maldivi',
    src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200',
    alt: 'Мальдивы — бунгало над водой',
    width: 1200, height: 600,
    theme: 'Мальдивы. Бунгало над кристальной водой, белый песок, тропическая лагуна.',
  },
  vietnam: {
    key: 'vietnam',
    src: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200',
    alt: 'Вьетнам — Халонг',
    width: 1200, height: 600,
    theme: 'Вьетнам. Бухта Халонг — скалы из воды, лодки. Или улицы Хой Ана с фонарями.',
  },
  'sri-lanka': {
    key: 'sri-lanka',
    src: 'https://images.unsplash.com/photo-1598432952427-f07c63f3d7b4?w=1200',
    alt: 'Шри-Ланка',
    width: 1200, height: 600,
    theme: 'Шри-Ланка. Чайные плантации, слоны в джунглях или будда.',
  },
  goa: {
    key: 'goa',
    src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200',
    alt: 'Гоа — Индия',
    width: 1200, height: 600,
    theme: 'Гоа. Пляж с пальмами, красочные лодки, закат или рынок.',
  },
  seyshely: {
    key: 'seyshely',
    src: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=1200',
    alt: 'Сейшелы',
    width: 1200, height: 600,
    theme: 'Сейшелы. Гранитные скалы, белоснежный пляж, прозрачная вода.',
  },
  kitay: {
    key: 'kitay',
    src: 'https://images.unsplash.com/photo-1549300000-4ae0e4ed31d8?w=1200',
    alt: 'Китай',
    width: 1200, height: 600,
    theme: 'Китай. Великая стена, Шанхай ночью или традиционная архитектура.',
  },
  'kuba-dominikana': {
    key: 'kuba-dominikana',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    alt: 'Куба и Доминикана',
    width: 1200, height: 600,
    theme: 'Карибы. Бирюзовый океан, белый пляж, пальмы. Куба — ретроавтомобили.',
  },
  sochi: {
    key: 'sochi',
    src: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200',
    alt: 'Сочи — Черноморское побережье',
    width: 1200, height: 600,
    theme: 'Сочи. Набережная, горы Красной Поляны со снегом или черноморский пляж.',
  },
  anapa: {
    key: 'anapa',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    alt: 'Анапа',
    width: 1200, height: 600,
    theme: 'Анапа. Широкий песчаный пляж, семьи с детьми, мелководье.',
  },
  krym: {
    key: 'krym',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    alt: 'Крым',
    width: 1200, height: 600,
    theme: 'Крым. Горы с морем на заднем плане, Ласточкино Гнездо или виноградники.',
  },
};

// ─────────────────────────────────────────────────
// КУРОРТЫ (используются на /blog/destinations/...)
// ─────────────────────────────────────────────────

export const resortImages: Record<string, SiteImage> = {
  kemer: {
    key: 'kemer',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    alt: 'Кемер — Турция',
    width: 800, height: 450,
    theme: 'Кемер. Сосновые леса, галечный пляж с синим флагом, горы Таврус.',
  },
  side: {
    key: 'side',
    src: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800',
    alt: 'Сиде — Турция',
    width: 800, height: 450,
    theme: 'Сиде. Античные колонны храма Аполлона на фоне моря, широкий песчаный пляж.',
  },
  alanya: {
    key: 'alanya',
    src: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800',
    alt: 'Аланья — Турция',
    width: 800, height: 450,
    theme: 'Аланья. Крепость на скале над морем, пляж Клеопатры, ночная набережная.',
  },
  hurghada: {
    key: 'hurghada',
    src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800',
    alt: 'Хургада — Египет',
    width: 800, height: 450,
    theme: 'Хургада. Кораллы Красного моря под водой, пляж с зонтиками, закат над морем.',
  },
  phuket: {
    key: 'phuket',
    src: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800',
    alt: 'Пхукет — Таиланд',
    width: 800, height: 450,
    theme: 'Пхукет. Пляж Патонг, длинные скалы, закат, таиландские лодки-хвостовики.',
  },
};

// ─────────────────────────────────────────────────
// СТАТЬИ (используются на карточках и внутри статей)
// ─────────────────────────────────────────────────

export const articleImages: Record<string, SiteImage> = {
  'turkey-visa-2026': {
    key: 'turkey-visa-2026',
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
    alt: 'Виза в Турцию',
    width: 800, height: 450,
    theme: 'Паспорт с турецкими мотивами, или аэропорт Стамбула, или закат над Босфором.',
  },
  'kemer-or-side': {
    key: 'kemer-or-side',
    src: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800',
    alt: 'Кемер или Сиде',
    width: 800, height: 450,
    theme: 'Сравнение: два пляжа рядом или коллаж — Кемер (горы) vs Сиде (песок).',
  },
  'egypt-tips-2026': {
    key: 'egypt-tips-2026',
    src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800',
    alt: 'Лайфхаки для отдыха в Египте',
    width: 800, height: 450,
    theme: 'Египет — подводный мир, снорклинг, коралловые рыбы. Или рынок с сувенирами.',
  },
  'phuket-budget-calculator': {
    key: 'phuket-budget-calculator',
    src: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800',
    alt: 'Бюджет поездки в Таиланд',
    width: 800, height: 450,
    theme: 'Таиланд — монеты/деньги на фоне пальм, или тайская еда на улице.',
  },
  'best-family-resorts-2026': {
    key: 'best-family-resorts-2026',
    src: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800',
    alt: 'Лучшие семейные курорты',
    width: 800, height: 450,
    theme: 'Семья с детьми на пляже, дети в аквапарке, детский клуб в отеле.',
  },
  'turkey-2026-complete-guide': {
    key: 'turkey-2026-complete-guide',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    alt: 'Гид по Турции 2026',
    width: 800, height: 450,
    theme: 'Турецкий курорт сверху — бирюзовое море, отели, горы. Панорамный вид.',
  },
  'seasonal-menu-all-inclusive': {
    key: 'seasonal-menu-all-inclusive',
    src: 'https://images.unsplash.com/photo-1414235077418-3a2357dd4f8f?w=800',
    alt: 'Шведский стол в отеле',
    width: 800, height: 450,
    theme: 'Ресторан All-Inclusive. Роскошный шведский стол, разнообразие блюд, отельный ресторан.',
  },
  'tours-turkey-all-inclusive': {
    key: 'tours-turkey-all-inclusive',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    alt: 'Туры в Турцию all inclusive',
    width: 800, height: 450,
    theme: 'Турецкий отель all-inclusive. Бассейн с зонтиками, море, пляжный бар.',
  },
  'tours-with-kids-2026': {
    key: 'tours-with-kids-2026',
    src: 'https://images.unsplash.com/photo-1488761681033-6461ffad8d80?w=800',
    alt: 'Туры с детьми',
    width: 800, height: 450,
    theme: 'Дети играют у моря, семья в отпуске, детская горка в аквапарке.',
  },
  'hot-tours-guide': {
    key: 'hot-tours-guide',
    src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    alt: 'Горящие туры — как найти',
    width: 800, height: 450,
    theme: 'Телефон/ноутбук с поиском туров, чемодан у аэропорта, таймер обратного отсчёта.',
  },
  'when-to-go-egypt': {
    key: 'when-to-go-egypt',
    src: 'https://images.unsplash.com/photo-1552529927-48fa240c9c84?w=800',
    alt: 'Когда ехать в Египет',
    width: 800, height: 450,
    theme: 'Египет — пирамиды на закате, или пляж в межсезонье (октябрь-ноябрь).',
  },
  'family-hotels-discount-16': {
    key: 'family-hotels-discount-16',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    alt: 'Семейные отели со скидкой для детей',
    width: 800, height: 450,
    theme: 'Дети в отеле all-inclusive. Анимация, детский клуб, счастливая семья у бассейна.',
  },
  'two-rooms-instead-one-family': {
    key: 'two-rooms-instead-one-family',
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
    alt: 'Два номера в отеле для семьи',
    width: 800, height: 450,
    theme: 'Два смежных номера в отеле, или уютный семейный номер с детскими кроватями.',
  },
  'stopover-programs-free-hotel': {
    key: 'stopover-programs-free-hotel',
    src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    alt: 'Стоповер — бесплатный отель на пересадке',
    width: 800, height: 450,
    theme: 'Аэропорт Дубая или Стамбула, самолёт взлетает, карта маршрутов.',
  },
  'hotel-renovation-avoid-construction': {
    key: 'hotel-renovation-avoid-construction',
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    alt: 'Реновация отеля — как избежать стройки',
    width: 800, height: 450,
    theme: 'Строительные работы в отеле, или обновлённый красивый отель после ремонта.',
  },
  '5-star-vs-4-star-with-kids': {
    key: '5-star-vs-4-star-with-kids',
    src: 'https://images.unsplash.com/photo-1596402184320-aac101d5cecb?w=800',
    alt: '5 звёзд vs 4 звезды с детьми',
    width: 800, height: 450,
    theme: 'Роскошный отель 5 звёзд с бассейном и анимацией для детей.',
  },
  'when-to-book-tour': {
    key: 'when-to-book-tour',
    src: 'https://images.unsplash.com/photo-1526772249885-be475731c7ee?w=800',
    alt: 'Когда бронировать тур',
    width: 800, height: 450,
    theme: 'Календарь, ноутбук с сайтом тура, экономия — монеты или процент скидки.',
  },
};

// ─────────────────────────────────────────────────
// ТИПЫ ОТДЫХА (используются на /blog/otdykh/...)
// ─────────────────────────────────────────────────

export const otdykhImages: Record<string, SiteImage> = {
  's-detmi': {
    key: 's-detmi',
    src: 'https://images.unsplash.com/photo-1488761681033-6461ffad8d80?w=600',
    alt: 'Отдых с детьми',
    width: 600, height: 400,
    theme: 'Семья с детьми на пляже, дети в воде, счастливые лица.',
  },
  'vlyublennym': {
    key: 'vlyublennym',
    src: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600',
    alt: 'Отдых для влюблённых',
    width: 600, height: 400,
    theme: 'Пара на закате у моря, романтический ужин, бунгало над водой.',
  },
  'godovshchina': {
    key: 'godovshchina',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600',
    alt: 'Годовщина и юбилей',
    width: 600, height: 400,
    theme: 'Свадебное путешествие, роскошный ужин для двоих, шампанское на балконе с видом.',
  },
  'luks-vip': {
    key: 'luks-vip',
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600',
    alt: 'Люкс и VIP отдых',
    width: 600, height: 400,
    theme: 'Роскошный отель 5 звёзд, вилла с приватным бассейном, дворецкий.',
  },
  'aktivnyy': {
    key: 'aktivnyy',
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
    alt: 'Активный отдых',
    width: 600, height: 400,
    theme: 'Дайвинг, серфинг, горный треккинг — динамика и адреналин.',
  },
  'plyazh-relaks': {
    key: 'plyazh-relaks',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
    alt: 'Пляж и релакс',
    width: 600, height: 400,
    theme: 'Идеальный пляж — белый песок, бирюзовая вода, шезлонги с зонтиками.',
  },
  'spa': {
    key: 'spa',
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
    alt: 'СПА и оздоровление',
    width: 600, height: 400,
    theme: 'СПА-процедуры, массаж, велнес-центр, горячие источники.',
  },
  'ekskursionnyy': {
    key: 'ekskursionnyy',
    src: 'https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=600',
    alt: 'Экскурсионный тур',
    width: 600, height: 400,
    theme: 'Достопримечательности: Колизей, Акрополь, Голубая мечеть — исторические места.',
  },
  'korotkiy': {
    key: 'korotkiy',
    src: 'https://images.unsplash.com/photo-1526772249885-be475731c7ee?w=600',
    alt: 'Короткий отпуск',
    width: 600, height: 400,
    theme: 'Маленький чемодан, выходные в городе, уютный отель на 3 ночи.',
  },
  'molodezhnyy': {
    key: 'molodezhnyy',
    src: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600',
    alt: 'Молодёжный отдых',
    width: 600, height: 400,
    theme: 'Молодёжная вечеринка на пляже, ночные клубы, активности и веселье.',
  },
  'kompaniey': {
    key: 'kompaniey',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
    alt: 'Отдых компанией',
    width: 600, height: 400,
    theme: 'Группа друзей на пляже или в бассейне, смех, веселье, тосты.',
  },
  'solo': {
    key: 'solo',
    src: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600',
    alt: 'Соло путешествие',
    width: 600, height: 400,
    theme: 'Одинокий путешественник смотрит на море/горы, свобода и одиночество.',
  },
  'byudzhetnyy': {
    key: 'byudzhetnyy',
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600',
    alt: 'Бюджетный отдых',
    width: 600, height: 400,
    theme: 'Доступный пляжный отдых, простой но уютный отель, монеты/экономия.',
  },
};

// ─────────────────────────────────────────────────
// ТЕМЫ ВЫГОДНО (используются на /blog/vygodno/...)
// ─────────────────────────────────────────────────

export const vygodnoImages: Record<string, SiteImage> = {
  'kogda-ehat': {
    key: 'kogda-ehat',
    src: 'https://images.unsplash.com/photo-1552529927-48fa240c9c84?w=600',
    alt: 'Когда лучше ехать',
    width: 600, height: 400,
    theme: 'Календарь с курортом на фоне, солнечный пляж в нужный сезон.',
  },
  'goryashchie-tury': {
    key: 'goryashchie-tury',
    src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600',
    alt: 'Горящие туры',
    width: 600, height: 400,
    theme: 'Срочная акция, таймер, самолёт с огнём (абстрактно), выгодная цена на экране.',
  },
  'rannee-bronirovanie': {
    key: 'rannee-bronirovanie',
    src: 'https://images.unsplash.com/photo-1526772249885-be475731c7ee?w=600',
    alt: 'Раннее бронирование',
    width: 600, height: 400,
    theme: 'Ноутбук с сайтом бронирования, скидка 30%, уведомление о сохранении места.',
  },
  'skolko-stoit': {
    key: 'skolko-stoit',
    src: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600',
    alt: 'Сколько стоит отдых',
    width: 600, height: 400,
    theme: 'Калькулятор, монеты, бюджет на фоне пляжа или курорта.',
  },
  'layfhaki': {
    key: 'layfhaki',
    src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600',
    alt: 'Лайфхаки туриста',
    width: 600, height: 400,
    theme: 'Смарт-чемодан, список лайфхаков, умный турист с телефоном в руке.',
  },
  'turooperatory': {
    key: 'turooperatory',
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600',
    alt: 'Туроператоры',
    width: 600, height: 400,
    theme: 'Офис турагентства, менеджер с клиентом, каталоги туров, логотипы операторов.',
  },
  'viza-i-dokumenty': {
    key: 'viza-i-dokumenty',
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600',
    alt: 'Визы и документы',
    width: 600, height: 400,
    theme: 'Паспорт с визой, документы, печать в паспорте, консульство.',
  },
  'prava-turista': {
    key: 'prava-turista',
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
    alt: 'Права туриста',
    width: 600, height: 400,
    theme: 'Документ-претензия, суд, турист с телефоном решает проблему, защита прав.',
  },
};
