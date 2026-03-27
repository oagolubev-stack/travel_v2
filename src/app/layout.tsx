import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap", preload: false });

export const metadata: Metadata = {
  title: {
    default: "Турагентство 2 шезлонга — блог о выездном туризме",
    template: "%s | Турагентство 2 шезлонга",
  },
  description: "Обзоры курортов, сравнение отелей, лайфхаки для путешественников.",
  metadataBase: new URL(process.env.SITE_URL || "https://2shezlonga.ru"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-background antialiased")}>
        {children}
      </body>
    </html>
  );
}
