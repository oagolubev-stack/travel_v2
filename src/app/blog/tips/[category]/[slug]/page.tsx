import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';
import { articleBreadcrumbs } from '@/lib/data/blog-nav';
import { FaqBlock } from '@/components/widgets/faq-block';
import { BudgetCalculator } from '@/components/widgets/budget-calculator';
import { JsonLd, buildArticleSchema, buildFaqSchema, buildBreadcrumbSchema } from '@/components/seo/json-ld';
import { buildMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { Clock, User, Tag } from 'lucide-react';
import { Breadcrumbs } from '../../../breadcrumbs';

interface Props { params: { category: string; slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug && a.categorySlug === params.category);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/tips/${params.category}/${params.slug}`,
    image: article.coverImage,
    keywords: article.tags,
  });
}

const articleFaqs: Record<string, { question: string; answer: string }[]> = {
  'hotel-renovation-avoid-construction': [
    { question: 'Обязан ли туроператор предупреждать о ремонте в отеле?', answer: 'Да, если ремонт может испортить отдых (шум, закрытые объекты). Это пункт договора. Если туроператор скрыл информацию — это повод требовать компенсацию.' },
    { question: 'Если отель ремонтируют, но шум не мешает, могут ли отказать в компенсации?', answer: 'Могут, если доказано, что ущерба комфорту нет. Но требовать переселение в тихую зону — можно всегда. Фиксируйте все на видео и фото.' },
    { question: 'Где посмотреть график реновации отелей на 2026 год?', answer: 'Крупные туроператоры (Pegas, Coral, Anex) публикуют списки отелей с ремонтом в начале сезона. Запросите у менеджера напрямую или поищите на форумах туристов (форум Винского).' },
    { question: 'Отель после реновации — это всегда хорошо?', answer: 'Не всегда. Иногда меняют концепцию отеля, и вместо уютного семейного получается шумный молодежный. Или меняют работающий персонал. Всегда проверяйте свежие отзывы.' },
    { question: 'Можно ли требовать полный возврат денег за тур, если отель на ремонте?', answer: 'Полный возврат получить сложно, но можно требовать частичный (пропорционально дням, когда работали стройки). Или переселение в другой отель. Главное — фиксируйте доказательства.' },
    { question: 'Что такое запах краски и как долго он выветривается?', answer: 'Это испарения от новой краски и лака. Обычно выветривается через 2–3 недели при открытых окнах. Если прилетели в первый день после открытия — может быть дискомфорт.' },
  ],
  'stopover-programs-free-hotel': [
    { question: 'Стоповер стоит дороже, чем прямой рейс?', answer: 'Обычно нет — наоборот, дешевле или такая же цена. Авиакомпании готовы дать вам отель и услуги, чтобы вы выбрали их рейс. Но всегда сравнивайте цены конкретно на ваш маршрут.' },
    { question: 'Нужна ли виза для стоповера?', answer: 'Да, если вы выходите из аэропорта в город. Для стран в шенгене, Турции, Исландии, Португалии и других могут быть визовые требования. Проверьте за месяц до поездки.' },
    { question: 'Что если я хочу остаться дольше, чем предусмотрено?', answer: 'Программа стоповера обычно включает определённое количество ночей (1-7). Если вы хотите остаться дольше, можно доплатить за дополнительные ночи в том же отеле или в другом отеле (авиакомпания часто даёт скидки).' },
    { question: 'Бесплатный отель — это хороший отель?', answer: 'Обычно это 3-4 звёзды, экономный класс. Не люкс, но чистый и удобный. Turkish Airlines даёт хорошие отели, Icelandair — разные в зависимости от сезона. Проверьте рейтинги перед поездкой.' },
    { question: 'Работает ли это для бюджетных авиакомпаний?', answer: 'Нет. Ryanair, EasyJet и др. не предлагают стоповер-программы. Это есть только у крупных авиакомпаний (Turkish, TAP, Finnair, Qatar, Singapore Airlines и т.д.).' },
    { question: 'Что если я уже купил билет? Можно ли добавить стоповер?', answer: 'Это сложно, но возможно. Напишите в авиакомпанию и попросите добавить стоповер к существующему билету. Часто они согласны, если рейс позволяет. Но лучше это предусмотреть при покупке.' },
  ],
  'turkey-visa-2026': [
    { question: 'Нужна ли виза россиянам в Турцию?', answer: 'Нет, виза не требуется для пребывания до 60 дней. Это действует благодаря безвизовому соглашению между РФ и Турцией.' },
    { question: 'Сколько может длиться пребывание без визы?', answer: 'До 60 дней в течение 180-дневного периода. Общее время пребывания не должно превышать 90 дней.' },
    { question: 'Какой срок действия паспорта нужен?', answer: 'Паспорт должен быть действителен минимум 60 дней после окончания вашей поездки.' },
    { question: 'Можно ли продлить пребывание в Турции?', answer: 'Да, можно продлить разрешение через Управление миграции Турции. Потребуется подтверждение финансов и цели пребывания.' },
    { question: 'Нужна ли медицинская страховка?', answer: 'Медицинская страховка не обязательна, но рекомендуется для покрытия расходов на лечение в случае необходимости.' },
  ],
  'egypt-tips-2026': [
    { question: 'Что взять с собой в Египет?', answer: 'Солнцезащитный крем SPF50+, средство от насекомых, пластиковые деньги, адаптер для розеток (тип C/F) и лёгкую закрытую одежду для экскурсий.' },
    { question: 'Безопасно ли пить воду в Египте?', answer: 'Водопроводную воду пить нельзя. Покупайте бутилированную воду (0.5 л ≈ $0.5) или берите питьевую воду в отеле.' },
    { question: 'Какую валюту брать в Египет?', answer: 'USD или EUR — самые выгодные для обмена. Карты принимают в крупных отелях и ресторанах, на рынках нужна наличка.' },
  ],
  'phuket-budget-calculator': [
    { question: 'Сколько стоит поездка в Таиланд на 10 дней?', answer: 'В среднем 80 000–150 000 ₽ на человека с учётом перелёта, отеля 4★, питания и экскурсий.' },
    { question: 'Нужна ли виза в Таиланд?', answer: 'Безвизовый въезд для россиян до 30 дней. При необходимости продления — визараны или туристическая виза.' },
  ],
  'turkey-2026-complete-guide': [
    { question: 'Когда лучше ехать в Турцию?', answer: 'Если нужен классический пляжный отдых — конец весны до осени. Если важен комфорт без жары — май или сентябрь-октябрь.' },
    { question: 'Какой курорт Турции выбрать с детьми?', answer: 'Белек, Сиде и некоторые отели Анталии и Аланьи с развитой инфраструктурой. Ищите песчаные пляжи, детские клубы и аквапарки.' },
    { question: 'Нужна ли виза в Турцию в 2026?', answer: 'Нет, виза не требуется для пребывания до 90 дней. Загранпаспорт должен действовать минимум 4 месяца.' },
    { question: 'Сколько денег брать в Турцию?', answer: 'При системе всё включено — бюджет на экскурсии, покупки и развлечения вне отеля. В среднем 300-700 $ на человека за неделю.' },
    { question: 'Турция подходит для первой поездки за границу?', answer: 'Да, потому что направление понятное, массовое и удобное по логистике. Короткий перелет, русскоязычный персонал во многих отелях, отсутствие визы делают Турцию идеальным вариантом для первого выезда.' },
  ],
  'seasonal-menu-all-inclusive': [
    { question: 'Почему меню отличается в разные месяцы?', answer: 'All Inclusive — это живая система, которая подстраивается под загрузку отеля, сезон и доступность продуктов. В высокий сезон отели могут позволить больше расходов на питание.' },
    { question: 'Когда в отелях лучше еда в Турции?', answer: 'Июнь-сентябрь (первая половина). В это время максимальная загрузка, высокие бюджеты на питание, много местных фруктов и морепродуктов.' },
    { question: 'AI или UAI — что выбрать в мае или октябре?', answer: 'В межсезонье выбирайте Ultra All Inclusive (UAI) — это страховка от сезонной экономии. Обычный AI в переходные месяцы может быть урезан.' },
  ],
  'when-to-book-tour': [
    { question: 'На сколько процентов дешевле тур, если бронировать заранее?', answer: 'В зависимости от сезона и направления от 15% до 35%. Высокий сезон (лето) дает экономию 25-35%, межсезонье (май, сентябрь) — 15-25%. Это происходит из-за увеличения спроса и курсов валют ближе к датам вылета.' },
    { question: 'Как долго я могу вносить деньги после депозита?', answer: 'Обычно депозит 20-30% при бронировании, затем доплаты по график до вылета (в 1-2 месяца и за 2-4 недели до вылета). Уточняйте у туроператора, но стандартная схема — это 2-3 платежа, распределенные на несколько месяцев.' },
    { question: 'Можно ли вернуть деньги, если я передумал?', answer: 'Да, но зависит от сроков. Если отмена за 30+ дней до вылета, вернут большую часть или всё, минус страховка. За неделю до вылета — только 50-60%. За 2-3 дня — может быть 0% возврата. Всегда уточняйте условия при бронировании.' },
    { question: 'Что, если цена упадёт после того, как я забронировал?', answer: 'Редко падает после раннего бронирования (скорее растёт). Но если упадет, попросите туроператора снизить цену или дать скидку — многие согласны, чтобы не потерять клиента. Главное — просить вежливо и в письменном виде.' },
    { question: 'Работают ли горящие туры в 2026?', answer: 'Горящие туры есть, но они не такие выгодные, как раньше. За 2-3 дня до вылета остаются люксы (которые всё равно дорогие) или эконом варианты. Экономия минимальна, а стресс максимален. Раннее бронирование всё равно выгоднее.' },
    { question: 'Какой минимальный срок для раннего бронирования?', answer: 'Идеально — 3-4 месяца до вылета (экономия максимальна). Минимум — 1.5-2 месяца (экономия 15-20%). Менее чем за месяц цены почти на уровне последних предложений, выгода падает.' },
    { question: 'Может ли туроператор отменить или изменить номер после бронирования?', answer: 'Может, но редко при раннем бронировании (обычно только при форс-мажоре). Уточняйте в договоре условия замены номера. Если отель действительно закрыт или переполнен, туроператор обязан предложить равноценную замену или вернуть деньги.' },
    { question: 'Нужна ли полная сумма при бронировании?', answer: 'Нет, обычно достаточно депозита 20-30%. Это легальная схема, которую используют все серьезные туроператоры. Остальное платите по графику.' },
  ],
  '5-star-vs-4-star-with-kids': [
    { question: 'Почему в 5* отеле дешевле, чем в 4*?', answer: 'Не всегда дешевле, но часто одинаково. В 4* для семьи из 3 человек нужен семейный номер (дорого). В 5* ребёнок может спать на диване в стандартном номере, что почти не увеличивает цену. Результат: примерно одна стоимость, но с лучшим сервисом.' },
    { question: 'До какого возраста ребёнка работает бесплатное размещение?', answer: 'Обычно до 6-7 лет. После этого отель может взимать доплату: 30-50% от взрослого места в возрасте 7-11 лет, 70-100% в 12+ лет. Проверьте конкретно у менеджера вашего отеля.' },
    { question: 'Гарантировано ли, что в стандартном номере 5* будет диван или кровать-трансформер?', answer: 'Нет. Перед бронированием обязательно спросите у менеджера: "Есть ли в стандартном номере место для третьего гостя?" и попросите фото. Иногда дополнительное место только в номерах категории выше.' },
    { question: 'Ребёнок питается бесплатно в 5* отеле?', answer: 'Часто да, если ребёнку до 6-7 лет. Но это зависит от отеля и системы питания (AI или UAI). Всегда уточняйте этот момент при бронировании — разница в цене может быть 10-20%.' },
    { question: 'А если ребёнку 12 лет? Работает ли схема 5* дешевле?', answer: 'Нет, не работает. Для подростка 12+ отель возьмёт почти полную взрослую цену. В этом случае 4* с семейным номером может оказаться дешевле или примерно одинаково.' },
    { question: 'Анимация в 5* — это правда важна?', answer: 'Очень важна, если в семье дети 4-12 лет. Профессиональная анимация в 5* занимает ребёнка с утра до вечера, что даёт вам время на отдых. В 4* обычно анимация слабее или её вообще нет.' },
    { question: 'AI или UAI — в чём разница для семей с детьми?', answer: 'AI (All Inclusive) — базовое питание, местные напитки, ограниченный выбор. UAI (Ultra) — импортный алкоголь, кофе, мороженое, больше ресторанов. Для детей разница небольшая, но на отдыхе UAI явно комфортнее.' },
    { question: 'Какие туристические сезоны лучше для этой схемы?', answer: 'Май, июнь, сентябрь (межсезонье) — самые выгодные. В эти месяцы 4* и 5* имеют примерно одинаковые цены, а в 5* услуга лучше. Летом (июль-август) всё дороже, эффект меньше.' },
  ],
};

export default function TipPage({ params }: Props) {
  const article = articles.find(a => a.slug === params.slug && a.categorySlug === params.category);
  if (!article) notFound();
  const siteUrl = process.env.SITE_URL || 'https://2shezlonga.ru';
  const pageUrl = `${siteUrl}/blog/tips/${params.category}/${params.slug}`;
  const faqs = articleFaqs[params.slug] || [];
  const related = articles.filter(a => a.slug !== params.slug).slice(0, 3);
  const showBudgetCalc = params.slug.includes('budget') || params.slug.includes('phuket');
  const sectionCrumbs = articleBreadcrumbs[params.slug] ?? [];

  return (
    <>
      <JsonLd data={buildArticleSchema({
        title: article.title, description: article.excerpt,
        url: pageUrl, image: article.coverImage,
        datePublished: article.publishedAt, authorName: article.author,
      })} />
      {faqs.length > 0 && <JsonLd data={buildFaqSchema(faqs)} />}
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Главная', url: siteUrl },
        ...sectionCrumbs.map(c => ({ name: c.label, url: c.href ? `${siteUrl}${c.href}` : siteUrl })),
        { name: article.title, url: pageUrl },
      ])} />

      <Breadcrumbs items={[
        ...sectionCrumbs,
        { label: article.title },
      ]} />

      <article className="max-w-3xl">
        <div className="mb-6">
          <span className="badge mb-3 inline-block">{article.category}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><User size={14} />{article.author}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{article.readingTime} мин чтения</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </div>
        </div>

        <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
          <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">{article.excerpt}</p>

        <div className="prose prose-gray max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {showBudgetCalc && <BudgetCalculator />}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-6">
          {article.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
              <Tag size={11} />
              {tag}
            </span>
          ))}
        </div>

        {faqs.length > 0 && <FaqBlock items={faqs} title="Часто задаваемые вопросы" />}

        {/* Related articles */}
        {related.length > 0 && (
          <section className="border-t border-gray-200 pt-8 mt-8">
            <h2 className="text-xl font-bold mb-5">Похожие статьи</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(a => (
                <Link key={a.slug} href={`/blog/tips/${a.categorySlug}/${a.slug}`}
                  className="bg-white rounded-xl shadow-card card-hover overflow-hidden group">
                  <div className="relative h-32">
                    <Image src={a.coverImage} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="300px" />
                  </div>
                  <div className="p-3">
                    <span className="badge text-xs mb-1 inline-block">{a.category}</span>
                    <p className="font-medium text-sm text-gray-900 leading-snug">{a.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
