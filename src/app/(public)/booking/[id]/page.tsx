"use client";

import { useParams } from "next/navigation";
import { tours } from "@/data/tours";
import { BookingForm } from "@/components/booking-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookingPage() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return <div className="container mx-auto px-4 py-8">Tour not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Book {tour.title}</CardTitle>
          <CardDescription>Fill in your details to reserve this tour</CardDescription>
        </CardHeader>
        <CardContent>
          <BookingForm tourId={tour.id} price={tour.price} />
        </CardContent>
      </Card>
    </div>
  );
}
