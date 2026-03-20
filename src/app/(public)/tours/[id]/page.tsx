import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = tours.find((t) => t.id === params.id);

  if (!tour) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={tour.images[0]}
            alt={tour.title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin className="h-4 w-4" />
            <span>{tour.location}</span>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{tour.duration} nights</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>Flexible dates</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold">${tour.price}</span>
            <span className="text-muted-foreground">per person</span>
          </div>
          <Link href={`/booking/${tour.id}`}>
            <Button size="lg" className="w-full">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
