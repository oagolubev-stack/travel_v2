"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [price, setPrice] = useState<[number, number]>([0, 2000]);
  const [stars, setStars] = useState<string>("");

  useEffect(() => {
    setPrice([
      parseInt(searchParams.get("minPrice") || "0"),
      parseInt(searchParams.get("maxPrice") || "2000"),
    ]);
    setStars(searchParams.get("stars") || "");
  }, [searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (price[0] > 0) params.set("minPrice", price[0].toString());
    else params.delete("minPrice");
    if (price[1] < 2000) params.set("maxPrice", price[1].toString());
    else params.delete("maxPrice");
    if (stars) params.set("stars", stars);
    else params.delete("stars");
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Price range: ${price[0]} - ${price[1]}</Label>
        <Slider
          value={price}
          onValueChange={(val) => setPrice(val as [number, number])}
          min={0}
          max={2000}
          step={10}
          className="mt-2"
        />
      </div>
      <div>
        <Label>Hotel Stars</Label>
        <Select value={stars} onValueChange={setStars}>
          <SelectTrigger>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any</SelectItem>
            <SelectItem value="5">★★★★★ (5)</SelectItem>
            <SelectItem value="4">★★★★ (4)</SelectItem>
            <SelectItem value="3">★★★ (3)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
    </div>
  );
}
