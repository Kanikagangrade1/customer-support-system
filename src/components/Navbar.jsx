import { Bell } from "lucide-react";
import { useTickets } from "../context/TicketContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const ticketContext = useTickets();
const tickets = ticketContext?.tickets || [];
  const { user, switchRole } = useAuth();

  const pending = tickets.filter(t => t.status === "Pending").length;

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h2 className="font-semibold text-lg">
        Customer Support
      </h2>

      <div className="flex items-center gap-6">

        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell />
          {pending > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {pending}
            </span>
          )}
        </div>

        <button
          onClick={switchRole}
          className="bg-indigo-600 text-white px-3 py-1 rounded-lg"
        >
          {user?.role}
        </button>
      </div>
    </div>
  );
}