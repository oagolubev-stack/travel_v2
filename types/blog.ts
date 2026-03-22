export interface BlogPost {
  slug: string
  title: string
  description: string
  keywords: string[]
  datePublished: string
  dateModified: string
  author: string
  category: string
  tags: string[]
  readTime: number
  image: string
  imageAlt: string
  faq?: { question: string; answer: string }[]
  relatedSlugs?: string[]
  content: string
}
