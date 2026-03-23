'use client';
import { useState } from 'react';

export function TipCalculator() {
  const [bill, setBill] = useState(100);
  const [pct, setPct] = useState(10);
  const tip = (bill * pct / 100).toFixed(2);
  const total = (bill * (1 + pct / 100)).toFixed(2);

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 my-8 max-w-sm">
      <h3 className="font-bold text-gray-900 text-lg mb-4">Калькулятор чаевых</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Сумма счёта ($)</label>
          <input type="number" value={bill} min={0} onChange={e => setBill(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Процент чаевых: <strong>{pct}%</strong></label>
          <input type="range" min={5} max={30} step={5} value={pct} onChange={e => setPct(Number(e.target.value))}
            className="w-full accent-[#0064d2]" />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            {[5, 10, 15, 20, 25, 30].map(v => <span key={v}>{v}%</span>)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <div className="text-xs text-gray-500">Чаевые</div>
            <div className="text-xl font-bold text-accent">${tip}</div>
          </div>
          <div className="bg-accent-light rounded-xl p-3 text-center">
            <div className="text-xs text-gray-500">Итого</div>
            <div className="text-xl font-bold text-accent">${total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
