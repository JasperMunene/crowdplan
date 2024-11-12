// app/event-details/page.js
"use client"; // Mark this as a client-side component

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams to access dynamic route parameters
import styles from './EventDetails.module.css'

const EventDetails = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch event details based on the event ID
      fetch(`http://localhost:3001/events/${id}`)
        .then((res) => res.json())
        .then((data) => setEvent(data))
        .catch((error) => console.error("Error fetching event:", error));
    }
  }, [id]);

  if (!event) return <p>Loading event details...</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} />
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Category: {event.category}</p>
      <p>Host: {event.host}</p>
    </div>
  );
};

export default EventDetails;
