import Link from "next/link"

const CATEGORIES = ["Все направления", "Азия", "Европа", "ОАЭ", "Горнолыжные", "Пляжный отдых"]

export function BlogHeader() {
  return (
    <header className="border-b bg-white sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="text-xl font-bold text-primary">
            2shezlonga
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/tours" className="hover:text-primary transition-colors font-medium">Туры</Link>
            <Link href="/blog" className="text-primary font-semibold border-b-2 border-primary pb-0.5">Блог</Link>
            <Link href="/about" className="hover:text-primary transition-colors">О нас</Link>
          </nav>
          <Link
            href="/tours"
            className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition"
          >
            Подобрать тур
          </Link>
        </div>

        {/* Category nav */}
        <nav className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide text-sm" aria-label="Категории блога">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className="whitespace-nowrap text-gray-500 hover:text-primary pb-1 hover:border-b-2 hover:border-primary transition-all"
            >
              {cat}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
