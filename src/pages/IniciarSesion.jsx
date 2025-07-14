import { useNavigate } from "react-router-dom";
import { ingresarUsuario } from "../firebaseService";
import { useState } from "react";

function IniciarSesion () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await ingresarUsuario(email, password);
      console.log("Inicio de sesión OK:", user.uid);

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error iniciar sesión:", error);
      alert(
        error.code === "auth/user-not-found"
          ? "Usuario no encontrado"
          : error.message
      );
    }
  };

  return (
    <div className="contenedor-centro">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin} className="formulario">
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} required className="input"/>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required className="input"/>
        <div className="password-container">
          <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)} > {showPassword ? '🙈' : '👁️'} </span>
        </div>
        <button type="submit" className="button">
          Iniciar sesión
        </button>
      </form>
      <div className= "contenedor-centro">
      <p>¿No tienes una cuaenta? <a href="/registrar">Registrarse</a></p>
      </div>
    </div>
  );
};

export default IniciarSesion;