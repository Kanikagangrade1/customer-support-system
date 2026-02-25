import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkStyle =
    "block px-4 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition";

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        Admin Panel
      </h1>

      <nav className="space-y-2">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-indigo-600" : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/tickets"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-indigo-600" : ""}`
          }
        >
          Manage Tickets
        </NavLink>

        <NavLink
          to="/login"
          className={linkStyle}
        >
          Logout
        </NavLink>

      </nav>
    </div>
  );
}