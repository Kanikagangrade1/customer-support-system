import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminNavbar() {
  const { logout } = useAuth();

  return (
    <nav>
      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/tickets">Tickets</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}