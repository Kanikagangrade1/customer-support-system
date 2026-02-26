import { useParams } from "react-router-dom";
import { useTickets } from "../../context/TicketContext";

export default function AdminTicketDetails() {
  const { id } = useParams();
  const { tickets } = useTickets();

  // find ticket by id
  const ticket = tickets.find(t => t.id === Number(id));

  if (!ticket) {
    return <h2 className="text-red-500">Ticket not found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
      <h1 className="text-2xl font-bold mb-6">
        Ticket Details
      </h1>

      <div className="space-y-4">

        <p>
          <strong>Ticket ID:</strong> #{ticket.id}
        </p>

        <p>
          <strong>Title:</strong> {ticket.title}
        </p>

        <p>
          <strong>Description:</strong> {ticket.description}
        </p>

        <p>
          <strong>Priority:</strong> {ticket.priority}
        </p>

        <p>
          <strong>Status:</strong> {ticket.status}
        </p>

        <p>
          <strong>Created At:</strong>{" "}
          {new Date(ticket.createdAt).toLocaleString()}
        </p>

      </div>
    </div>
  );
}