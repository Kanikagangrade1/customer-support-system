import { useParams } from "react-router-dom";
import { useTickets } from "../../context/TicketContext";

export default function TicketDetails() {
  const { id } = useParams();
  const { tickets } = useTickets();

  // ✅ convert id to number
  const ticket = tickets.find(
    (t) => t.id === Number(id)
  );

  if (!ticket) return <h2>Ticket not found</h2>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">
        {ticket.title}
      </h1>

      <p><b>Description:</b> {ticket.description}</p>
      <p><b>Priority:</b> {ticket.priority}</p>

      <p>
        <b>Status:</b>{" "}
        <span className="font-semibold">
          {ticket.status}
        </span>
      </p>

      <p>
        <b>Created:</b>{" "}
        {new Date(ticket.createdAt).toLocaleString()}
      </p>
    </div>
  );
}