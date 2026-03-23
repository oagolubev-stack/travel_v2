interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
    />
  );
}

// ── Article ──
export function buildArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Person", name: authorName },
    publisher: {
      "@type": "Organization",
      name: "Pro Туры",
      logo: { "@type": "ImageObject", url: "https://pro-tury.ru/logo.png" },
    },
  };
}

// ── FAQ ──
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ── Курорт (Place) ──
export function buildPlaceSchema({
  name,
  description,
  url,
  image,
  ratingValue,
  reviewCount,
  address,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  ratingValue: number;
  reviewCount: number;
  address: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name,
    description,
    url,
    image: [image],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      addressCountry: address,
    },
  };
}

// ── Список отелей ──
export function buildHotelListSchema(
  hotels: {
    name: string;
    url: string;
    image: string;
    rating: number;
    reviewCount: number;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: hotels.map((hotel, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Hotel",
        name: hotel.name,
        url: hotel.url,
        image: hotel.image,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: hotel.rating.toFixed(1),
          reviewCount: hotel.reviewCount,
          bestRating: "5",
        },
      },
    })),
  };
}

// ── Хлебные крошки ──
export function buildBreadcrumbSchema(
  crumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
