'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormValues {
  nights: number;
  people: number;
  hotelPerNight: number;
  mealsPerDay: number;
  excursions: number;
  flight: number;
}

export function BudgetCalculator() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: { nights: 7, people: 2, hotelPerNight: 12000, mealsPerDay: 2000, excursions: 5000, flight: 30000 },
  });
  const [result, setResult] = useState<number | null>(null);

  function calculate(data: FormValues) {
    const total = data.flight * data.people
      + data.hotelPerNight * data.nights
      + data.mealsPerDay * data.nights * data.people
      + data.excursions;
    setResult(total);
  }

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 my-8">
      <h3 className="font-bold text-gray-900 text-lg mb-1">Калькулятор бюджета</h3>
      <p className="text-gray-500 text-sm mb-5">Рассчитайте приблизительную стоимость поездки</p>
      <form onSubmit={handleSubmit(calculate)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { name: 'nights', label: 'Ночей', min: 1, max: 30 },
          { name: 'people', label: 'Человек', min: 1, max: 10 },
          { name: 'hotelPerNight', label: 'Отель ₽/ночь', min: 0, max: 1000000 },
          { name: 'mealsPerDay', label: 'Питание ₽/день/чел.', min: 0, max: 50000 },
          { name: 'excursions', label: 'Экскурсии ₽ (всего)', min: 0, max: 500000 },
          { name: 'flight', label: 'Перелёт ₽/чел. (туда-обратно)', min: 0, max: 500000 },
        ].map(f => (
          <div key={f.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
            <input
              type="number"
              {...register(f.name as keyof FormValues, { required: true, min: f.min, max: f.max, valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <button type="submit" className="btn-accent w-full">Рассчитать</button>
        </div>
      </form>
      {result !== null && (
        <div className="mt-5 p-4 bg-accent-light rounded-xl text-center">
          <p className="text-sm text-gray-600">Примерный бюджет поездки:</p>
          <p className="text-3xl font-bold text-accent mt-1">{result.toLocaleString('ru-RU')} ₽</p>
          <p className="text-xs text-gray-400 mt-1">* Без учёта непредвиденных расходов и страховки</p>
        </div>
      )}
    </div>
  );
}
