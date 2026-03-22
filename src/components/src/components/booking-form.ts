"use client"

export interface BookingFormProps {
  tourId: string
}

export function BookingForm({ tourId }: BookingFormProps) {
  return (
    <div className="p-8 border rounded-xl bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Бронирование тура #{tourId}</h2>
      <p className="text-gray-500 mb-6">Заполните форму для подбора тура</p>
      {/* Заглушка формы */}
      <div className="space-y-4">
        <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Имя" />
        <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Email" />
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Отправить заявку
        </button>
      </div>
    </div>
  )
}
