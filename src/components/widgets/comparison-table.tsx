'use client';
import { useState, useMemo } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel,
  flexRender, createColumnHelper, type SortingState } from '@tanstack/react-table';
import { Star, ChevronUp, ChevronDown, Check, X } from 'lucide-react';
import Image from 'next/image';
import type { Hotel } from '@/lib/data/hotels';

const col = createColumnHelper<Hotel>();

const MEAL_LABELS: Record<string, string> = {
  UAI: 'Ultra AI', AI: 'All Inc.', HB: 'Полупансион', BB: 'Завтраки', RO: 'Без питания',
};

interface ComparisonTableProps {
  hotels: Hotel[];
}

export function ComparisonTable({ hotels }: ComparisonTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [stars, setStars] = useState<number | null>(null);
  const [meal, setMeal] = useState<string>('');
  const [kidsOnly, setKidsOnly] = useState(false);

  const filtered = useMemo(() => hotels.filter(h => {
    if (stars && h.stars !== stars) return false;
    if (meal && h.mealPlan !== meal) return false;
    if (kidsOnly && !h.hasKidsClub) return false;
    return true;
  }), [hotels, stars, meal, kidsOnly]);

  const columns = useMemo(() => [
    col.accessor('name', {
      header: 'Отель',
      cell: info => (
        <div className="flex items-center gap-3 min-w-[180px]">
          <div className="relative w-14 h-10 rounded-lg overflow-hidden flex-shrink-0">
            <Image src={info.row.original.image} alt={info.getValue()} fill className="object-cover" sizes="56px" />
          </div>
          <div>
            <div className="font-medium text-sm leading-tight">{info.getValue()}</div>
            <div className="flex">
              {Array.from({ length: info.row.original.stars }, (_, i) => (
                <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      ),
    }),
    col.accessor('mealPlan', {
      header: 'Питание',
      cell: info => <span className="badge">{MEAL_LABELS[info.getValue()] || info.getValue()}</span>,
    }),
    col.accessor('distanceToSea', {
      header: 'До моря',
      cell: info => info.getValue() === 0 ? '1-я линия' : `${info.getValue()} м`,
    }),
    col.accessor('hasKidsClub', {
      header: 'Дет. клуб',
      cell: info => info.getValue() ? <Check size={16} className="text-green-500 mx-auto" /> : <X size={16} className="text-gray-300 mx-auto" />,
    }),
    col.accessor('rating', {
      header: 'Рейтинг',
      cell: info => (
        <div className="flex items-center gap-1">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-sm">{info.getValue()}</span>
          <span className="text-gray-400 text-xs">({info.row.original.reviewCount})</span>
        </div>
      ),
    }),
    col.accessor('pricePerNight', {
      header: 'Цена/ночь',
      cell: info => (
        <span className="font-bold text-accent whitespace-nowrap">
          {info.getValue().toLocaleString('ru-RU')} ₽
        </span>
      ),
    }),
  ], []);

  const table = useReactTable({
    data: filtered,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Звёзды:</label>
          <select value={stars ?? ''} onChange={e => setStars(e.target.value ? Number(e.target.value) : null)}
            className="text-sm border border-gray-300 rounded-lg px-2 py-1 bg-white">
            <option value="">Все</option>
            <option value="3">3★</option>
            <option value="4">4★</option>
            <option value="5">5★</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Питание:</label>
          <select value={meal} onChange={e => setMeal(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-2 py-1 bg-white">
            <option value="">Все</option>
            <option value="UAI">Ultra AI</option>
            <option value="AI">All Inclusive</option>
            <option value="HB">Полупансион</option>
            <option value="BB">Завтраки</option>
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
          <input type="checkbox" checked={kidsOnly} onChange={e => setKidsOnly(e.target.checked)}
            className="rounded" />
          Только с дет. клубом
        </label>
      </div>

      {/* Table — desktop */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-card">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(h => (
                  <th key={h.id}
                    onClick={h.column.getToggleSortingHandler()}
                    className="px-4 py-3 text-left font-semibold text-gray-600 cursor-pointer hover:text-accent select-none whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      {flexRender(h.column.columnDef.header, h.getContext())}
                      {h.column.getIsSorted() === 'asc' && <ChevronUp size={13} />}
                      {h.column.getIsSorted() === 'desc' && <ChevronDown size={13} />}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-blue-50/40 transition-colors">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-10 text-gray-400">Нет отелей по выбранным фильтрам</div>
        )}
      </div>

      {/* Cards — mobile */}
      <div className="md:hidden space-y-3">
        {filtered.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-card flex gap-3">
            <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={hotel.image} alt={hotel.name} fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">{hotel.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">
                {Array.from({ length: hotel.stars }, () => '★').join('')} · {MEAL_LABELS[hotel.mealPlan]}
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{hotel.rating}</span>
                </div>
                <span className="font-bold text-accent text-sm">{hotel.pricePerNight.toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
