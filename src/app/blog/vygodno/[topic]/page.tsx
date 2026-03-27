import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getVygodnoTopic, vygodnoTopics } from '@/lib/data/blog-nav';
import { articles } from '@/lib/data/articles';
import { buildMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { Breadcrumbs } from '../../breadcrumbs';

interface Props { params: { topic: string } }

export function generateStaticParams() {
  return vygodnoTopics.map(t => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getVygodnoTopic(params.topic);
  if (!topic) return {};
  return buildMetadata({
    title: `${topic.name} — советы туристам 2026`,
    description: topic.description,
    path: `/blog/vygodno/${params.topic}`,
    keywords: [topic.name, 'туризм', 'советы', '2026'],
  });
}

export default function VygodnoTopicPage({ params }: Props) {
  const topic = getVygodnoTopic(params.topic);
  if (!topic) notFound();

  const topicArticles = articles.filter(a => topic.articleSlugs.includes(a.slug));

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Отдыхаем выгодно', href: '/blog/vygodno' },
        { label: topic.name },
      ]} />

      {/* Hero */}
      <div className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
        <p className="text-5xl mb-4">{topic.emoji}</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{topic.name}</h1>
        <p className="text-gray-600 text-lg max-w-2xl">{topic.description}</p>
      </div>

      {/* Articles */}
      {topicArticles.length > 0 ? (
        <section>
          <h2 className="text-xl font-bold mb-5">Статьи по теме</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topicArticles.map(article => (
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
          <p className="text-gray-600 font-medium mb-1">Статьи на тему «{topic.name}» скоро появятся</p>
          <p className="text-sm mb-6">Редакция работает над материалами — заходите позже</p>
          <Link href="/blog/vygodno" className="btn-accent inline-flex items-center gap-2">
            Другие темы <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {/* Other topics */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-base font-bold text-gray-700 mb-4">Другие темы</h2>
        <div className="flex flex-wrap gap-2">
          {vygodnoTopics.filter(t => t.slug !== params.topic).map(t => (
            <Link key={t.slug} href={`/blog/vygodno/${t.slug}`}
              className="flex items-center gap-1 bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-green-50 hover:text-green-700 transition-colors">
              {t.emoji} {t.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link href="/blog/vygodno" className="text-accent text-sm font-medium hover:underline">
          ← Отдыхаем выгодно
        </Link>
      </div>
    </>
  );
}
