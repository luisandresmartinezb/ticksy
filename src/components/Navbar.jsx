import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCart, getCurrentUser, logoutUser } from "../utils/storage";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const cartCount = getCart().reduce((total, item) => total + item.quantity, 0);

  function handleLogout() {
    logoutUser();
    navigate("/");
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">🤘</span>
        <span>Ticksy</span>
      </Link>

      <nav>
        <NavLink to="/eventos">Conciertos</NavLink>
        <NavLink to="/carrito">Carrito <span className="cart-count">{cartCount}</span></NavLink>
        <NavLink to="/mis-entradas">Mis entradas</NavLink>
        <NavLink to="/admin">Backstage</NavLink>
      </nav>

      <div className="nav-actions">
        {user ? (
          <>
            <span className="user-pill">{user.name}</span>
            <button onClick={handleLogout} className="btn secondary">Salir</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn secondary">Login</Link>
            <Link to="/registro" className="btn primary">Registro</Link>
          </>
        )}
      </div>
    </header>
  );
}
