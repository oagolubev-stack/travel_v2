import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { kudaCountries } from '@/lib/data/blog-nav';
import { Breadcrumbs } from '../breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Куда поехать — все направления 2026',
  description: 'Обзоры всех популярных направлений: Турция, Египет, Таиланд, ОАЭ, Бали и другие. Курорты, сезоны, советы туристам.',
  path: '/blog/kuda',
  keywords: ['куда поехать', 'направления', 'курорты', 'зарубежный отдых', '2026'],
});

export default function KudaPage() {
  const popular = kudaCountries.filter(c => c.popular && !c.isRussia);
  const russia = kudaCountries.filter(c => c.isRussia);
  const others = kudaCountries.filter(c => !c.popular && !c.isRussia);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Куда поехать' }]} />

      <div className="mb-8">
        <h1 className="section-title mb-2">Куда поехать</h1>
        <p className="text-gray-500">Обзоры курортов и направлений — выберите страну и узнайте всё об отдыхе</p>
      </div>

      {/* Popular */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-5">🔥 Популярные направления</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {popular.map(country => (
            <Link key={country.slug} href={`/blog/kuda/${country.slug}`}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-44">
                <Image src={country.cover} alt={country.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-2xl leading-none mb-1">{country.emoji}</p>
                  <h3 className="text-white font-bold text-lg leading-tight">{country.name}</h3>
                </div>
              </div>
              <div className="bg-white p-3">
                <p className="text-gray-500 text-xs line-clamp-2">{country.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Russia */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-5">🇷🇺 Отдых в России</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {russia.map(country => (
            <Link key={country.slug} href={`/blog/kuda/${country.slug}`}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-36">
                <Image src={country.cover} alt={country.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold">{country.emoji} {country.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Others */}
      <section>
        <h2 className="text-xl font-bold mb-5">🌏 Все направления</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {others.map(country => (
            <Link key={country.slug} href={`/blog/kuda/${country.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:border-accent hover:shadow-sm transition-all group">
              <p className="text-2xl mb-1">{country.emoji}</p>
              <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors text-sm">{country.name}</h3>
              <p className="text-gray-400 text-xs mt-1 line-clamp-1">{country.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
