// src/components/ProtectedRoute.tsx
import { useUser } from "@clerk/clerk-react";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    // Mientras se carga el estado de autenticación se puede mostrar un loader o mensaje de espera.
    return <div>Cargando...</div>;
  }

  if (!isSignedIn) {
    // Si el usuario no está autenticado, redirige al login.
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
