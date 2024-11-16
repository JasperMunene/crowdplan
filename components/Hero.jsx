'use client'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import SearchList from './SearchList';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch('https://event-api-9ll8.onrender.com/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      
      const data = await response.json();
      const filteredEvents = data.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setEvents(filteredEvents);
      setOpen(true);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative h-[500px] bg-gradient-to-r from-primary/10 via-primary/5 to-background flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-800 mb-6">
            Discover Amazing Events Near You
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Find and join the most exciting events in your area. From conferences to concerts, 
            we have got everything you are looking for.
          </p>
          <div className="flex justify-center gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  size="lg"
                  className="h-12 flex items-center bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  onClick={handleSearch}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[90%] sm:w-[640px] md:w-[820px] lg:w-[1020px]"
              >
                <SearchList events={events} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
