"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Globe, Search } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = pathname.startsWith('/blog') 
    ? [
        { label: "Курорты", href: "/blog/destinations" },
        { label: "Сравнение отелей", href: "/blog/hotels/compare/kemer" },
        { label: "Лайфхаки", href: "/blog/tips/general/egypt-tips-2026" },
        { label: "Статьи", href: "/blog" },
      ]
    : [
        { label: "Всё включено", href: "/all-inclusive" },
        { label: "Раннее бронирование", href: "/early-booking" },
        { label: "Стиль отдыха", href: "/rest-types" },
      ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-accent"
        >
          <Globe size={22} />
          <span>Pro Туры</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            className="rounded-lg p-2 transition-colors hover:bg-muted"
            aria-label="Поиск"
          >
            <Search size={18} className="text-muted-foreground" />
          </button>
          <Link href="https://pro-tury.ru" className="btn-accent text-sm">
            Подобрать тур
          </Link>
        </div>

        <button
          className="p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3 border-t border-border bg-white px-4 py-4 md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-1 text-sm font-medium text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://pro-tury.ru"
            className="btn-accent mt-2 text-center text-sm"
            onClick={() => setOpen(false)}
          >
            Подобрать тур
          </Link>
        </div>
      )}
    </header>
  );
}
