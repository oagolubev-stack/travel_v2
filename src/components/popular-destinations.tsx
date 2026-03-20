import Image from "next/image";
import Link from "next/link";

const destinations = [
  { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", href: "/tours?destination=Bali" },
  { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400", href: "/tours?destination=Maldives" },
  { name: "Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400", href: "/tours?destination=Switzerland" },
  { name: "Thailand", image: "https://images.unsplash.com/photo-1537956076988-3b6b15b3b5c3?w=400", href: "/tours?destination=Thailand" },
  { name: "Italy", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400", href: "/tours?destination=Italy" },
  { name: "Greece", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400", href: "/tours?destination=Greece" },
];

export function PopularDestinations() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {destinations.map((dest) => (
          <Link key={dest.name} href={dest.href} className="group">
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-semibold">{dest.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
