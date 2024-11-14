// pages/events/page.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Events.module.css';
import Navbar from 

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
      });
  }, []);

  const handleFilter = (category) => {
    setFilteredEvents(
      events.filter((event) => event.category.toLowerCase() === category.toLowerCase())
    );
  };

  const handleSearch = () => {
    setFilteredEvents(
      events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Events</h1>
      <div className={styles.filterControls}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events..."
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.button}>Search</button>
        <button onClick={() => setFilteredEvents(events)} className={styles.button}>All</button>
        <button onClick={() => handleFilter('Music')} className={styles.button}>Music</button>
        <button onClick={() => handleFilter('Workshop')} className={styles.button}>Workshop</button>
      </div>
      <ul className={styles.cards}>
        {filteredEvents.map((event) => (
          <li key={event.id} className={styles.card}>
            <Link href={`/events/${event.id}`}>
              <a>
                <img src={event.image} alt={event.title} />
                <h2>{event.title}</h2>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.price ? `$${event.price}` : 'Free'}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;

