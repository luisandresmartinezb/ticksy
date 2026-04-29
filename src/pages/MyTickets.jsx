import { getTickets } from "../utils/storage";
import { generateTicketPDF } from "../utils/pdf";

export default function MyTickets() {
  const tickets = getTickets();

  return (
    <section>
      <div className="page-heading">
        <h1>Mis entradas</h1>
        <p>Historial de compras simuladas realizadas en Ticksy.</p>
      </div>

      {tickets.length === 0 ? (
        <div className="card">
          <h2>Aún no tienes entradas</h2>
          <p>Compra una entrada desde la página de eventos para verla aquí.</p>
        </div>
      ) : (
        <div className="tickets">
          {tickets.map(ticket => (
            <article key={ticket.id} className="ticket">
              <div>
                <h3>{ticket.eventTitle}</h3>
                <p>{ticket.place} · {ticket.date}</p>
                <p>Código: <strong>{ticket.code}</strong></p>
                <p>Total: {ticket.total.toFixed(2)} €</p>
              </div>
              <button className="btn secondary" onClick={async () => await generateTicketPDF(ticket)}>
                Descargar PDF
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
