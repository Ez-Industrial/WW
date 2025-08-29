// App.js
import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import AppContent from "./src/AppContent"


export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}