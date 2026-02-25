import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/tickets">Manage Tickets</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}