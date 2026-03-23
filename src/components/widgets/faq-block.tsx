'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqBlockProps {
  items: FaqItem[];
  title?: string;
}

export function FaqBlock({ items, title = 'Частые вопросы' }: FaqBlockProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="my-10">
      <h2 className="section-title mb-6">{title}</h2>
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white overflow-hidden shadow-card">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={open === i}
            >
              <span className="font-medium text-gray-900 pr-4">{item.question}</span>
              <ChevronDown
                size={18}
                className={cn('flex-shrink-0 text-gray-500 transition-transform duration-200', open === i && 'rotate-180')}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
