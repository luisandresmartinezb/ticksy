import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <img src={event.image} alt={event.title} />
      <div className="event-card-content">
        <span className="tag">{event.category}</span>
        <h3>{event.title}</h3>
        <p>{event.city} · {event.date}</p>
        <p className="venue">{event.place}</p>
        <strong>{event.price.toFixed(2)} €</strong>
        <Link to={`/eventos/${event.id}`} className="btn primary full">Ver entradas</Link>
      </div>
    </article>
  );
}
