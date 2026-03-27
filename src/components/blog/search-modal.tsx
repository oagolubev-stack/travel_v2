'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import { destinations } from '@/lib/data/destinations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  const filteredArticles = searchQuery.trim()
    ? articles.filter(a =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : [];

  const filteredDestinations = searchQuery.trim()
    ? destinations.filter(d =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.country.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : [];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white shadow-lg">
        {/* Search input */}
        <div className="flex items-center border-b border-gray-200 px-5 py-4">
          <Search size={20} className="text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Поиск курортов, статей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-3 flex-1 border-0 outline-none text-gray-900 placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() && (filteredArticles.length > 0 || filteredDestinations.length > 0) ? (
            <>
              {filteredDestinations.length > 0 && (
                <div className="border-b border-gray-100">
                  <div className="px-5 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                    КУРОРТЫ
                  </div>
                  {filteredDestinations.map(dest => (
                    <Link
                      key={dest.slug}
                      href={`/blog/destinations/${dest.countrySlug}/${dest.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <Search size={16} className="text-gray-400 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{dest.name}</div>
                        <div className="text-xs text-gray-500">{dest.country}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {filteredArticles.length > 0 && (
                <div>
                  <div className="px-5 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                    СТАТЬИ
                  </div>
                  {filteredArticles.map(article => (
                    <Link
                      key={article.slug}
                      href={`/blog/tips/${article.categorySlug}/${article.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <Search size={16} className="text-gray-400 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{article.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-1">{article.excerpt}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : searchQuery.trim() ? (
            <div className="px-5 py-8 text-center text-gray-500">
              Ничего не найдено
            </div>
          ) : (
            <div className="px-5 py-8 text-center text-gray-400 text-sm">
              Начните вводить для поиска курортов и статей
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between text-xs text-gray-500 bg-gray-50">
          <div className="flex gap-3">
            <span><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">ESC</kbd> Закрыть</span>
          </div>
        </div>
      </div>
    </>
  );
}
