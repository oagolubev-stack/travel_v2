import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

export type Tour = {
  id: string;
  title: string;
  location: string;
  price: number;
  oldPrice?: number;
  duration: number;
  images: string[];
  rating: number;
  stars: number;
};

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={tour.images[0] || "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400"}
            alt={tour.title}
            fill
            className="object-cover"
          />
          {tour.oldPrice && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{Math.round((1 - tour.price / tour.oldPrice) * 100)}%
            </span>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold line-clamp-1">{tour.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
            <MapPin className="h-3 w-3" />
            <span className="line-clamp-1">{tour.location}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
            <Clock className="h-3 w-3" />
            <span>{tour.duration} nights</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < tour.stars ? "text-yellow-400" : "text-gray-300"}>★</span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div>
            {tour.oldPrice && (
              <span className="text-sm line-through text-muted-foreground mr-2">${tour.oldPrice}</span>
            )}
            <span className="text-lg font-bold">${tour.price}</span>
          </div>
          <span className="text-xs text-muted-foreground">per person</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
