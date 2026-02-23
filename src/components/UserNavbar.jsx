import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UserNavbar() {
  const { logout } = useAuth();

  return (
    <nav>
      <Link to="/user">Home</Link>
      <Link to="/user/raise">Raise Ticket</Link>
      <Link to="/user/tickets">My Tickets</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}