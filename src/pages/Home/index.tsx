import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Skapa UI Demo</h1>
      <Link to="/demo">Ir para tela de demonstração</Link>
    </div>
  );
}
