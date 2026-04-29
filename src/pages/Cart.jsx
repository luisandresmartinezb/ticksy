// Página del carrito.
// Muestra las entradas añadidas, permite eliminarlas y confirma la compra simulada.
// Al comprar, se generan tickets y se guardan en localStorage.

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, getCart, getCurrentUser, removeFromCart, saveTicket } from "../utils/storage";
import { generateTicketPDF } from "../utils/pdf";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(getCart());
  const user = getCurrentUser();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleRemove(eventId) {
    setCart(removeFromCart(eventId));
  }

  async function handleCheckoutCart() {
    if (!user) {
      navigate("/login");
      return;
    }

    for (const item of cart) {
      const ticket = {
        id: crypto.randomUUID(),
        code: `TCK-${Math.floor(Math.random() * 999999)}`,
        eventTitle: item.title,
        city: item.city,
        place: item.place,
        date: item.date,
        time: item.time,
        quantity: item.quantity,
        total: item.price * item.quantity,
        userName: user.name,
        createdAt: new Date().toLocaleString()
      };

      saveTicket(ticket);
      await generateTicketPDF(ticket);
    }

    clearCart();
    setCart([]);
    navigate("/compra-realizada");
  }

  return (
    <section>
      <div className="page-heading">
        <h1>Carrito metalero</h1>
        <p>Revisa tus entradas antes de confirmar la compra simulada.</p>
      </div>

      {cart.length === 0 ? (
        <div className="card">
          <h2>Tu carrito está vacío</h2>
          <p>Añade entradas desde la página de conciertos.</p>
          <Link to="/eventos" className="btn primary">Ver conciertos</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="tickets">
            {cart.map(item => (
              <article key={item.eventId} className="ticket">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place} · {item.city}</p>
                  <p>{item.date} · {item.time}</p>
                  <p>{item.quantity} entrada(s) x {item.price.toFixed(2)} €</p>
                </div>
                <button className="btn secondary" onClick={() => handleRemove(item.eventId)}>
                  Quitar
                </button>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Resumen</h2>
            <p>Total de entradas: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <h3>Total: {total.toFixed(2)} €</h3>
            <button onClick={handleCheckoutCart} className="btn primary full">
              Comprar entradas
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
