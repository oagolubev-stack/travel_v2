import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Script from "next/script"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://2shezlonga.ru"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | 2shezlonga`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}${post.image}`],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.relatedSlugs ?? [])

  const schemas = [
    articleSchema(post),
    ...(post.faq ? [faqSchema(post.faq)] : []),
    breadcrumbSchema([
      { name: "Главная", url: SITE_URL },
      { name: "Блог", url: `${SITE_URL}/blog` },
      { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
    ]),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <Script
          key={i}
          id={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="container mx-auto px-4 py-10 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex gap-2 flex-wrap">
            <li><Link href="/" className="hover:underline">Главная</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:underline">Блог</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{post.title}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{post.category}</span>
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-tight mb-3">{post.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            <span>·</span>
            <span>{post.readTime} мин чтения</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Обложка */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8">
          <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />
        </div>

        {/* Контент статьи */}
        <article className="prose prose-lg max-w-none mb-10">
          {/* Здесь рендерится MDX / HTML контент */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* CTA — переход к турам */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-6 text-white mb-10">
          <h2 className="text-xl font-bold mb-2">Найди тур прямо сейчас</h2>
          <p className="mb-4 text-blue-100">Подбери путёвку по лучшей цене за 2 минуты</p>
          <Link
            href="/tours?destination=tailand"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Смотреть туры →
          </Link>
        </div>

        {/* FAQ — появляется в сниппетах */}
        {post.faq && post.faq.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <details key={i} className="border rounded-lg p-4 group">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                    {item.question}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Похожие статьи */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Похожие статьи</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="border rounded-xl p-4 hover:shadow-md transition-shadow flex gap-3 items-start"
                >
                  <div className="relative w-20 h-16 shrink-0 rounded-lg overflow-hidden">
                    <Image src={r.image} alt={r.imageAlt} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm leading-snug">{r.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{r.readTime} мин</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
