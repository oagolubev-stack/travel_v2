import type { Metadata } from "next";

const BASE_URL = process.env.SITE_URL || "https://2shezlonga.ru";

export function buildMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/images/og-default.jpg`;
  return {
    title: `${title} | Турагентство 2 шезлонга`,
    description,
    keywords: keywords?.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Турагентство 2 шезлонга",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "ru_RU",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
