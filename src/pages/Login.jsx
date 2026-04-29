import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveCurrentUser } from "../utils/storage";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    saveCurrentUser({
      name: email.split("@")[0] || "Usuario",
      email
    });
    navigate("/eventos");
  }

  return (
    <section className="auth card">
      <h1>Iniciar sesión</h1>
      <p>Login simulado para la demo de Ticksy.</p>

      <form onSubmit={handleSubmit}>
        <label>Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Contraseña
          <input type="password" required />
        </label>
        <button className="btn primary full">Entrar</button>
      </form>

      <p>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></p>
    </section>
  );
}
