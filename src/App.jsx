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

function App() {
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
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;