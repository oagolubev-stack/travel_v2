import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Plane, Sun, Check, X } from 'lucide-react';
import { getDestinationBySlug, getDestinationsByCountry } from '@/lib/data/destinations';
import { getHotelsByResort } from '@/lib/data/hotels';
import { HotelCard } from '@/components/widgets/hotel-card';
import { FaqBlock } from '@/components/widgets/faq-block';
import { JsonLd, buildPlaceSchema, buildFaqSchema, buildBreadcrumbSchema } from '@/components/seo/json-ld';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '../../../breadcrumbs';

interface Props { params: { country: string; resort: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dest = getDestinationBySlug(params.country, params.resort);
  if (!dest) return {};
  return buildMetadata({
    title: `${dest.name} — обзор курорта ${dest.country} 2026`,
    description: dest.description.slice(0, 155),
    path: `/blog/destinations/${params.country}/${params.resort}`,
    image: dest.coverImage,
    keywords: [dest.name, dest.country, 'курорт', 'отдых', '2026'],
  });
}

export default function ResortPage({ params }: Props) {
  const dest = getDestinationBySlug(params.country, params.resort);
  if (!dest) notFound();
  const hotels = getHotelsByResort(dest.slug);
  const related = getDestinationsByCountry(dest.countrySlug).filter(d => d.slug !== dest.slug);
  const siteUrl = process.env.SITE_URL || 'https://2shezlonga.ru';
  const pageUrl = `${siteUrl}/blog/destinations/${params.country}/${params.resort}`;

  const faqs = [
    { question: `Когда лучше ехать в ${dest.name}?`, answer: `Лучший сезон для ${dest.name}: ${dest.bestSeason}. ${dest.climate}` },
    { question: `Сколько лететь до ${dest.name} из Москвы?`, answer: `Перелёт из Москвы занимает ${dest.flightTime}.` },
    { question: `Какие пляжи в ${dest.name}?`, answer: dest.highlights.join(', ') + '.' },
  ];

  return (
    <>
      <JsonLd data={buildPlaceSchema({ name: dest.name, description: dest.description, url: pageUrl, image: dest.coverImage, ratingValue: dest.rating, reviewCount: dest.reviewCount, address: dest.country })} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Главная', url: siteUrl },
        { name: 'Курорты', url: `${siteUrl}/blog/destinations` },
        { name: dest.country, url: `${siteUrl}/blog/destinations/${params.country}` },
        { name: dest.name, url: pageUrl },
      ])} />

      <Breadcrumbs items={[
        { label: 'Куда поехать', href: '/blog/kuda' },
        { label: dest.country, href: `/blog/kuda/${dest.countrySlug === 'turkey' ? 'turtsiya' : dest.countrySlug === 'egypt' ? 'egipet' : dest.countrySlug === 'thailand' ? 'tailand' : dest.countrySlug}` },
        { label: dest.name },
      ]} />

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 mb-8">
        <Image src={dest.coverImage} alt={dest.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="badge bg-white/20 text-white border-0 mb-2">{dest.country}</div>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-2">{dest.name}</h1>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={14} className={s <= Math.round(dest.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'} />)}
              <span className="text-white font-semibold ml-1">{dest.rating}</span>
              <span className="text-white/70 text-sm">({dest.reviewCount} отзывов)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold mb-3">О курорте {dest.name}</h2>
            <p className="text-gray-700 leading-relaxed">{dest.description}</p>
          </section>

          {/* Quick facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: Sun, label: 'Климат', value: dest.climate.split('.')[0] },
              { icon: Clock, label: 'Лучший сезон', value: dest.bestSeason },
              { icon: Plane, label: 'Перелёт', value: dest.flightTime },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-card">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={15} className="text-accent" />
                  <span className="text-xs text-gray-500 font-medium">{label}</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <section>
            <h2 className="text-xl font-bold mb-3">Что посмотреть</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dest.highlights.map(h => (
                <li key={h} className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-4 py-2.5 shadow-sm">
                  <Check size={15} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-gray-700">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Suitable for */}
          <section>
            <h2 className="text-xl font-bold mb-3">Кому подходит</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { key: 'families', label: '👨‍👩‍👧 Семьи' },
                { key: 'couples', label: '💑 Пары' },
                { key: 'active', label: '🏄 Активные' },
                { key: 'budget', label: '💰 Бюджетники' },
              ].map(({ key, label }) => {
                const ok = dest.suitableFor[key as keyof typeof dest.suitableFor];
                return (
                  <div key={key} className={`rounded-xl border p-3 text-center text-sm font-medium ${ok ? 'bg-green-50 border-green-200 text-green-800' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
                    {label} {ok ? <Check size={13} className="inline" /> : <X size={13} className="inline" />}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Hotels */}
          {hotels.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Лучшие отели {dest.name}</h2>
                <Link href={`/blog/hotels/compare/${dest.slug}`} className="text-accent text-sm font-medium hover:underline">
                  Сравнить все →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hotels.slice(0, 4).map(h => <HotelCard key={h.id} hotel={h} />)}
              </div>
            </section>
          )}

          <FaqBlock items={faqs} title={`Вопросы о ${dest.name}`} />
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          <div className="bg-accent rounded-2xl p-5 text-white">
            <h3 className="font-bold text-lg mb-2">Подобрать тур в {dest.name}</h3>
            <p className="text-white/80 text-sm mb-4">Найдём лучшие цены от проверенных туроператоров</p>
            <Link href="https://2shezlonga.ru" className="block bg-white text-accent font-semibold text-center py-2.5 rounded-xl hover:bg-gray-100 transition-colors">
              Подобрать тур
            </Link>
          </div>
          {related.length > 0 && (
            <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-5">
              <h3 className="font-bold mb-3">Другие курорты {dest.country}</h3>
              <ul className="space-y-2">
                {related.map(r => (
                  <li key={r.slug}>
                    <Link href={`/blog/destinations/${r.countrySlug}/${r.slug}`}
                      className="flex items-center justify-between text-sm hover:text-accent transition-colors py-1">
                      <span>{r.name}</span>
                      <span className="text-gray-400">{r.bestSeason}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
