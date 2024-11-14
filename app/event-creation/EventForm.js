"use client";
import { useState, useEffect } from "react";
import styles from "./EventForm.module.css";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [events, setEvents] = useState([]); // State to store fetched events
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch events from db.json
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !date || !time || !location || !description) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newEvent = {
      title,
      category,
      date,
      time,
      location,
      description,
    };

    try {
      const response = await fetch("http://localhost:3001/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const createdEvent = await response.json();
      setEvents([...events, createdEvent]);
      setSuccessMessage("Event created successfully!");
      setTitle("");
      setCategory("");
      setDate("");
      setTime("");
      setLocation("");
      setDescription("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.label}>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter event title"
            className={styles.input}
          />
        </div>

        <div className={styles.label}>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.input}
          >
            <option value="">Select a category</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Tech">Tech</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div className={styles.label}>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.label}>
          Time
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.label}>
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter event location"
            className={styles.input}
          />
        </div>

        <div className={styles.label}>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter event description"
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Create Event
        </button>
      </form>

      <div className={styles.eventList}>
        <h2 className={styles.listTitle}>Existing Events</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event) => (
              <li key={event.id} className={styles.eventItem}>
                <h3>{event.title}</h3>

                {/* Use img tag to display event image from an external URL */}
                <img
                  src={event.image}  // External URL for the image
                  alt={event.title}  // Use event title for alt text
                  className={styles.eventImage}  // Your custom styling class
                />

                <p>Category: {event.category}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>Location: {event.location}</p>
                <p>Description: {event.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
}
