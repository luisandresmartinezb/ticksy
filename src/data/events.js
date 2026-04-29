// Archivo de datos de Ticksy.
// Aquí se separa artistas y conciertos para evitar repetir información.
// artists representa las tarjetas principales de bandas/festivales.
// concerts representa cada concierto concreto por ciudad.

export const artists = [
  {
    id: "mago-de-oz",
    name: "Mägo de Oz",
    category: "Folk Metal",
    image: "https://tiendawarnermusic.es/cdn/shop/collections/Mago_De_Oz_-_MALICIA_-_Banda_2025.jpg?v=1761912921&width=3840",
    description: "Folk metal, himnos, violines, fiesta y una puesta en escena pensada para cantar a pleno pulmón."
  },
  {
    id: "dunedain",
    name: "Dünedain",
    category: "Power Metal",
    image: "https://www.dunedain.es/erase/images/noticias/dunedain_erase_nuevo_album.jpg",
    description: "Power metal nacional con riffs rápidos, estribillos épicos y energía de sala pequeña a todo volumen."
  },
  {
    id: "zenobia",
    name: "Zenobia",
    category: "Heavy Metal",
    image: "https://d2x4qakry0y44a.cloudfront.net/wp-content/uploads/2022/04/29200944/Zenobia-banda.jpg",
    description: "Heavy metal melódico, directo potente y canciones preparadas para levantar los cuernos."
  },
  {
    id: "europe",
    name: "Europe",
    category: "Hard Rock",
    image: "https://cms.getrock.es/uploads/large_Europe_Promo_October_2025_2_credit_Andy_Ford_1_1_f1a9036c0a.webp",
    description: "Hard rock clásico con himnos legendarios, guitarras brillantes y estribillos inolvidables."
  },
  {
    id: "medina-azahara",
    name: "Medina Azahara",
    category: "Rock Andaluz",
    image: "https://www.baluarte.com/medios/63b384159ca943a9e8de7a440121bed7.jpg",
    description: "Rock andaluz con personalidad propia, melodías intensas y una historia enorme sobre los escenarios."
  },
  {
    id: "myrath",
    name: "Myrath",
    category: "Oriental Metal",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
    description: "Metal progresivo con influencias orientales, sonido épico y una propuesta diferente dentro del cartel."
  },
  {
    id: "leo-jimenez",
    name: "Leo Jiménez",
    category: "Heavy Metal",
    image: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?auto=format&fit=crop&w=1200&q=85",
    description: "Una de las voces más reconocibles del metal nacional, con un directo intenso y muy potente."
  },
  {
    id: "festivales-metal",
    name: "Festivales Metal",
    category: "Festivales",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=85",
    description: "Selección de festivales de rock y metal con varias bandas, merchandising y experiencia completa."
  }
];

