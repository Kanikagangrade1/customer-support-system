import { useTickets } from "../../context/TicketContext";
import { useNavigate } from "react-router-dom";

export default function ManageTickets() {
  const { tickets, updateTicketStatus } = useTickets();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Tickets</h1>

      <div className="space-y-4">
        {tickets.map(ticket => (
          <div
            key={ticket.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{ticket.title}</h3>
              <p className="text-sm text-gray-500">
                Priority: {ticket.priority}
              </p>
              <p>Status: {ticket.status}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  navigate(`/admin/tickets/${ticket.id}`)
                }
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                View
              </button>

              <button
  onClick={() => updateTicketStatus(ticket.id, "Accepted")}
  className="bg-green-500 text-white px-3 py-1 rounded"
>
  Accept
</button>

              <button
                onClick={() =>
                  updateTicketStatus(ticket.id, "Rejected")
                }
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}