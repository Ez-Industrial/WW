//registrar
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registrarUsuario } from "../firebaseService"
const Registrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => { setShowPassword(!showPassword);};

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("Email:", email, "– type:", typeof email);
      const user = await registrarUsuario(email, password);
      await updateProfile(user, { displayName: username });
      
      const payload = {
      uid:    user.uid,
      nombre: username || "Invitado",
      email:  user.email,
      rol: "cliente" };

      const res = await axios.post(
        "https://washwheels.vercel.app/api/usuarios",
       payload
      );
      console.log("✅ Backend respondió:", res.data);


       navigate("/check-email");
    } catch (error) {
      console.error("❌ Error en registro:", error);
      const msg = error.code === "auth/email-already-in-use"
        ? "Correo ya registrado. Inicia sesión."
        : "Ocurrió un error. Revisa la consola.";
      alert(msg);
    }
  };



  return (
      <div className= "contenedor-centro">
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <div className="password-container" style={{ position: 'relative', display: 'inline-block' }}>
          <input
            type={showPassword ? 'text' : 'password'} placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ paddingRight: '40px' }} />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}
            style={{  position: 'absolute',  right: '10px',  top: '50%',  transform: 'translateY(-50%)',  cursor: 'pointer'  }}> {showPassword ? '🙈' : '👁️'}
          </span>
          </div>
        <button type="submit">Registrarse</button>
      </form>
    <div className= "contenedor-centro">
      <p>¿Ya tienes una cuenta? <a href="/iniciarsesion">Iniciar sesión</a></p>
    </div>
    </div>
  );
};

export default Registrar;