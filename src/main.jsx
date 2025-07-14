import { StrictMode } from "react";
import { createRoot }   from "react-dom/client";
import "./index.css";
import App             from "./App.jsx";
import { AuthProvider } from "./AuthContext.jsx";  // ← importa tu provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>          {/* ← envuelve App */}
      <App />
    </AuthProvider>
  </StrictMode>
);