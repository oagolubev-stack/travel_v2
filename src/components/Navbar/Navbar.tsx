"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import NavDropdown from "@/components/Navbar/NavDropdown";
import { destinations, travelStyles, proTours } from "@/components/Navbar/navConfig";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* h-14 ~= 56px */}

          {/* Логотип — позже заменим на реальную картинку 275x48 */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">
              ✈ TravelV2
            </span>
          </Link>

          {/* Десктоп меню */}
          <div className="hidden md:flex items-center gap-4">
            <NavDropdown label="Всё включено" items={destinations} />
            <NavDropdown label="Раннее бронирование" items={destinations} />
            <NavDropdown label="Стиль отдыха" items={travelStyles} />
            <NavDropdown label="PROтуры" items={proTours} />
            <Link
              href="/contacts"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </Link>
          </div>

          {/* Телефон + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+78001234567"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone size={15} />
              8-800-123-45-67
            </a>
            <Link
              href="/search"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              Найти тур
            </Link>
          </div>

          {/* Бургер */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Открыть меню"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {[
            { label: "Всё включено", items: destinations },
            { label: "Раннее бронирование", items: destinations },
          ].map(({ label, items }) => (
            <details key={label} className="group">
              <summary className="flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 cursor-pointer list-none">
                {label}
                <span className="transition-transform group-open:rotate-180">▾</span>
              </summary>
              <div className="pl-4 pb-2 space-y-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          <details className="group">
            <summary className="flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 cursor-pointer list-none">
              Стиль отдыха
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="pl-4 pb-2 space-y-1">
              {travelStyles.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-blue-600"
                >
                  {item.icon} {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 cursor-pointer list-none">
              PROтуры
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="pl-4 pb-2 space-y-1">
              {proTours.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1.5 text-sm text-gray-600 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/contacts"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Контакты
          </Link>

          <Link
            href="/search"
            className="block w-full text-center mt-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
          >
            Найти тур
          </Link>
        </div>
      )}
    </nav>
  );
}
