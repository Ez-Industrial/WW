//guard-hook.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function useRequireAuth(options = {}) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    redirectTo       = "/iniciarsesion",
    requireVerified  = false,
    allowedRoles     = null  // ej: ["admin","lavador"]
  } = options;

  useEffect(() => {
    if (!user) {
      navigate(redirectTo, {
        replace: true,
        state: { from: location }
      });
      return;
    }
    if (requireVerified && !user.emailVerified) {
      navigate("/", { replace: true });
      return;
    }
    if (
      Array.isArray(allowedRoles) &&
      !allowedRoles.includes(user.rol)
    ) {
      navigate("/no-autorizado", { replace: true });
    }
  }, [
    user,
    navigate,
    location,
    redirectTo,
    requireVerified,
    allowedRoles
  ]);
}