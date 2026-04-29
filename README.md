# 🤘 Ticksy

Ticksy es una aplicación web desarrollada en React que simula una plataforma de venta de entradas para conciertos de metal, rock y festivales.  

La idea del proyecto es crear una experiencia similar a una plataforma de venta de entradas, pero enfocada a público metalero y rockero.

---

## Funcionalidades principales

- Listado de bandas y festivales.
- Ficha individual de cada artista.
- Próximos conciertos organizados por ciudad.
- Carrito de compra.
- Registro e inicio de sesión simulado.
- Compra simulada de entradas.
- Generación de tickets en PDF.
- Historial de entradas compradas.
- Panel Backstage/Admin.
- Diseño responsive con estética metalera.

---

## Estructura de datos

Los datos principales están en:

```txt
src/data/events.js
```

El proyecto separa la información en dos partes:

### `artists`

Contiene los datos principales de cada banda o festival:

```js
{
  id: "mago-de-oz",
  name: "Mägo de Oz",
  category: "Folk Metal",
  image: "...",
  description: "..."
}
```

### `concerts`

Contiene cada concierto concreto por ciudad:

```js
{
  id: "mago-madrid",
  artistId: "mago-de-oz",
  city: "Madrid",
  date: "2026-03-07",
  place: "Palacio Vistalegre",
  price: 42
}
```

La relación se hace mediante `artistId`.

Esto evita crear muchas tarjetas repetidas de la misma banda y permite mostrar una ficha de artista con todos sus conciertos disponibles.

---

## 🛒 Flujo de usuario

1. El usuario entra en el listado de bandas.
2. Selecciona una banda o festival.
3. Ve los próximos conciertos por ciudad.
4. Añade entradas al carrito o compra directamente.
5. Confirma la compra simulada.
6. Se genera una entrada en PDF.
7. La entrada queda guardada en “Mis entradas”.

---

## Persistencia

La aplicación utiliza `localStorage` para simular un backend:

- `ticksy_user`: usuario actual.
- `ticksy_cart`: carrito de compra.
- `ticksy_tickets`: entradas compradas.

---

## 🛠️ Tecnologías utilizadas

- React
- Vite
- React Router DOM
- jsPDF
- qrcode
- CSS
- localStorage

---

## Estructura principal

```txt
src/
 ├─ components/
 │   ├─ ArtistCard.jsx
 │   ├─ EventCard.jsx
 │   └─ Navbar.jsx
 │
 ├─ data/
 │   └─ events.js
 │
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ Events.jsx
 │   ├─ ArtistDetail.jsx
 │   ├─ Cart.jsx
 │   ├─ Checkout.jsx
 │   ├─ MyTickets.jsx
 │   └─ Admin.jsx
 │
 ├─ utils/
 │   ├─ storage.js
 │   └─ pdf.js
 │
 ├─ App.jsx
 └─ styles.css
```

---

## Cómo cambiar imágenes

Las imágenes se cambian en:

```txt
src/data/events.js
```

Dentro del array `artists`, en la propiedad `image`.

Ejemplo con URL externa:

```js
image: "https://web.com/imagen.jpg"
```

Ejemplo con imagen local:

```txt
public/images/dunedain.jpg
```

Y en el código:

```js
image: "/images/dunedain.jpg"
```

Usar imágenes locales evita problemas de enlaces externos o CORS.

---

## Instalación

```bash
npm install
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Nota

Este proyecto es académico. No procesa pagos reales. La compra, el login y el carrito están simulados mediante `localStorage`.


## Generación de PDF y QR

El PDF de la entrada se genera en:

```txt
src/utils/pdf.js
```

```bash
npm install qrcode
```

La entrada incluye:

- Nombre del concierto
- Ciudad y sala
- Fecha y hora
- Número de entradas
- Total pagado
- Código único
- QR dinámico con los datos del ticket

Para el QR se utiliza la librería `qrcode`, que genera una imagen en base64 y después se inserta dentro del PDF con `jsPDF`.

