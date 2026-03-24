import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/lib/data/destinations';
import { Star } from 'lucide-react';
import { Breadcrumbs } from '../layout';

export const metadata: Metadata = {
  title: 'Все курорты — обзоры направлений',
  description: 'Обзоры популярных зарубежных курортов: Турция, Египет, Таиланд и другие.',
};

export default function DestinationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Курорты' }]} />
      <h1 className="section-title mb-2">Курорты и направления</h1>
      <p className="text-gray-500 mb-8">Подробные обзоры популярных зарубежных курортов</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(dest => (
          <Link key={dest.slug} href={`/destinations/${dest.countrySlug}/${dest.slug}`}
            className="bg-white rounded-2xl shadow-card card-hover overflow-hidden group">
            <div className="relative h-52">
              <Image src={dest.coverImage} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="400px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-sm">{dest.country}</p>
                <h2 className="text-white font-bold text-xl">{dest.name}</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">{dest.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">{dest.rating}</span>
                  <span className="text-gray-400 text-xs">({dest.reviewCount})</span>
                </div>
                <span className="text-xs text-gray-400">Сезон: {dest.bestSeason}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
