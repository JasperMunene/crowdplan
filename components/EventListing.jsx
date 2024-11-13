'use client'

import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import { Button } from './ui/button'



export default function EventListing() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  if (!events) {
    return <div>Loading...</div>;
  }

  const selectedEvents = events.slice(1, 4); 
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <Button variant="outline">View All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            image={event.image}
            price={event.price}
            category={event.category}
          />
        ))}
      </div>
    </section>
  );
}
