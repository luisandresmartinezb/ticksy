import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveCurrentUser } from "../utils/storage";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    saveCurrentUser(form);
    navigate("/eventos");
  }

  return (
    <section className="auth card">
      <h1>Crear cuenta</h1>
      <p>Registro simulado guardado en localStorage.</p>

      <form onSubmit={handleSubmit}>
        <label>Nombre
          <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        </label>
        <label>Email
          <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        </label>
        <label>Contraseña
          <input type="password" required />
        </label>
        <button className="btn primary full">Registrarme</button>
      </form>

      <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
    </section>
  );
}
