// src/modules/dashboard/pages/DashboardPage.tsx
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Routes, Route, Navigate } from "react-router-dom";
import VerticalNavbar from "../components/VerticalNavbar";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { getUserByClerkId } from "../services/userService";
import Inicio from "../components/ClientMode/Inicio";
import Historial from "../components/ClientMode/Historial";
import Pago from "../components/ClientMode/Pago";
import Stats from "../components/AdminMode/Stats";
import Clients from "../components/AdminMode/Clients";
import Admins from "../components/AdminMode/Admins";

declare global {
  interface Window {
    mercadoPagoInitialized?: boolean;
  }
}

const DashboardPage: React.FC = () => {
  const { user } = useUser();
  const [role, setRole] = useState<"CLIENT" | "ADMIN" | null>(null);

  // Petición al backend al cargar el dashboard
  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user?.id) return;
      try {
        const userData = await getUserByClerkId(user.id);
        console.log("🔐 Usuario desde backend:", userData);
        setRole(userData.role);
      } catch (err) {
        console.error("Error al obtener el usuario:", err);
      } 
    };

    fetchUserRole();
  }, [user]);

  // if (loading) return <div className="p-6">Cargando...</div>;

  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        {/* Vertical Navbar */}
        <VerticalNavbar role={role} />

        {/* Contenedor con scroll interno y el contenido dinámico */}
        <div className="flex-1 h-full p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">
              Bienvenid@, {user?.firstName}!
            </h1>
            <h2 className="inline-block bg-primary-light text-white text-xs font-semibold rounded-full px-4 py-2 mb-2">{role}</h2>
          </div>

          {/* Secciones del dashboard */}
          <Routes>
          {role === "CLIENT" ? (
            <>
              <Route path="inicio" element={<Inicio />} />
              <Route path="historial" element={<Historial />} />
              <Route path="pago" element={<Pago />} />
              <Route index element={<Navigate to="inicio" replace />} />
            </>
          ) : role === "ADMIN" ? (
            <>
              <Route path="stats" element={<Stats />} />
              <Route path="clients" element={<Clients />} />
              <Route path="admins" element={<Admins />} />
              <Route index element={<Navigate to="stats" replace />} />
            </>
          ) : null}
        </Routes>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
