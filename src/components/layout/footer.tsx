import Link from "next/link";
import Image from "next/image";

const topResorts = [
  { label: "Кемер", href: "/blog/destinations/turkey/kemer" },
  { label: "Сиде", href: "/blog/destinations/turkey/side" },
  { label: "Аланья", href: "/blog/destinations/turkey/alanya" },
  { label: "Хургада", href: "/blog/destinations/egypt/hurghada" },
  { label: "Пхукет", href: "/blog/destinations/thailand/phuket" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#020817] text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
              <Image
                src="/images/logo/logo-main.png"
                alt="2 шезлонга"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span>2 шезлонга</span>
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
                  href="/blog/hotels/compare/kemer"
                  className="transition-colors hover:text-white"
                >
                  Сравнение отелей Кемер
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/tips/general/egypt-tips-2026"
                  className="transition-colors hover:text-white"
                >
                  Лайфхаки
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/destinations"
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
          © {new Date().getFullYear()} Турагентство 2 шезлонга. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
