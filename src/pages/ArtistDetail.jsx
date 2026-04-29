// Página de detalle de artista.
// Muestra la información de la banda y lista sus próximos conciertos por ciudad.
// Desde aquí el usuario puede añadir una entrada al carrito o comprar directamente.

import { Link, useNavigate, useParams } from "react-router-dom";
import { artists, concerts } from "../data/events";
import { addToCart } from "../utils/storage";

export default function ArtistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const artist = artists.find(item => item.id === id);
  const artistConcerts = concerts
    .filter(concert => concert.artistId === id)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (!artist) return <p>Artista no encontrado.</p>;

  function handleAddToCart(concert) {
    addToCart({
      eventId: concert.id,
      title: concert.title,
      city: concert.city,
      place: concert.place,
      date: concert.date,
      time: concert.time,
      price: concert.price,
      quantity: 1
    });

    navigate("/carrito");
  }

  return (
    <section>
      <div className="artist-hero">
        <img src={artist.image} alt={artist.name} />
        <div>
          <span className="tag">{artist.category}</span>
          <h1>{artist.name}</h1>
          <p>{artist.description}</p>
        </div>
      </div>

      <div className="page-heading">
        <h2>Próximos conciertos</h2>
        <p>Elige ciudad y compra tu entrada simulada.</p>
      </div>

      <div className="concert-list">
        {artistConcerts.map(concert => (
          <article key={concert.id} className="concert-row">
            <div className="date-box">
              <strong>{concert.date.slice(8, 10)}</strong>
              <span>{concert.date.slice(5, 7)}</span>
            </div>

            <div className="concert-info">
              <h3>{concert.city}</h3>
              <p>{concert.place} · {concert.time}</p>
              <span className="tag">{concert.category}</span>
            </div>

            <div className="concert-actions">
              <strong>{concert.price.toFixed(2)} €</strong>
              <button onClick={() => handleAddToCart(concert)} className="btn primary">
                🛒 Añadir
              </button>
              <Link to={`/checkout/${concert.id}`} className="btn secondary">
                Comprar
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
