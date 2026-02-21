import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div className="w-64 bg-indigo-700 text-white p-5 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">
        Pharma Support
      </h1>

      {user.role === "admin" ? (
        <nav className="space-y-4">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/tickets">Tickets</Link>
          <Link to="/admin/users">Active Users</Link>
        </nav>
      ) : (
        <nav className="space-y-4">
          <Link to="/">Home</Link>
          <Link to="/raise-ticket">Raise Ticket</Link>
          <Link to="/my-tickets">My Tickets</Link>
        </nav>
      )}
    </div>
  );
}