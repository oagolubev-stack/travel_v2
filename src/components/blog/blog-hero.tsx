'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import { destinations } from '@/lib/data/destinations';

export function BlogHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredArticles = searchQuery.trim()
    ? articles.filter(a =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  const filteredDestinations = searchQuery.trim()
    ? destinations.filter(d =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000" />

      <div className="relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Блог</span>
            <span className="w-px h-4 bg-gray-300" />
            <div className="badge">Лучшие советы туристам</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent leading-tight mb-4">
            Идеальный отдых <br className="hidden sm:block" /> начинается с выбора
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Рейтинги курортов, сравнение отелей, лайфхаки и честные отзывы. Помогаем найти лучший отдых, который запомнится.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Поиск курортов, статей..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(e.target.value.trim().length > 0);
                }}
                onFocus={() => setShowResults(searchQuery.trim().length > 0)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Search results dropdown */}
            {showResults && (filteredArticles.length > 0 || filteredDestinations.length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-96 overflow-y-auto">
                {filteredDestinations.length > 0 && (
                  <div className="border-b border-gray-100">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-50">
                      Курорты ({filteredDestinations.length})
                    </div>
                    {filteredDestinations.map(dest => (
                      <Link
                        key={dest.slug}
                        href={`/blog/destinations/${dest.countrySlug}/${dest.slug}`}
                        onClick={() => {
                          setSearchQuery('');
                          setShowResults(false);
                        }}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <div className="font-medium text-gray-900">{dest.name}</div>
                        <div className="text-sm text-gray-500">{dest.country}</div>
                      </Link>
                    ))}
                  </div>
                )}
                {filteredArticles.length > 0 && (
                  <div>
                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-50">
                      Статьи ({filteredArticles.length})
                    </div>
                    {filteredArticles.map(article => (
                      <Link
                        key={article.slug}
                        href={`/blog/tips/${article.categorySlug}/${article.slug}`}
                        onClick={() => {
                          setSearchQuery('');
                          setShowResults(false);
                        }}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <div className="font-medium text-gray-900">{article.title}</div>
                        <div className="text-sm text-gray-500 line-clamp-1">{article.excerpt}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {showResults && searchQuery.trim() && filteredArticles.length === 0 && filteredDestinations.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20 p-4">
                <p className="text-gray-500 text-center">Ничего не найдено</p>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/blog/destinations" className="btn-accent">
              Все курорты
            </Link>
            <Link href="/blog/hotels/compare/kemer" className="border border-accent text-accent font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-light transition-colors">
              Сравнить отели
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
