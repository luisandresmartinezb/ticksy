import { Link } from "react-router-dom";
import { concerts } from "../data/events";

export default function ArtistCard({ artist }) {
  const artistConcerts = concerts.filter(concert => concert.artistId === artist.id);
  const cities = artistConcerts.map(concert => concert.city).slice(0, 4).join(", ");
  const minPrice = Math.min(...artistConcerts.map(concert => concert.price));

  return (
    <article className="event-card artist-card">
      <img src={artist.image} alt={artist.name} />
      <div className="event-card-content">
        <span className="tag">{artist.category}</span>
        <h3>{artist.name}</h3>
        <p>{artistConcerts.length} fecha(s) disponible(s)</p>
        <p className="venue">{cities}</p>
        <strong>Desde {minPrice.toFixed(2)} €</strong>
        <Link to={`/artistas/${artist.id}`} className="btn primary full">Ver entradas</Link>
      </div>
    </article>
  );
}
