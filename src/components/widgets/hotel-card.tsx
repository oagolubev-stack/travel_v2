import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Utensils } from 'lucide-react';
import type { Hotel } from '@/lib/data/hotels';
import { cn } from '@/lib/utils';

const MEAL_LABELS: Record<Hotel['mealPlan'], string> = {
  UAI: 'Ultra All-In',
  AI: 'All Inclusive',
  HB: 'Полупансион',
  BB: 'Завтраки',
  RO: 'Без питания',
};

interface HotelCardProps {
  hotel: Hotel;
  className?: string;
}

export function HotelCard({ hotel, className }: HotelCardProps) {
  return (
    <div className={cn('bg-white rounded-2xl shadow-card card-hover overflow-hidden flex flex-col', className)}>
      <div className="relative h-48 w-full">
        <Image src={hotel.image} alt={hotel.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
        <div className="absolute top-3 left-3">
          <span className="badge">{Array.from({ length: hotel.stars }, () => '★').join('')}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-gray-900 leading-tight">{hotel.name}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={13} />
          <span>{hotel.beach}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Utensils size={13} />
          <span>{MEAL_LABELS[hotel.mealPlan]}</span>
        </div>
        <div className="flex items-center gap-1 mt-auto">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-sm">{hotel.rating}</span>
          <span className="text-gray-400 text-xs">({hotel.reviewCount} отзывов)</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-xs text-gray-400">от</span>
            <span className="font-bold text-accent ml-1">
              {hotel.pricePerNight.toLocaleString('ru-RU')} ₽
            </span>
            <span className="text-xs text-gray-400">/ночь</span>
          </div>
          <Link href={`/hotels/compare/${hotel.resortSlug}`}
            className="text-xs text-accent font-medium hover:underline">
            Подробнее →
          </Link>
        </div>
      </div>
    </div>
  );
}
