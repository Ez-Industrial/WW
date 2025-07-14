import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAuth, applyActionCode }      from "firebase/auth";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate       = useNavigate();
  const [status, setStatus] = useState("Verificando tu correo…");

  useEffect(() => {
  console.log("PATHNAME:", window.location.pathname);
  console.log("RAW SEARCH:", window.location.search);  
  const mode1    = searchParams.get("mode");
  const oob1     = searchParams.get("oobCode");
  console.log("via useSearchParams →", { mode1, oob1 });
  const urlParams = new URLSearchParams(window.location.search);
  const mode2     = urlParams.get("mode");
  const oob2      = urlParams.get("oobCode");
  console.log("via URLSearchParams →", { mode2, oob2 });
  const continueUrl = urlParams.get("continueUrl");
  let mode3, oob3;
  if (continueUrl) {
    const nested = new URL(continueUrl);
    mode3 = nested.searchParams.get("mode");
    oob3   = nested.searchParams.get("oobCode");
    console.log("inside continueUrl →", { mode3, oob3 });
  }

  const mode    = mode1 || mode2 || mode3;
  const oobCode = oob1  || oob2  || oob3;

  console.log("FINAL params →", { mode, oobCode });
  if (mode !== "verifyEmail" || !oobCode) {
    setStatus("Enlace inválido o incompleto.");  
    return;
  }
  applyActionCode(getAuth(), oobCode)
    .then(() => {
      setStatus("✅ ¡Correo verificado con éxito!");
      setTimeout(() => navigate("/", { replace: true }), 2000);
    })
    .catch(err => {
      console.error("Error applying action code:", err.code, err.message);
      setStatus("❌ Error: " + err.message);
    });
}, [searchParams, navigate]);

  return (
    <div className="contenedor-centro">
      <h2>Verificación de correo</h2>
      <p>{status}</p>
    </div>
  );
}