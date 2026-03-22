"use client"

import { BookingFormProps } from "@/types/booking" // если есть типы

export function BookingForm({ tourId }: BookingFormProps) {
  return (
    <div className="p-8 border rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Бронирование тура #{tourId}</h2>
      <p className="text-gray-500">Форма бронирования (заглушка)</p>
      {/* Здесь будет реальная форма */}
    </div>
  )
}
