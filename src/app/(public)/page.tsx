import { SearchForm } from "@/components/search-form";
import { PopularDestinations } from "@/components/popular-destinations";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/data/tours";

export default function HomePage() {
  // Показываем несколько горящих туров на главной
  const hotTours = tours.slice(0, 4);

  return (
    <>
      {/* Hero с поиском */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Go further for less this summer!
          </h1>
          <p className="text-xl mb-8">Find your perfect holiday</p>
          <SearchForm />
        </div>
      </section>

      {/* Популярные направления */}
      <PopularDestinations />

      {/* Горящие туры */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Hot Deals 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </>
  );
}
