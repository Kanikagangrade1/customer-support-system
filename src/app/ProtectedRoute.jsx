import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role }) {
  const { user, admin } = useAuth();

  // check login based on role
  if (role === "admin" && !admin) {
    return <Navigate to="/admin" replace />;
  }

  if (role === "user" && !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}