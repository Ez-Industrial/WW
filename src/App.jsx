import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Home from "./pages/home";
import Registrar from "./pages/registrar";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;