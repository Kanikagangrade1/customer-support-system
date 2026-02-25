import { NavLink } from "react-router-dom";

export default function UserSidebar() {
  return (
    <div className="w-64 bg-white h-screen shadow p-4">
      <h2 className="font-bold text-lg mb-6">Customer Panel</h2>

      <nav className="flex flex-col gap-3">

        <NavLink to="/user">
          Home
        </NavLink>

        <NavLink to="/user/raise">
          Raise Ticket
        </NavLink>

        <NavLink to="/user/tickets">
          My Tickets
        </NavLink>

      </nav>
    </div>
  );
}