import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getHotelsByResort } from '@/lib/data/hotels';
import { destinations } from '@/lib/data/destinations';
import { ComparisonTable } from '@/components/widgets/comparison-table';
import { Poll } from '@/components/widgets/poll';
import { FaqBlock } from '@/components/widgets/faq-block';
import { JsonLd, buildHotelListSchema, buildBreadcrumbSchema } from '@/components/seo/json-ld';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '../../../layout';

interface Props { params: { resort: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dest = destinations.find(d => d.slug === params.resort);
  if (!dest) return {};
  return buildMetadata({
    title: `Сравнение отелей ${dest.name} 2026 — рейтинг и цены`,
    description: `Сравните ${getHotelsByResort(dest.slug).length} отелей ${dest.name}: рейтинги, питание, расстояние до моря, цены. Выберите лучший вариант.`,
    path: `/hotels/compare/${params.resort}`,
    keywords: [dest.name, 'отели', 'сравнение', 'рейтинг', '2026'],
  });
}

export default function HotelComparePage({ params }: Props) {
  const dest = destinations.find(d => d.slug === params.resort);
  if (!dest) notFound();
  const hotels = getHotelsByResort(params.resort);
  const siteUrl = process.env.SITE_URL || 'https://pro-tury.ru';

  const faqs = [
    { question: `Какой лучший отель в ${dest.name}?`, answer: `По рейтингу гостей лидирует ${hotels.sort((a, b) => b.rating - a.rating)[0]?.name} с оценкой ${hotels[0]?.rating}.` },
    { question: 'Что лучше: AI или UAI?', answer: 'Ultra All-Inclusive (UAI) включает алкоголь и снеки ночью, обычный AI ограничен по времени. Для активных отдыхающих выгоднее UAI.' },
    { question: 'Как выбрать питание?', answer: 'Если планируете экскурсии — достаточно BB (завтраки). Для пляжного отдыха без лишних трат лучше AI или UAI.' },
  ];

  return (
    <>
      <JsonLd data={buildHotelListSchema(hotels.map(h => ({
        name: h.name, url: `${siteUrl}/hotels/compare/${params.resort}`,
        image: h.image, rating: h.rating, reviewCount: h.reviewCount,
      })))} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Главная', url: siteUrl },
        { name: dest.name, url: `${siteUrl}/destinations/${dest.countrySlug}/${dest.slug}` },
        { name: `Сравнение отелей ${dest.name}`, url: `${siteUrl}/hotels/compare/${params.resort}` },
      ])} />

      <Breadcrumbs items={[
        { label: 'Курорты', href: '/destinations' },
        { label: dest.name, href: `/destinations/${dest.countrySlug}/${dest.slug}` },
        { label: 'Сравнение отелей' },
      ]} />

      <div className="mb-8">
        <h1 className="section-title mb-2">Сравнение отелей {dest.name} 2026</h1>
        <p className="text-gray-600">
          {hotels.length} отелей · сортировка и фильтры · актуальные цены
        </p>
      </div>

      <ComparisonTable hotels={hotels} />

      <Poll
        id={`best-hotel-${params.resort}`}
        question={`Какой отель ${dest.name} вы бы выбрали?`}
        options={hotels.slice(0, 4).map(h => ({ id: h.id, label: h.name }))}
      />

      <div className="mt-8 p-5 bg-gray-50 rounded-2xl border border-gray-200">
        <h3 className="font-bold mb-3">Полезные ссылки</h3>
        <div className="flex flex-wrap gap-3">
          <Link href={`/destinations/${dest.countrySlug}/${dest.slug}`} className="text-accent text-sm hover:underline">
            ← Обзор курорта {dest.name}
          </Link>
          <Link href="/tips/general/egypt-tips-2026" className="text-accent text-sm hover:underline">
            Лайфхаки для отдыха →
          </Link>
        </div>
      </div>

      <FaqBlock items={faqs} title="Вопросы об отелях" />
    </>
  );
}
