"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { SearchModal } from "@/components/blog/search-modal";
import { kudaCountries, otdykhTypes, vygodnoTopics } from "@/lib/data/blog-nav";

// ─── Dropdown panels ────────────────────────────────────────────

function KudaDropdown({ onClose }: { onClose: () => void }) {
  const popular = kudaCountries.filter(c => c.popular && !c.isRussia);
  const russia = kudaCountries.filter(c => c.isRussia);
  return (
    <div className="p-5 w-[440px]">
      <div className="grid grid-cols-2 gap-x-6">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Популярное</p>
          <ul className="space-y-0.5">
            {popular.map(c => (
              <li key={c.slug}>
                <Link href={`/blog/kuda/${c.slug}`} onClick={onClose}
                  className="block px-2 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Россия</p>
          <ul className="space-y-0.5">
            {russia.map(c => (
              <li key={c.slug}>
                <Link href={`/blog/kuda/${c.slug}`} onClick={onClose}
                  className="block px-2 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Ещё направления</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {kudaCountries.filter(c => !c.popular && !c.isRussia).map(c => (
                <Link key={c.slug} href={`/blog/kuda/${c.slug}`} onClick={onClose}
                  className="text-xs text-gray-500 hover:text-accent transition-colors">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <Link href="/blog/kuda" onClick={onClose}
          className="text-sm font-medium text-accent hover:underline">
          Все направления →
        </Link>
      </div>
    </div>
  );
}

function OtdykhDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-5 w-[300px]">
      <ul className="grid grid-cols-2 gap-0.5">
        {otdykhTypes.map(t => (
          <li key={t.slug}>
            <Link href={`/blog/otdykh/${t.slug}`} onClick={onClose}
              className="block px-2 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors truncate">
              {t.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <Link href="/blog/otdykh" onClick={onClose}
          className="text-sm font-medium text-accent hover:underline">
          Все типы отдыха →
        </Link>
      </div>
    </div>
  );
}

function VygodnoDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-5 w-[260px]">
      <ul className="space-y-0.5">
        {vygodnoTopics.map(t => (
          <li key={t.slug}>
            <Link href={`/blog/vygodno/${t.slug}`} onClick={onClose}
              className="block px-2 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors">
              {t.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <Link href="/blog/vygodno" onClick={onClose}
          className="text-sm font-medium text-accent hover:underline">
          Весь раздел →
        </Link>
      </div>
    </div>
  );
}

// ─── Mobile menu sections ────────────────────────────────────────

function KudaMobile({ onClose }: { onClose: () => void }) {
  const popular = kudaCountries.filter(c => c.popular && !c.isRussia);
  const russia = kudaCountries.filter(c => c.isRussia);
  const others = kudaCountries.filter(c => !c.popular && !c.isRussia);
  return (
    <div className="space-y-3 py-2">
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Популярное</p>
        <div className="grid grid-cols-2 gap-1">
          {popular.map(c => (
            <Link key={c.slug} href={`/blog/kuda/${c.slug}`} onClick={onClose}
              className="flex items-center gap-1 py-1 text-sm text-gray-700">
              {c.emoji} {c.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Россия</p>
        <div className="grid grid-cols-2 gap-1">
          {russia.map(c => (
            <Link key={c.slug} href={`/blog/kuda/${c.slug}`} onClick={onClose}
              className="flex items-center gap-1 py-1 text-sm text-gray-700">
              {c.emoji} {c.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Ещё</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {others.map(c => (
            <Link key={c.slug} href={`/blog/kuda/${c.slug}`} onClick={onClose}
              className="text-sm text-gray-600">{c.name}</Link>
          ))}
        </div>
      </div>
      <Link href="/blog/kuda" onClick={onClose} className="block text-sm font-medium text-accent">Все направления →</Link>
    </div>
  );
}

function OtdykhMobile({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-2">
      <div className="grid grid-cols-2 gap-1">
        {otdykhTypes.map(t => (
          <Link key={t.slug} href={`/blog/otdykh/${t.slug}`} onClick={onClose}
            className="flex items-center gap-1 py-1 text-sm text-gray-700">
            {t.emoji} {t.name}
          </Link>
        ))}
      </div>
      <Link href="/blog/otdykh" onClick={onClose} className="block mt-2 text-sm font-medium text-accent">Все типы отдыха →</Link>
    </div>
  );
}

function VygodnoMobile({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-2">
      <div className="grid grid-cols-2 gap-1">
        {vygodnoTopics.map(t => (
          <Link key={t.slug} href={`/blog/vygodno/${t.slug}`} onClick={onClose}
            className="flex items-center gap-1 py-1 text-sm text-gray-700">
            {t.emoji} {t.name}
          </Link>
        ))}
      </div>
      <Link href="/blog/vygodno" onClick={onClose} className="block mt-2 text-sm font-medium text-accent">Весь раздел →</Link>
    </div>
  );
}

// ─── Main Header ─────────────────────────────────────────────────

type DropdownKey = 'kuda' | 'otdykh' | 'vygodno';

const navItems: Array<{ label: string; href: string; key: DropdownKey }> = [
  { label: "Куда поехать", href: "/blog/kuda", key: "kuda" },
  { label: "Выбери отдых", href: "/blog/otdykh", key: "otdykh" },
  { label: "Отдыхаем выгодно", href: "/blog/vygodno", key: "vygodno" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDesktop = (key: DropdownKey) => {
    setActiveDropdown(prev => prev === key ? null : key);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeAll}>
          <Image src="/images/logo/logo-main.png" alt="2 шезлонга" width={32} height={32} className="h-8 w-auto" />
          <span className="hidden sm:inline text-lg font-bold text-gray-900">2 шезлонга</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex" ref={navRef}>
          {navItems.map(item => (
            <div key={item.key} className="relative">
              <button
                onClick={() => toggleDesktop(item.key)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === item.key
                    ? "text-accent bg-accent/5"
                    : "text-muted-foreground hover:text-accent hover:bg-gray-50"
                }`}
              >
                {item.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeDropdown === item.key ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === item.key && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-200 z-50">
                  {item.key === "kuda" && <KudaDropdown onClose={() => setActiveDropdown(null)} />}
                  {item.key === "otdykh" && <OtdykhDropdown onClose={() => setActiveDropdown(null)} />}
                  {item.key === "vygodno" && <VygodnoDropdown onClose={() => setActiveDropdown(null)} />}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setSearchOpen(true)}
            className="rounded-lg p-2 transition-colors hover:bg-muted"
            aria-label="Поиск (Ctrl+K)"
            title="Ctrl+K"
          >
            <Search size={18} className="text-muted-foreground" />
          </button>
          <Link href="https://2shezlonga.ru" className="btn-accent text-sm">
            Подобрать тур
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="p-2 md:hidden"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white md:hidden max-h-[80vh] overflow-y-auto">
          {navItems.map(item => (
            <div key={item.key} className="border-b border-gray-100">
              <button
                onClick={() => setMobileExpanded(prev => prev === item.key ? null : item.key)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground"
              >
                {item.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${mobileExpanded === item.key ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === item.key && (
                <div className="px-4 pb-4 bg-gray-50">
                  {item.key === "kuda" && <KudaMobile onClose={closeAll} />}
                  {item.key === "otdykh" && <OtdykhMobile onClose={closeAll} />}
                  {item.key === "vygodno" && <VygodnoMobile onClose={closeAll} />}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 py-3">
            <Link href="https://2shezlonga.ru" className="btn-accent text-center text-sm block" onClick={closeAll}>
              Подобрать тур
            </Link>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
