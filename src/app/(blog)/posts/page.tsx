import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/lib/data/articles';
import { destinations } from '@/lib/data/destinations';
import { FaqBlock } from '@/components/widgets/faq-block';
import { JsonLd, buildFaqSchema } from '@/components/seo/json-ld';
import { formatDate } from '@/lib/utils';
import { Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Блог о выездном туризме — обзоры, советы, сравнения отелей | Pro Туры',
  description: 'Актуальные обзоры курортов, сравнение отелей, лайфхаки для путешественников. Помогаем выбрать лучший отдых в Турции, Египте, Таиланде.',
};

const homeFaqs = [
  { question: 'Нужна ли виза в Турцию для россиян в 2026?', answer: 'Нет, гражданам России виза в Турцию не нужна для пребывания до 60 дней.' },
  { question: 'Когда лучший сезон для Египта?', answer: 'Оптимальный сезон для Египта — с октября по май, когда температура комфортные +25–30°C.' },
  { question: 'Что входит в питание Ultra All-Inclusive?', answer: 'UAI включает все приёмы пищи, снеки, алкогольные и безалкогольные напитки в течение всего дня и ночи.' },
  { question: 'Как выбрать отель all-inclusive?', answer: 'Обращайте внимание на рейтинг, качество пляжа, наличие детского клуба и расстояние от аэропорта.' },
];

export default function BlogHomePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(homeFaqs)} />

      {/* Hero */}


      {/* Popular destinations */}
      <section className="py-8 border-t border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Популярные курорты</h2>
          <Link href="/destinations" className="text-accent text-sm font-medium flex items-center gap-1 hover:underline">
            Все курорты <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.slice(0, 3).map(dest => (
            <Link key={dest.slug} href={`/destinations/${dest.countrySlug}/${dest.slug}`}
              className="bg-white rounded-2xl shadow-card card-hover overflow-hidden group">
              <div className="relative h-48">
                <Image src={dest.coverImage} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-white font-bold text-lg leading-tight">{dest.name}</div>
                  <div className="text-white/80 text-sm">{dest.country}</div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">{dest.rating}</span>
                  <span className="text-gray-400 text-xs">({dest.reviewCount})</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {dest.tags.slice(0, 2).map(t => <span key={t} className="badge text-xs">{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="py-8 border-t border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Последние статьи</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map(article => (
            <Link key={article.slug} href={`/tips/${article.categorySlug}/${article.slug}`}
              className="bg-white rounded-2xl shadow-card card-hover overflow-hidden flex flex-col group">
              <div className="relative h-44">
                <Image src={article.coverImage} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="400px" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="badge text-xs mb-2 self-start">{article.category}</span>
                <h3 className="font-semibold text-gray-900 leading-snug mb-2 flex-1">{article.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatDate(article.publishedAt)}</span>
                  <span>{article.readingTime} мин</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqBlock items={homeFaqs} title="Часто задаваемые вопросы" />
    </>
  );
}
