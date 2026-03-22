import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />
      <div className="flex-1">{children}</div>
      <BlogFooter />
    </div>
  )
}
