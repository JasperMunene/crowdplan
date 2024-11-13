import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-primary/10 via-primary/5 to-background flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-800 mb-6">
            Discover Amazing Events Near You
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Find and join the most exciting events in your area. From conferences to concerts, 
            we’ve got everything you’re looking for.
          </p>
          <div className="flex justify-center gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <Input placeholder="Search events..." className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
            </div>
            <Button size="lg" className="h-12 flex items-center bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
