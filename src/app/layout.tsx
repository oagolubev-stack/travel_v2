import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default: "Pro Туры — блог о выездном туризме",
    template: "%s | Pro Туры",
  },
  description: "Обзоры курортов, сравнение отелей, лайфхаки для путешественников.",
  metadataBase: new URL(process.env.SITE_URL || "https://pro-tury.ru"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-background antialiased")}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
