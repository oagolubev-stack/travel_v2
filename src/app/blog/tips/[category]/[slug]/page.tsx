import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';
import { FaqBlock } from '@/components/widgets/faq-block';
import { BudgetCalculator } from '@/components/widgets/budget-calculator';
import { JsonLd, buildArticleSchema, buildFaqSchema, buildBreadcrumbSchema } from '@/components/seo/json-ld';
import { buildMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { Clock, User, Tag } from 'lucide-react';
import { Breadcrumbs } from '../../../layout';

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
};

export default function TipPage({ params }: Props) {
  const article = articles.find(a => a.slug === params.slug && a.categorySlug === params.category);
  if (!article) notFound();
  const siteUrl = process.env.SITE_URL || 'https://2shezlonga.ru';
  const pageUrl = `${siteUrl}/blog/tips/${params.category}/${params.slug}`;
  const faqs = articleFaqs[params.slug] || [];
  const related = articles.filter(a => a.slug !== params.slug).slice(0, 3);
  const showBudgetCalc = params.slug.includes('budget') || params.slug.includes('phuket');

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
        { name: article.category, url: `${siteUrl}/blog/tips/${params.category}` },
        { name: article.title, url: pageUrl },
      ])} />

      <Breadcrumbs items={[
        { label: 'Статьи' },
        { label: article.category },
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
