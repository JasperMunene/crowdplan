import React from 'react';
import { CalendarDays, MapPin, TrendingUp } from 'lucide-react';

export default function Stats() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Monthly Events */}
        <div className="flex items-center gap-4 p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-3 rounded-full bg-primary/10">
            <CalendarDays className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-semibold text-gray-800">1,000+</p>
            <p className="text-gray-500">Monthly Events</p>
          </div>
        </div>

        {/* Cities */}
        <div className="flex items-center gap-4 p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-3 rounded-full bg-primary/10">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-semibold text-gray-800">50+</p>
            <p className="text-gray-500">Cities</p>
          </div>
        </div>

        {/* Happy Attendees */}
        <div className="flex items-center gap-4 p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-3 rounded-full bg-primary/10">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-semibold text-gray-800">100K+</p>
            <p className="text-gray-500">Happy Attendees</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
