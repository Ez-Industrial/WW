import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Registrar from "./pages/registrar";
import Prueba from "./pages/prueba";
import Perfil from "./pages/Perfil";
import Home from "./clipages/home";
import Homelav from "./lavpages/homelav";
import { AuthProvider } from "./AuthContext";
import IniciarSesion from "./pages/IniciarSesion";
import AsignarRol from "./pages/AsignarRol";
import VerifyEmail from "./VerifyEmail";
import CheckEmail from "./check-email"
import SolicitudForm from "./pages/SolicitudForm";
import Fuentes from "./pages/Fuentes";
function App(){
  return (
   <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/homelav" element={<Homelav />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/__/auth/action" element={<VerifyEmail />} />
        <Route path= "/usuariorol" element={<AsignarRol />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/formulario" element={<SolicitudForm />} />
        <Route path="/fuentes" element={<Fuentes/>}/>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;