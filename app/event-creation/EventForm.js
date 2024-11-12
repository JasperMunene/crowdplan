"use client";
import { useState } from "react";
import styles from "./EventForm.module.css";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !date || !time || !location || !description) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    console.log({
      title,
      category,
      date,
      time,
      location,
      description,
    });

    setSuccessMessage("Event created successfully!");
    setTitle("");
    setCategory("");
    setDate("");
    setTime("");
    setLocation("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      {successMessage && <p className={styles.success}>{successMessage}</p>}

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
    </div>
  );
}
