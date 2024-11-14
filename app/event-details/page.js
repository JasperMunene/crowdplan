// // app/event-details/page.js
// "use client"; // Mark this as a client-side component

// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // Import useParams to access dynamic route parameters
// import styles from './EventDetails.module.css'

// const EventDetails = () => {
//   const { id } = useParams(); // Get the event ID from the URL
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     if (id) {
//       // Fetch event details based on the event ID
//       fetch(`http://localhost:3001/events/${id}`)
//         .then((res) => res.json())
//         .then((data) => setEvent(data))
//         .catch((error) => console.error("Error fetching event:", error));
//     }
//   }, [id]);

//   if (!event) return <p>Loading event details...</p>;

//   return (
//     <div>
//       <h1>{event.title}</h1>
//       <img src={event.image} alt={event.title} />
//       <p>{event.description}</p>
//       <p>Location: {event.location}</p>
//       <p>Date: {event.date}</p>
//       <p>Time: {event.time}</p>
//       <p>Category: {event.category}</p>
//       <p>Host: {event.host}</p>
//     </div>
//   );
// };

// export default EventDetails;
// app/event-details/page.js
"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './EventDetails.module.css';

const EventDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false); // State for saved events
  const [remainingSpots, setRemainingSpots] = useState(null); // For capacity display

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/events/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch event');
          return res.json();
        })
        .then((data) => {
          setEvent(data);
          setRemainingSpots(data.capacity - data.attendees);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching event:", error);
          setError("Failed to load event details.");
          setLoading(false);
        });
    }
  }, [id]);

  const handleSave = () => setSaved(!saved); // Toggle save state

  const handleRSVP = () => {
    alert("RSVP or Ticket Purchase process will be here!");
    // Integrate API call for RSVP or ticket purchase
  };

  if (loading) return <p className={styles.loading}>Loading event details...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        &larr; Back to Events
      </button>
      
      <h1 className={styles.title}>{event.title}</h1>
      
      <div className={styles.imageWrapper}>
        <img src={event.image} alt={`${event.title} poster`} className={styles.image} />
      </div>

      <div className={styles.details}>
        <p className={styles.description}>{event.description}</p>
        <p className={styles.info}><strong>Location:</strong> {event.location}</p>
        <p className={styles.info}>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}<br />
          <strong>Time:</strong> {event.time}
        </p>
        <p className={styles.info}><strong>Category:</strong> {event.category}</p>
        <p className={styles.info}><strong>Host:</strong> {event.host}</p>
        <p className={styles.info}>
          <strong>Remaining Spots:</strong> {remainingSpots ?? "Unlimited"}
        </p>
      </div>

      <div className={styles.actions}>
        <button onClick={handleRSVP} className={styles.rsvpButton}>
          {event.price ? `Buy Ticket - $${event.price}` : "RSVP"}
        </button>
        
        <button onClick={handleSave} className={styles.saveButton}>
          {saved ? "Saved" : "Save"}
        </button>

        <button className={styles.shareButton}>
          Share
        </button>
      </div>
    </div>
  );
};

export default EventDetails;


