import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://2shezlonga.ru"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogUrls = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/tours`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    ...blogUrls,
  ]
}
