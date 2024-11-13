import React from 'react';
import { SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";

export default function SearchList({ events }) {
  return (
    <div className="px-4 py-6">
      <SheetHeader className="mb-8">
        <SheetTitle className="text-3xl font-bold">Search Results</SheetTitle>
        <SheetDescription>
          {events.length} events found
        </SheetDescription>
      </SheetHeader>

      {events.length > 0 ? (
        <div className="overflow-auto max-h-[calc(100vh-200px)]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id} className="group cursor-pointer hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-medium">{event.title}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{typeof event.price === 'number' ? 
                        `KES ${event.price.toFixed(2)}` : 
                        event.price}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary"
                      className="capitalize"
                    >
                      {event.category}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No events found.</p>
          <p className="text-sm text-muted-foreground">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
}