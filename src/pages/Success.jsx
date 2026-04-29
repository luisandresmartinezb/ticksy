import { Link } from "react-router-dom";

export default function Success() {
  return (
    <section className="success card">
      <div className="success-icon">🤘</div>
      <h1>Entrada comprada</h1>
      <p>
        Tu compra simulada se ha realizado correctamente. El PDF de la entrada se ha
        descargado automáticamente y también puedes verla desde “Mis entradas”.
      </p>

      <div className="hero-actions success-actions">
        <Link to="/mis-entradas" className="btn primary">Ver mis entradas</Link>
        <Link to="/eventos" className="btn secondary">Comprar otra entrada</Link>
      </div>
    </section>
  );
}
