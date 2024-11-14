// app/event-details/page.js
"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './Details.module.css';
import Navbar from '@/components/Navbar';

const EventDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:3000/events/1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setEvent(data);
      });
  }, []);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <Navbar />
      <div>
        <img src={event.image} alt={event.title}/>
        <h1 >{event.title}</h1>
        <p >{event.date}</p>
        <p >Time: {event.time}</p>
        <p >Location: {event.location}</p>
        <p >{event.description}</p>
        <p>Category: {event.category}</p>
        <p>Hosted by: {event.host}</p>
        <p>Price: ${event.price}</p>
        <button 
          className={styles.saveButton} 
          onClick={() => setSaved((prev) => !prev)}
        >
          {saved ? 'Saved' : 'Save Event'}
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
