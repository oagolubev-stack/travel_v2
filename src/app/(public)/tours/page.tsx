import { tours } from "@/data/tours";
import { TourCard } from "@/components/tour-card";
import { Filters } from "@/components/filters";
import { Suspense } from "react";

interface PageProps {
  searchParams: {
    destination?: string;
    minPrice?: string;
    maxPrice?: string;
    stars?: string;
    from?: string;
    to?: string;
    adults?: string;
    children?: string;
  };
}

export default function ToursPage({ searchParams }: PageProps) {
  const filteredTours = tours.filter((tour) => {
    // Фильтр по направлению
    if (searchParams.destination && !tour.location.toLowerCase().includes(searchParams.destination.toLowerCase())) {
      return false;
    }
    // Фильтр по цене
    const minPrice = searchParams.minPrice ? parseInt(searchParams.minPrice) : 0;
    const maxPrice = searchParams.maxPrice ? parseInt(searchParams.maxPrice) : 2000;
    if (tour.price < minPrice || tour.price > maxPrice) return false;
    // Фильтр по звездам
    if (searchParams.stars && tour.stars !== parseInt(searchParams.stars)) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <Suspense fallback={<div>Loading filters...</div>}>
            <Filters />
          </Suspense>
        </aside>
        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Tours</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
