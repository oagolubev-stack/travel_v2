import { ReactNode } from "react";

interface HeroProps {
  backgroundImage?: string; // опционально
  children: ReactNode;
}

// фон главной (1920x979), лежит в public/images/hero/home.jpg
const DEFAULT_HERO_BG = "/images/hero/home.jpg";

export function Hero({ backgroundImage, children }: HeroProps) {
  const bg = backgroundImage || DEFAULT_HERO_BG;

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.35), rgba(15,23,42,0.1)), url('${bg}')`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        {children}
      </div>
    </section>
  );
}
