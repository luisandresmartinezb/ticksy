import { concerts } from "../data/events";

export default function Admin() {
  return (
    <section>
      <div className="page-heading">
        <h1>Backstage Admin</h1>
        <p>Vista simulada para gestionar conciertos, ciudades y festivales de Ticksy.</p>
      </div>

      <div className="admin-table card">
        <table>
          <thead>
            <tr>
              <th>Artista</th>
              <th>Concierto</th>
              <th>Ciudad</th>
              <th>Sala</th>
              <th>Fecha</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {concerts.map(concert => (
              <tr key={concert.id}>
                <td>{concert.artistName}</td>
                <td>{concert.title}</td>
                <td>{concert.city}</td>
                <td>{concert.place}</td>
                <td>{concert.date}</td>
                <td>{concert.price.toFixed(2)} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
