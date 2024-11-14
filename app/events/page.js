'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import EventCard from '@/components/EventCard'
import Navbar from '@/components/Navbar';

const Events = () => {
  const [events, setEvents] = useState(null)
  
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
      })
      .catch((error) => console.error('Error fetching events:', error))
  }, [])

  if (!events) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {events.map((event) => (
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
    </div>
  )
}

export default Events
