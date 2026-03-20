import Image from "next/image";
import {
 Tag,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Headphones,
  ShieldCheck,
  Star,
} from "lucide-react";

import { SearchBar } from "@/components/travel/search-bar";
import { destinations, offers, reviews, stats } from "@/data/mock-tours";

export function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-cyan-500 to-sky-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%)]" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Онлайн-поиск туров по популярным направлениям
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Найди идеальный тур за пару минут
            </h1>

            <p className="mt-4 max-w-2xl text-base text-sky-50 sm:text-lg">
              Удобный поиск туров, понятные цены, подбор отелей по рейтингу,
              питанию и бюджету. Подходит для классического турагентства и
              онлайн-продаж.
            </p>
          </div>

          <div className="mt-8 max-w-6xl">
            <SearchBar />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur"
              >
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="mt-1 text-sm text-sky-50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Популярные направления
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Направления, которые чаще всего ищут туристы для отпуска и
              горящих туров.
            </p>
          </div>

          <a
            href="#"
            className="hidden items-center gap-1 text-sm font-semibold text-sky-600 md:inline-flex"
          >
            Смотреть все
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {item.badge ? (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {item.badge}
                  </span>
                ) : null}
              </div>

              <div className="p-5">
                <div className="text-xl font-bold">{item.title}</div>
                <div className="mt-1 text-sm text-slate-500">{item.location}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Цена
                    </div>
                    <div className="text-lg font-semibold text-slate-900">
                      {item.price}
                    </div>
                  </div>
                  <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                    Выбрать
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                {item.tag}
              </div>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <div className="mt-5 text-2xl font-semibold text-slate-900">
                {item.price}
              </div>
              <button className="mt-5 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                Смотреть предложения
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Почему туристы бронируют онлайн
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              На крупных тревел-сервисах ценят быстрый поиск, сравнение цен,
              понятную поддержку и прозрачные условия бронирования. Эту же
              логику стоит использовать и на твоём сайте.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                <BadgePercent className="h-6 w-6 text-cyan-300" />
                <div className="mt-4 text-lg font-semibold">Выгодные цены</div>
                <p className="mt-2 text-sm text-slate-300">
                  Удобно показывать цены “от”, акции, горящие туры и подборки по бюджету.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                <Clock3 className="h-6 w-6 text-cyan-300" />
                <div className="mt-4 text-lg font-semibold">Быстрый выбор</div>
                <p className="mt-2 text-sm text-slate-300">
                  Туристу нужен короткий путь: страна, даты, цена, питание, рейтинг.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                <Headphones className="h-6 w-6 text-cyan-300" />
                <div className="mt-4 text-lg font-semibold">Поддержка 24/7</div>
                <p className="mt-2 text-sm text-slate-300">
                  Добавь блок связи: мессенджеры, телефон, обратный звонок и помощь по документам.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                <div className="mt-4 text-lg font-semibold">Доверие</div>
                <p className="mt-2 text-sm text-slate-300">
                  Работают отзывы, рейтинги, блок гарантий, условия оплаты и понятная политика возврата.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold">Что включить дальше</h3>

            <div className="mt-6 space-y-4">
              {[
                "Каталог туров с фильтрами по бюджету, рейтингу, питанию и ночам",
                "Карточку отеля с галереей, описанием, датами и таблицей цен",
                "Интеграцию формы заявки в Telegram, WhatsApp или CRM",
                "SEO-страницы под направления: Турция, Египет, ОАЭ, Таиланд",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-sky-50 p-5">
              <div className="text-sm font-medium text-sky-700">
                Быстрый следующий шаг
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                После этой главной страницы я могу дать тебе второй блок кода:
                страницу списка туров и страницу одного отеля/тура в таком же стиле.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Отзывы клиентов
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Социальное доказательство повышает доверие и конверсию на тревел-сайтах.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-700">{item.text}</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <div className="font-semibold text-slate-900">{item.name}</div>
                <div className="text-sm text-slate-500">{item.trip}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Готов запустить новую версию сайта
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Эта страница уже подходит как стартовая витрина турагентства под
              Vercel, GitHub и дальнейшее расширение каталога.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
              Подобрать тур
            </button>
            <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Связаться с менеджером
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
