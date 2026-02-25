import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role }) {
  const { user } = useAuth();

  // not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // role mismatch
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}