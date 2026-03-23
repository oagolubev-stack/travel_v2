import Link from "next/link";
import { Globe } from "lucide-react";

const topResorts = [
  { label: "Кемер", href: "/destinations/turkey/kemer" },
  { label: "Сиде", href: "/destinations/turkey/side" },
  { label: "Аланья", href: "/destinations/turkey/alanya" },
  { label: "Хургада", href: "/destinations/egypt/hurghada" },
  { label: "Пхукет", href: "/destinations/thailand/phuket" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#020817] text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
              <Globe size={20} className="text-accent" />
              <span>Pro Туры</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Блог о выездном туризме. Обзоры курортов, сравнение отелей и
              практичные советы путешественников.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Топ курортов
            </h3>
            <ul className="space-y-2 text-sm">
              {topResorts.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Полезное
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/hotels/compare/kemer"
                  className="transition-colors hover:text-white"
                >
                  Сравнение отелей Кемер
                </Link>
              </li>
              <li>
                <Link
                  href="/tips/general/egypt-tips-2026"
                  className="transition-colors hover:text-white"
                >
                  Лайфхаки
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="transition-colors hover:text-white"
                >
                  Все курорты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Компания
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="transition-colors hover:text-white"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1f2937] pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pro Туры. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
