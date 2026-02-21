import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, switchRole } = useAuth();

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between">
      <h2 className="font-semibold">
        Customer Support System
      </h2>

      <div className="flex gap-4 items-center">
        <span className="text-sm">
          {user.name} ({user.role})
        </span>

        <button
          onClick={switchRole}
          className="bg-indigo-600 text-white px-3 py-1 rounded"
        >
          Switch Role
        </button>
      </div>
    </div>
  );
}