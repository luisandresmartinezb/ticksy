import { Link } from "react-router-dom";
import { artists } from "../data/events";
import ArtistCard from "../components/ArtistCard";

export default function Home() {
  const featuredArtists = artists.filter(artist => artist.id !== "festivales-metal").slice(0, 4);
  const festivalArtist = artists.find(artist => artist.id === "festivales-metal");

  return (
    <section>
      <div className="hero">
        <div>
          <span className="tag">🤘 Ticksy Metal Tickets</span>
          <h1>Entradas para metaleros, rockeros y amantes del directo</h1>
          <p>
            Compra entradas simuladas para conciertos de Mägo de Oz, Dünedain,
            Zenobia, Europe, Medina Azahara, Myrath, Leo Jiménez y festivales.
            Entra en una banda, elige ciudad y añade tus entradas al carrito.
          </p>
          <div className="hero-actions">
            <Link to="/eventos" className="btn primary">Ver bandas</Link>
            <Link to="/carrito" className="btn secondary">Ir al carrito</Link>
          </div>
        </div>
      </div>

      <h2>Bandas destacadas</h2>
      <div className="grid four">
        {featuredArtists.map(artist => <ArtistCard key={artist.id} artist={artist} />)}
      </div>

      <h2 className="section-title">Festivales</h2>
      <div className="grid two">
        {festivalArtist && <ArtistCard artist={festivalArtist} />}
      </div>
    </section>
  );
}
