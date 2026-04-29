// Página de checkout.
// Permite comprar un concierto concreto, genera el PDF de la entrada
// y guarda la compra en el historial del usuario.

import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { events } from "../data/events";
import { generateTicketPDF } from "../utils/pdf";
import { getCurrentUser, saveTicket } from "../utils/storage";

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(item => item.id === id);
  const user = getCurrentUser();
  const [quantity, setQuantity] = useState(1);

  if (!event) return <p>Evento no encontrado.</p>;

  if (!user) {
    return (
      <section className="card">
        <h1>Inicia sesión para comprar</h1>
        <p>Para simular una compra necesitas tener una cuenta iniciada.</p>
        <Link to="/login" className="btn primary">Ir al login</Link>
      </section>
    );
  }

  async function handleBuy() {
    const ticket = {
      id: crypto.randomUUID(),
      code: `TCK-${Math.floor(Math.random() * 999999)}`,
      eventTitle: event.title,
      city: event.city,
      place: event.place,
      date: event.date,
      time: event.time,
      quantity: Number(quantity),
      total: event.price * Number(quantity),
      userName: user.name,
      createdAt: new Date().toLocaleString()
    };

    saveTicket(ticket);
    await generateTicketPDF(ticket);
    navigate("/compra-realizada");
  }

  return (
    <section className="checkout card">
      <h1>Finalizar compra</h1>
      <h2>{event.title}</h2>
      <p>{event.place} · {event.city} · {event.date}</p>

      <label>
        Número de entradas
        <input
          type="number"
          min="1"
          max="6"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>

      <div className="summary">
        <p>Precio unitario: {event.price.toFixed(2)} €</p>
        <h3>Total: {(event.price * quantity).toFixed(2)} €</h3>
      </div>

      <button onClick={handleBuy} className="btn primary full">
        Confirmar compra y descargar PDF
      </button>
    </section>
  );
}
