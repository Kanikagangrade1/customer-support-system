import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside
        className={`bg-indigo-700 text-white w-64 p-5 space-y-6
        fixed md:relative h-full z-20
        ${open ? "left-0" : "-left-64"} md:left-0 transition-all`}
      >
        <h1 className="text-2xl font-bold">💊 Pharma Support</h1>

        <nav className="space-y-3 mt-8">

          {user?.role === "admin" && (
            <>
              <button onClick={()=>nav("/admin")}
                className="block w-full text-left hover:bg-indigo-500 p-2 rounded">
                Dashboard
              </button>

              <button onClick={()=>nav("/admin/tickets")}
                className="block w-full text-left hover:bg-indigo-500 p-2 rounded">
                Tickets
              </button>
            </>
          )}

          {user?.role === "user" && (
            <>
              <button onClick={()=>nav("/user/raise")}
                className="block w-full text-left hover:bg-indigo-500 p-2 rounded">
                Raise Ticket
              </button>

              <button onClick={()=>nav("/user/mytickets")}
                className="block w-full text-left hover:bg-indigo-500 p-2 rounded">
                My Tickets
              </button>
            </>
          )}

        </nav>

        <button
          onClick={handleLogout}
          className="absolute bottom-6 bg-red-500 w-52 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <h2 className="font-semibold">
            Welcome, {user?.role.toUpperCase()}
          </h2>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6 overflow-y-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}