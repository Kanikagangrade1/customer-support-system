import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-8">
          Pharma Admin
        </h2>

        <nav className="space-y-4">
          <Link to="/admin" className="block hover:text-gray-200">
            Dashboard
          </Link>

          <Link to="/admin/tickets" className="block hover:text-gray-200">
            Tickets
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}