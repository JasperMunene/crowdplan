import React from 'react'
import EventCard from './EventCard'
import { Button } from './ui/button'

export default function EventListing() {
  return (
    <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title="Tech Conference 2024"
            date="Apr 15, 2025"
            location="Kigali, RW"
            image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
            price={5000}
            category="Technology"
          />
          <EventCard
            title="Music Festival"
            date="Dec 1, 2024"
            location="Nairobi, KE"
            image="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80"
            price={3000}
            category="Music"
          />
          <EventCard
            title="Food & Wine Expo"
            date="Jun 10, 2025"
            location="Mombasa, KE"
            image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
            price={1500}
            category="Food"
          />
        </div>
      </section>
  )
}
