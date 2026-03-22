import Link from "next/link"

const POPULAR_POSTS = [
  { slug: "luchshie-tury-v-tailand", title: "Туры в Таиланд 2026" },
  { slug: "luchshie-tury-v-bali", title: "Туры на Бали 2026" },
]

const DIRECTIONS = [
  { href: "/tours?dest=tailand", label: "Таиланд" },
  { href: "/tours?dest=bali", label: "Бали" },
  { href: "/tours?dest=turkey", label: "Турция" },
  { href: "/tours?dest=europe", label: "Европа" },
  { href: "/tours?dest=uae", label: "ОАЭ" },
]

export function BlogFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white text-xl font-bold">2shezlonga</Link>
            <p className="text-sm mt-2 leading-relaxed">
              Лучшие туры по всему миру. Подбираем путёвки с 2020 года.
            </p>
          </div>

          {/* Популярные направления */}
          <div>
            <h3 className="text-white font-semibold mb-3">Направления</h3>
            <ul className="space-y-2 text-sm">
              {DIRECTIONS.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="hover:text-white transition-colors">{d.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Популярные статьи */}
          <div>
            <h3 className="text-white font-semibold mb-3">Статьи блога</h3>
            <ul className="space-y-2 text-sm">
              {POPULAR_POSTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="hover:text-white transition-colors">{p.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="hover:text-white transition-colors text-blue-400">Все статьи →</Link>
              </li>
            </ul>
          </div>

          {/* Полезные ссылки */}
          <div>
            <h3 className="text-white font-semibold mb-3">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} 2shezlonga.ru — все права защищены</p>
          <p>
            <Link href="/sitemap.xml" className="hover:text-white">Карта сайта</Link>
            {" · "}
            <Link href="/blog" className="hover:text-white">Блог</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
