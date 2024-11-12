import EventForm from './EventForm';
import styles from './EventForm.module.css';

export default function EventCreationPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Event</h1>
      <EventForm />
    </div>
  );
}
