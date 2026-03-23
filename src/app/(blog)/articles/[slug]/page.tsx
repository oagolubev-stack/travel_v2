import { redirect } from 'next/navigation';
import { articles } from '@/lib/data/articles';

export default function ArticleRedirect({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  if (article) redirect(`/tips/${article.categorySlug}/${article.slug}`);
  redirect('/');
}
