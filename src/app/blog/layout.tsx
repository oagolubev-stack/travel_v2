import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</div>;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
    >
      <Link href="/" className="transition-colors hover:text-accent">
        Главная
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight size={14} className="text-muted" />
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
