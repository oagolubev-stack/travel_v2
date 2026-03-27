import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { vygodnoTopics } from '@/lib/data/blog-nav';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '../breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Отдыхаем выгодно — советы и лайфхаки 2026',
  description: 'Горящие туры, раннее бронирование, лайфхаки туриста, визы — всё чтобы отдохнуть лучше и дешевле.',
  path: '/blog/vygodno',
  keywords: ['горящие туры', 'раннее бронирование', 'лайфхаки', 'виза', 'сэкономить на туре'],
});

export default function VygodnoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Отдыхаем выгодно' }]} />

      <div className="mb-8">
        <h1 className="section-title mb-2">Отдыхаем выгодно</h1>
        <p className="text-gray-500">Советы, лайфхаки и инструкции — как отдохнуть лучше и потратить меньше</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {vygodnoTopics.map(topic => {
          const count = topic.articleSlugs.length;
          return (
            <Link key={topic.slug} href={`/blog/vygodno/${topic.slug}`}
              className="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative h-36">
                <Image
                  src={topic.cover}
                  alt={topic.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-bold text-sm leading-tight">{topic.name}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm line-clamp-2">{topic.description}</p>
                {count > 0 && (
                  <p className="mt-3 text-xs text-accent font-medium">{count} {count === 1 ? 'статья' : count < 5 ? 'статьи' : 'статей'}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
