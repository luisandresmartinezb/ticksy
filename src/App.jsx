import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import ArtistDetail from "./pages/ArtistDetail";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyTickets from "./pages/MyTickets";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/eventos/:id" element={<EventDetail />} />
          <Route path="/artistas/:id" element={<ArtistDetail />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/compra-realizada" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/mis-entradas" element={<MyTickets />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </>
  );
}
