"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const departures = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"];
const countries = ["Турция", "Египет", "ОАЭ", "Таиланд", "Россия"];

export function SearchBar() {
  const [departure, setDeparture] = useState("Москва");
  const [country, setCountry] = useState("Турция");
  const [nights, setNights] = useState("7-10");
  const [tourists, setTourists] = useState("2 взрослых");

  return (
    <div className="w-full rounded-3xl bg-white p-4 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200 md:p-5">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <div className="rounded-2xl border border-slate-200 p-3">
          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
            Откуда
          </div>
          <select
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
          >
            {departures.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 p-3">
          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
            Куда
          </div>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
          >
            {countries.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 p-3">
          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
            Даты / ночи
          </div>
          <input
            value={nights}
            onChange={(e) => setNights(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
            placeholder="7-10"
          />
        </div>

        <div className="rounded-2xl border border-slate-200 p-3">
          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
            Туристы
          </div>
          <input
            value={tourists}
            onChange={(e) => setTourists(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
            placeholder="2 взрослых"
          />
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-sky-600">
          <Search className="h-4 w-4" />
          Найти тур
        </button>
      </div>
    </div>
  );
}
