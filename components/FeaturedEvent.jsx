"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function FeaturedEvent() {
  const [featuredEvent, setFeaturedEvent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedEvent(data[0]);
      });
  }, []);

  if (!featuredEvent) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="overflow-hidden shadow-lg rounded-lg bg-white border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-[300px] md:h-full">
          <Image
            src={featuredEvent.image}
            alt="Featured Event"
            fill
            className="object-cover rounded-t-lg md:rounded-l-lg"
            priority
          />
          <Badge variant="secondary" className="absolute top-4 left-4 bg-primary text-white py-1 px-3 rounded-full shadow-md">
            Featured
          </Badge>
        </div>
        <div className="p-6">
          <CardHeader className="px-0 space-y-3">
            <Badge className="text-white px-2 py-1 rounded-full">{featuredEvent.category}</Badge>
            <h3 className="text-3xl font-bold text-gray-800">{featuredEvent.title}</h3>
          </CardHeader>
          <CardContent className="px-0 mt-4">
            <p className="text-gray-600 mb-6">{featuredEvent.description}</p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                <span>{featuredEvent.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span>{featuredEvent.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="mr-2 h-5 w-5 text-primary" />
                <span>{featuredEvent.host}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-0 flex justify-between items-center mt-6">
            <div>
              <span className="text-2xl font-bold text-primary">KES {featuredEvent.price}</span>
              <span className="text-gray-500 ml-2">Early Bird</span>
            </div>
            <Button size="lg" className="bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200">
              <Link href={`/events/${featuredEvent.id}`}>View</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
