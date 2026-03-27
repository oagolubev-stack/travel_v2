import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/lib/data/destinations';
import { Star, Droplet, Thermometer } from 'lucide-react';
import { Breadcrumbs } from '../breadcrumbs';

export const metadata: Metadata = {
  title: 'Все курорты — обзоры направлений',
  description: 'Обзоры популярных зарубежных курортов: Турция, Египет, Таиланд и другие.',
};

export default function DestinationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Куда поехать', href: '/blog/kuda' }, { label: 'Курорты' }]} />
      <h1 className="section-title mb-2">Курорты и направления</h1>
      <p className="text-gray-500 mb-8">Подробные обзоры популярных зарубежных курортов</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(dest => (
          <Link key={dest.slug} href={`/blog/destinations/${dest.countrySlug}/${dest.slug}`}
            className="relative bg-white rounded-2xl shadow-card overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-56">
              <Image src={dest.coverImage} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="400px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Season badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 bg-white/95 text-accent font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Thermometer size={12} />
                  {dest.bestSeason}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-white/90 text-sm flex items-center gap-1 mb-1">
                  <Droplet size={14} /> {dest.country}
                </div>
                <h2 className="text-white font-bold text-2xl leading-tight">{dest.name}</h2>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-b from-white to-gray-50">
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">{dest.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-yellow-50 px-2.5 py-1.5 rounded-lg">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm text-gray-900">{dest.rating}</span>
                    <span className="text-gray-500 text-xs">({dest.reviewCount})</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Thermometer size={12} />
                  {dest.climate}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
