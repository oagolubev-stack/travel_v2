import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { otdykhTypes } from '@/lib/data/blog-nav';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '../breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Выбери отдых — типы путешествий 2026',
  description: 'С детьми, влюблённым, активный, пляжный, бюджетный — найдите идеальный формат отдыха и лучшие направления.',
  path: '/blog/otdykh',
  keywords: ['типы отдыха', 'с детьми', 'семейный отдых', 'пляжный отдых', 'активный туризм'],
});

export default function OtdykhPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Выбери отдых' }]} />

      <div className="mb-8">
        <h1 className="section-title mb-2">Выбери отдых</h1>
        <p className="text-gray-500">Подберите идеальный формат — найдём лучшие курорты и советы именно для вас</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {otdykhTypes.map(type => {
          const count = type.articleSlugs.length;
          return (
            <Link key={type.slug} href={`/blog/otdykh/${type.slug}`}
              className="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative h-32">
                <Image
                  src={type.cover}
                  alt={type.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-bold text-sm leading-tight">{type.name}</p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-xs line-clamp-2">{type.description}</p>
                {count > 0 && (
                  <p className="mt-2 text-xs text-accent font-medium">{count} {count === 1 ? 'статья' : count < 5 ? 'статьи' : 'статей'}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
