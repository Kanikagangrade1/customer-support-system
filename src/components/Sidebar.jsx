import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { user, switchRole } = useAuth();
  const location = useLocation();

  // ✅ ADMIN LINKS
  const adminLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Tickets", path: "/admin/tickets" },
    { name: "Active Users", path: "/admin/users" },
  ];

  // ✅ CUSTOMER LINKS
  const customerLinks = [
    { name: "Home", path: "/user" },
    { name: "Raise Ticket", path: "/user/raise" },
    { name: "My Tickets", path: "/user/tickets" },
  ];

  // ✅ Role Based Navigation
  const links =
    user?.role === "admin" ? adminLinks : customerLinks;

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-indigo-600 to-blue-700 text-white flex flex-col">

      {/* Logo */}
      <div className="p-5 text-2xl font-bold border-b border-white/20">
        {user?.role === "admin" ? "Support Admin" : "Customer Panel"}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`block p-3 rounded-lg transition ${
              location.pathname === link.path
                ? "bg-white text-indigo-700 font-semibold"
                : "hover:bg-white/20"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-white/20">
        <p className="text-sm">Logged as:</p>
        <p className="font-semibold capitalize">{user?.role}</p>

        {/* Demo Role Switch */}
        <button
          onClick={switchRole}
          className="mt-3 w-full bg-white text-indigo-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200"
        >
          Switch Role
        </button>
      </div>
    </div>
  );
}

export default Sidebar;