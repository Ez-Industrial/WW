// src/pages/AdminPanel.jsx
import React from "react";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function AdminPanel() {
  // obliga a rol = "admin"
  useRequireAuth({ allowedRoles: ["admin"] });

  return <h1>Panel de administración</h1>;
}