export const concerts = [
  // MÄGO DE OZ
  {
    id: "mago-madrid",
    artistId: "mago-de-oz",
    artistName: "Mägo de Oz",
    title: "Mägo de Oz - Madrid",
    category: "Folk Metal",
    city: "Madrid",
    date: "2026-03-07",
    time: "20:30",
    place: "Palacio Vistalegre",
    price: 42.00
  },
  {
    id: "mago-pamplona",
    artistId: "mago-de-oz",
    artistName: "Mägo de Oz",
    title: "Mägo de Oz - Pamplona",
    category: "Folk Metal",
    city: "Pamplona",
    date: "2026-03-20",
    time: "21:00",
    place: "Sala Zentral",
    price: 36.00
  },
  {
    id: "mago-barcelona",
    artistId: "mago-de-oz",
    artistName: "Mägo de Oz",
    title: "Mägo de Oz - Barcelona",
    category: "Folk Metal",
    city: "Barcelona",
    date: "2026-03-21",
    time: "21:00",
    place: "Sala Razzmatazz",
    price: 39.00
  },
  {
    id: "mago-cordoba",
    artistId: "mago-de-oz",
    artistName: "Mägo de Oz",
    title: "Mägo de Oz - Córdoba",
    category: "Folk Metal",
    city: "Córdoba",
    date: "2026-05-15",
    time: "21:00",
    place: "Teatro de la Axerquía",
    price: 35.00
  },

  // DÜNEDAIN
  {
    id: "dunedain-valencia",
    artistId: "dunedain",
    artistName: "Dünedain",
    title: "Dünedain - Valencia",
    category: "Power Metal",
    city: "Valencia",
    date: "2026-01-30",
    time: "21:30",
    place: "Rock City",
    price: 26.00
  },
  {
    id: "dunedain-vitoria",
    artistId: "dunedain",
    artistName: "Dünedain",
    title: "Dünedain - Vitoria",
    category: "Power Metal",
    city: "Vitoria",
    date: "2026-02-21",
    time: "20:30",
    place: "Urban Rock Concept",
    price: 25.00
  },
  {
    id: "dunedain-murcia",
    artistId: "dunedain",
    artistName: "Dünedain",
    title: "Dünedain - Murcia",
    category: "Power Metal",
    city: "Murcia",
    date: "2026-02-28",
    time: "21:00",
    place: "Garaje Beat Club",
    price: 27.00
  },
  {
    id: "dunedain-madrid",
    artistId: "dunedain",
    artistName: "Dünedain",
    title: "Dünedain - Madrid",
    category: "Power Metal",
    city: "Madrid",
    date: "2026-04-11",
    time: "20:00",
    place: "Sala Copérnico",
    price: 30.00
  },
  {
    id: "dunedain-burgos",
    artistId: "dunedain",
    artistName: "Dünedain",
    title: "Dünedain - Burgos",
    category: "Power Metal",
    city: "Burgos",
    date: "2026-04-25",
    time: "21:00",
    place: "Sala Andén 56",
    price: 24.00
  },
  {
    id: "dunedain-valladolid",
    artistId: "dunedain",
    artistName: "Dünedain",
    title: "Dünedain - Valladolid",
    category: "Power Metal",
    city: "Valladolid",
    date: "2026-05-02",
    time: "21:00",
    place: "Sala Porta Caeli",
    price: 24.00
  },

  // ZENOBIA
  {
    id: "zenobia-cordoba",
    artistId: "zenobia",
    artistName: "Zenobia",
    title: "Zenobia - Córdoba",
    category: "Heavy Metal",
    city: "Córdoba",
    date: "2026-03-20",
    time: "21:00",
    place: "Sala M100",
    price: 23.00
  },
  {
    id: "zenobia-logrono",
    artistId: "zenobia",
    artistName: "Zenobia",
    title: "Zenobia - Logroño",
    category: "Heavy Metal",
    city: "Logroño",
    date: "2026-04-18",
    time: "21:00",
    place: "Sala Fundición",
    price: 24.00
  },
  {
    id: "zenobia-madrid",
    artistId: "zenobia",
    artistName: "Zenobia",
    title: "Zenobia - Madrid",
    category: "Heavy Metal",
    city: "Madrid",
    date: "2026-05-09",
    time: "20:30",
    place: "Sala Mon",
    price: 28.00
  },

  // EUROPE
  {
    id: "europe-bilbao",
    artistId: "europe",
    artistName: "Europe",
    title: "Europe - Bilbao",
    category: "Hard Rock",
    city: "Bilbao",
    date: "2026-10-05",
    time: "21:00",
    place: "Sala Santana 27",
    price: 58.00
  },
  {
    id: "europe-madrid",
    artistId: "europe",
    artistName: "Europe",
    title: "Europe - Madrid",
    category: "Hard Rock",
    city: "Madrid",
    date: "2026-10-07",
    time: "21:00",
    place: "La Riviera",
    price: 60.00
  },
  {
    id: "europe-barcelona",
    artistId: "europe",
    artistName: "Europe",
    title: "Europe - Barcelona",
    category: "Hard Rock",
    city: "Barcelona",
    date: "2026-10-09",
    time: "21:00",
    place: "Razzmatazz",
    price: 59.00
  },

  // MEDINA AZAHARA
  {
    id: "medina-cordoba",
    artistId: "medina-azahara",
    artistName: "Medina Azahara",
    title: "Medina Azahara - Córdoba",
    category: "Rock Andaluz",
    city: "Córdoba",
    date: "2026-04-05",
    time: "21:00",
    place: "Teatro de la Axerquía",
    price: 32.00
  },
  {
    id: "medina-sevilla",
    artistId: "medina-azahara",
    artistName: "Medina Azahara",
    title: "Medina Azahara - Sevilla",
    category: "Rock Andaluz",
    city: "Sevilla",
    date: "2026-04-18",
    time: "21:30",
    place: "Cartuja Center",
    price: 34.00
  },
  {
    id: "medina-madrid",
    artistId: "medina-azahara",
    artistName: "Medina Azahara",
    title: "Medina Azahara - Madrid",
    category: "Rock Andaluz",
    city: "Madrid",
    date: "2026-05-23",
    time: "21:00",
    place: "La Riviera",
    price: 36.00
  },

  // MYRATH
  {
    id: "myrath-madrid",
    artistId: "myrath",
    artistName: "Myrath",
    title: "Myrath - Madrid",
    category: "Oriental Metal",
    city: "Madrid",
    date: "2026-06-06",
    time: "20:30",
    place: "Sala Mon",
    price: 35.00
  },
  {
    id: "myrath-barcelona",
    artistId: "myrath",
    artistName: "Myrath",
    title: "Myrath - Barcelona",
    category: "Oriental Metal",
    city: "Barcelona",
    date: "2026-06-07",
    time: "20:30",
    place: "Razzmatazz 2",
    price: 35.00
  },

  // LEO JIMÉNEZ
  {
    id: "leo-madrid",
    artistId: "leo-jimenez",
    artistName: "Leo Jiménez",
    title: "Leo Jiménez - Madrid",
    category: "Heavy Metal",
    city: "Madrid",
    date: "2026-09-05",
    time: "21:00",
    place: "Sala But",
    price: 30.00
  },
  {
    id: "leo-burgos",
    artistId: "leo-jimenez",
    artistName: "Leo Jiménez",
    title: "Leo Jiménez - Burgos",
    category: "Heavy Metal",
    city: "Burgos",
    date: "2026-09-19",
    time: "21:00",
    place: "Sala Andén 56",
    price: 27.00
  },
  {
    id: "leo-valencia",
    artistId: "leo-jimenez",
    artistName: "Leo Jiménez",
    title: "Leo Jiménez - Valencia",
    category: "Heavy Metal",
    city: "Valencia",
    date: "2026-10-03",
    time: "21:00",
    place: "Rock City",
    price: 29.00
  },

  // FESTIVALES
  {
    id: "leyendas-rock",
    artistId: "festivales-metal",
    artistName: "Festival",
    title: "Leyendas del Rock",
    category: "Festival Metal",
    city: "Villena",
    date: "2026-08-08",
    time: "17:00",
    place: "Polideportivo Municipal de Villena",
    price: 89.00
  },
  {
    id: "rock-imperium",
    artistId: "festivales-metal",
    artistName: "Festival",
    title: "Rock Imperium Fest",
    category: "Festival Rock",
    city: "Cartagena",
    date: "2026-09-12",
    time: "16:00",
    place: "Parque El Batel",
    price: 95.00
  },
  {
    id: "resurrection-fest",
    artistId: "festivales-metal",
    artistName: "Festival",
    title: "Resurrection Fest",
    category: "Festival Metal",
    city: "Viveiro",
    date: "2026-06-25",
    time: "16:00",
    place: "Recinto Festivalero de Viveiro",
    price: 120.00
  }
];

export const bands = ["Todas", ...artists.map(artist => artist.name)];
export const cities = ["Todas", ...Array.from(new Set(concerts.map(concert => concert.city))).sort()];

// Compatibilidad con componentes anteriores
export const events = concerts.map(concert => {
  const artist = artists.find(item => item.id === concert.artistId);
  return {
    ...concert,
    band: concert.artistName,
    image: artist?.image,
    description: artist?.description
  };
});
