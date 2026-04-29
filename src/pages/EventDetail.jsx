import { Link, useNavigate, useParams } from "react-router-dom";
import { events } from "../data/events";
import { addToCart } from "../utils/storage";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(item => item.id === id);

  if (!event) return <p>Evento no encontrado.</p>;

  function handleAddToCart() {
    addToCart({
      eventId: event.id,
      title: event.title,
      city: event.city,
      place: event.place,
      date: event.date,
      time: event.time,
      price: event.price,
      quantity: 1
    });

    navigate("/carrito");
  }

  return (
    <section className="detail">
      <img src={event.image} alt={event.title} />
      <div className="detail-content">
        <span className="tag">{event.category}</span>
        <h1>{event.title}</h1>
        <p>{event.description}</p>

        <div className="info-box">
          <p><strong>Banda:</strong> {event.band}</p>
          <p><strong>Ciudad:</strong> {event.city}</p>
          <p><strong>Lugar:</strong> {event.place}</p>
          <p><strong>Fecha:</strong> {event.date} · {event.time}</p>
          <p><strong>Precio:</strong> {event.price.toFixed(2)} €</p>
        </div>

        <div className="hero-actions">
          <button onClick={handleAddToCart} className="btn primary">🛒 Añadir al carrito</button>
          <Link to={`/checkout/${event.id}`} className="btn secondary">Comprar ahora</Link>
        </div>
      </div>
    </section>
  );
}
