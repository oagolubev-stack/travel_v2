import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { siteLinksSearchBoxSchema } from "@/lib/schema"
import Script from "next/script"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://2shezlonga.ru"

export const metadata: Metadata = {
  title: "Блог о турах — советы путешественникам | 2shezlonga",
  description:
    "Полезные статьи о лучших турах, курортах и путешествиях. Читайте советы по Таиланду, Бали, Турции и другим направлениям.",
  keywords: ["блог о турах", "советы путешественникам", "куда поехать 2026"],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Блог о турах — советы путешественникам",
    description: "Статьи и гиды по лучшим направлениям для отдыха.",
    url: `${SITE_URL}/blog`,
    type: "website",
    siteName: "2shezlonga",
    images: [{ url: `${SITE_URL}/og-blog.jpg`, width: 1200, height: 630, alt: "Блог о турах" }],
  },
  twitter: { card: "summary_large_image", title: "Блог о турах | 2shezlonga" },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const jsonLd = siteLinksSearchBoxSchema()

  return (
    <>
      <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:underline">Главная</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-gray-900 font-medium">Блог</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Блог о турах и путешествиях</h1>
        <p className="text-gray-600 mb-8">
          Советы, гиды и обзоры направлений — чтобы ваш отдых был идеальным.
        </p>

        {/* Category filter — статический, можно сделать динамическим */}
        <div className="flex gap-3 flex-wrap mb-8">
          {["Все", "Азия", "Европа", "Пляжный отдых", "Горнолыжные"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 rounded-full border border-gray-300 text-sm hover:bg-primary hover:text-white transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime} мин</span>
                </div>
                <h2 className="text-lg font-semibold mb-1 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Читать →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
