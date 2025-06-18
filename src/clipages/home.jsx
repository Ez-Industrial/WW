import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="contenedor-centro">
      <h1>Wash Wheels</h1>
      <h2>Inicio para solicitar lavado</h2>
    </div>
    
  );
}

export default Home;