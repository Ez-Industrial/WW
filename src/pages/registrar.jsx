import { useState } from "react";
import { registrarUsuario } from "../firebaseService"; // Asegúrate de la ruta correcta
import { useNavigate } from "react-router-dom";

const Registrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registrarUsuario(email, password);
      navigate("/perfil"); // Redirige al perfil tras el registro exitoso
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  return (
      <div className= "contenedor-centro">
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registrar;