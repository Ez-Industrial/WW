import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Home from "./pages/home";
import Registrar from "./pages/registrar";
import Perfil from "./pages/Perfil";
import Homelav from "./lavpages/homelav";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/homelav" element={<Homelav />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;