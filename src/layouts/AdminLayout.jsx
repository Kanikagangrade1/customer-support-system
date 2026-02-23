import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-600 text-white min-h-screen p-4">
        Admin Panel
      </div>

      {/* Page */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}