import { useNavigate } from "react-router-dom";
import { useTicket } from "../../context/TicketContext";

export default function AdminTickets() {
  const { tickets } = useTicket();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Tickets</h1>

      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => navigate(`/admin/ticket/${ticket.id}`)}
          className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="font-semibold">{ticket.title}</h2>
          <p>Status: {ticket.status}</p>
          <p>Priority: {ticket.priority}</p>
        </div>
      ))}
    </div>
  );
}