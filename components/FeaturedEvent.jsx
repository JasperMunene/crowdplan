"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function FeaturedEvent() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-[300px] md:h-full">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Featured Event"
            fill
            className="object-cover"
            priority
          />
          <Badge variant="secondary" className="absolute top-4 left-4">
            Featured
          </Badge>
        </div>
        <div className="p-6">
          <CardHeader className="px-0">
            <Badge>Music</Badge>
            <h3 className="text-2xl font-bold mt-4">Summer Music Festival 2024</h3>
          </CardHeader>
          <CardContent className="px-0">
            <p className="text-muted-foreground mb-6">
              Join us for three days of incredible live performances, featuring top artists
              from around the world. Experience music, art, and culture like never before.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>July 15-17, 2024</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Central Park, New York City</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                <span>50,000+ Attendees Expected</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-0 flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold">$299</span>
              <span className="text-muted-foreground ml-2">Early Bird</span>
            </div>
            <Button size="lg">Get Tickets</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}