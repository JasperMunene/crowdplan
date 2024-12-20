"use client";

import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Link from "next/link";



export default function EventCard({
    title,
    date,
    location,
    image,
    price,
    category,
    id,
}) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <Badge className="absolute top-4 left-4">{category}</Badge>
            </div>
            <CardHeader>
                <h3 className="text-xl font-semibold">{title}</h3>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{location}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-semibold">KES {price}</span>
                <Button><Link href={`/events/${id}`}>View</Link></Button>
            </CardFooter>
        </Card>
    );
}