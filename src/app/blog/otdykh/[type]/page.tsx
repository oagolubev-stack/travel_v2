import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getOtdykhType, otdykhTypes } from '@/lib/data/blog-nav';
import { articles } from '@/lib/data/articles';
import { buildMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { Breadcrumbs } from '../../breadcrumbs';

interface Props { params: { type: string } }

export function generateStaticParams() {
  return otdykhTypes.map(t => ({ type: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = getOtdykhType(params.type);
  if (!type) return {};
  return buildMetadata({
    title: `${type.name} — куда поехать и лучшие отели 2026`,
    description: type.description,
    path: `/blog/otdykh/${params.type}`,
    keywords: [type.name, 'отдых', 'туры', '2026'],
  });
}

export default function OtdykhTypePage({ params }: Props) {
  const type = getOtdykhType(params.type);
  if (!type) notFound();

  const typeArticles = articles.filter(a => type.articleSlugs.includes(a.slug));

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Выбери отдых', href: '/blog/otdykh' },
        { label: type.name },
      ]} />

      {/* Hero */}
      <div className="mb-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8">
        <p className="text-5xl mb-4">{type.emoji}</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{type.name}</h1>
        <p className="text-gray-600 text-lg max-w-2xl">{type.description}</p>
      </div>

      {/* Articles */}
      {typeArticles.length > 0 ? (
        <section>
          <h2 className="text-xl font-bold mb-5">Статьи по теме</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {typeArticles.map(article => (
              <Link key={article.slug} href={`/blog/tips/${article.categorySlug}/${article.slug}`}
                className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="relative h-44">
                  <Image src={article.coverImage} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="300px" />
                </div>
                <div className="p-4">
                  <span className="badge text-xs mb-2 inline-block">{article.category}</span>
                  <h3 className="font-semibold text-gray-900 leading-snug mb-2">{article.title}</h3>
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
      ) : (
        <div className="text-center py-14 text-gray-400">
          <p className="text-3xl mb-3">✍️</p>
          <p className="text-gray-600 font-medium mb-1">Статьи по теме «{type.name}» скоро появятся</p>
          <p className="text-sm mb-6">Редакция работает над материалами — заходите позже</p>
          <Link href="/blog/otdykh" className="btn-accent inline-flex items-center gap-2">
            Другие типы отдыха <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {/* Other types */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-base font-bold text-gray-700 mb-4">Другие типы отдыха</h2>
        <div className="flex flex-wrap gap-2">
          {otdykhTypes.filter(t => t.slug !== params.type).map(t => (
            <Link key={t.slug} href={`/blog/otdykh/${t.slug}`}
              className="flex items-center gap-1 bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-accent/10 hover:text-accent transition-colors">
              {t.emoji} {t.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link href="/blog/otdykh" className="text-accent text-sm font-medium hover:underline">
          ← Все типы отдыха
        </Link>
      </div>
    </>
  );
}
