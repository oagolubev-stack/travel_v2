import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Pro Туры",
  description: "Поиск туров и отелей по популярным направлениям",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={cn(
        inter.className, 
        "min-h-screen bg-background antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}
