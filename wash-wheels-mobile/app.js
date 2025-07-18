// App.js
import React from "react";
import AppNavigator from "./src/navigation/index";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}