"use client";
import { useState, useEffect } from "react";
import styles from "./EventForm.module.css";
import EventCard from "@/components/EventCard";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [price, setPrice] = useState(""); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
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

    if (!title || !category || !date || !time || !location || !description || !imageUrl) {
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
      image: imageUrl,
      price,
    };

    try {
      const response = await fetch("http://localhost:3000/events", {
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
      setImageUrl("");
      setPrice("")
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

        <div className={styles.label}>
          Image URL
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter an image URL for the event"
            className={styles.input}
          />
        </div>

        
        <div className={styles.label}>
          Price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter event price"
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Create Event
        </button>
      </form>

      <div className={styles.eventList}>
        <h2 className={styles.listTitle}>Existing Events</h2>
        {events.length > 0 ? (
          <div className="flex flex-col gap-5">
            {events.map((event) => (
              <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              image={event.image}
              price={event.price}
              category={event.category}
              id={event.id}
            />
            ))}
          </div>
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
}

