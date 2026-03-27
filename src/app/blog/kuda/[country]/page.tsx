import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { getKudaCountry, kudaCountries } from '@/lib/data/blog-nav';
import { articles } from '@/lib/data/articles';
import { destinations } from '@/lib/data/destinations';
import { buildMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { Breadcrumbs } from '../../breadcrumbs';

interface Props { params: { country: string } }

export function generateStaticParams() {
  return kudaCountries.map(c => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getKudaCountry(params.country);
  if (!country) return {};
  return buildMetadata({
    title: `${country.name} — обзор курортов и направлений 2026`,
    description: country.description,
    path: `/blog/kuda/${params.country}`,
    image: country.cover,
    keywords: [country.name, 'курорты', 'отдых', '2026', 'туры'],
  });
}

export default function KudaCountryPage({ params }: Props) {
  const country = getKudaCountry(params.country);
  if (!country) notFound();

  // Articles that belong to this country
  const countryArticles = articles.filter(a => country.articleSlugs.includes(a.slug));

  // Resort cards from destinations data (where slug matches country's resorts)
  const resortCards = country.resorts
    .map(r => destinations.find(d => d.slug === r.slug && d.countrySlug === r.countrySlug))
    .filter(Boolean) as typeof destinations;

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Куда поехать', href: '/blog/kuda' },
        { label: country.name },
      ]} />

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-8">
        <Image src={country.cover} alt={country.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <p className="text-4xl mb-2">{country.emoji}</p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">{country.name}</h1>
          <p className="text-white/80 mt-1 text-sm max-w-lg">{country.description}</p>
        </div>
      </div>

      {/* Resorts */}
      {resortCards.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-5">
            <MapPin size={18} className="inline text-accent mr-1" />
            Курорты {country.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resortCards.map(dest => (
              <Link key={dest.slug} href={`/blog/destinations/${dest.countrySlug}/${dest.slug}`}
                className="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44">
                  <Image src={dest.coverImage} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{dest.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{dest.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.tags.slice(0, 3).map(t => <span key={t} className="badge text-xs">{t}</span>)}
                  </div>
                </div>
              </Link>
            ))}
            {/* Resorts without destination pages yet */}
            {country.resorts
              .filter(r => !resortCards.find(d => d.slug === r.slug))
              .map(r => (
                <div key={r.slug} className="bg-white rounded-2xl shadow-card p-5 border border-dashed border-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin size={24} className="mx-auto mb-2" />
                    <p className="font-medium text-gray-700">{r.name}</p>
                    <p className="text-xs mt-1">Обзор скоро</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* No resort data yet - show resort list as links */}
      {country.resorts.length > 0 && resortCards.length === 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Курорты {country.name}</h2>
          <div className="flex flex-wrap gap-2">
            {country.resorts.map(r => (
              <span key={r.slug} className="badge text-sm">{r.name}</span>
            ))}
          </div>
        </section>
      )}

      {/* Articles */}
      {countryArticles.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-5">Статьи про {country.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countryArticles.map(article => (
              <Link key={article.slug} href={`/blog/tips/${article.categorySlug}/${article.slug}`}
                className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="relative h-40">
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
      )}

      {/* CTA */}
      {countryArticles.length === 0 && resortCards.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-4">{country.emoji}</p>
          <h2 className="text-xl font-bold text-gray-700 mb-2">{country.name}</h2>
          <p className="mb-6">Обзоры и статьи по этому направлению скоро появятся</p>
          <Link href="/blog/kuda" className="btn-accent inline-flex items-center gap-2">
            Другие направления <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {/* Back */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link href="/blog/kuda" className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
          ← Все направления
        </Link>
      </div>
    </>
  );
}
