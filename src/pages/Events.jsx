import { useState } from "react";
import { artists, cities, concerts } from "../data/events";
import ArtistCard from "../components/ArtistCard";

export default function Events() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("Todas");

  const filteredArtists = artists.filter(artist => {
    const matchesSearch =
      artist.name.toLowerCase().includes(search.toLowerCase()) ||
      artist.category.toLowerCase().includes(search.toLowerCase());

    const matchesCity =
      selectedCity === "Todas" ||
      concerts.some(concert => concert.artistId === artist.id && concert.city === selectedCity);

    return matchesSearch && matchesCity;
  });

  return (
    <section>
      <div className="page-heading">
        <h1>Bandas y festivales</h1>
        <p>Elige una banda para ver sus próximos conciertos y comprar entradas por ciudad.</p>
      </div>

      <div className="filters artist-filters">
        <input
          className="search"
          placeholder="Buscar Mägo de Oz, Dünedain, Zenobia, Medina Azahara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          {cities.map(city => <option key={city}>{city}</option>)}
        </select>
      </div>

      <div className="grid">
        {filteredArtists.map(artist => <ArtistCard key={artist.id} artist={artist} />)}
      </div>
    </section>
  );
}
