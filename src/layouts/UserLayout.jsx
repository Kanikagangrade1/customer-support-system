import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="flex">
      <div className="w-64 bg-purple-600 text-white min-h-screen p-4">
        Customer Panel
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}