import { useNavigate } from "react-router-dom";
function Sobre() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className= "contenedor-centro">
      <h1>Esta es la página Sobre</h1>
      <button onClick={handleClick}>Ir a Home</button>
    </div>
  );
}

export default Sobre;

