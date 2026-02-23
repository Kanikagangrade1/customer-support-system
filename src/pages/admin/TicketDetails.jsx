import { useParams } from "react-router-dom";
import { useTickets } from "../../context/TicketContext";
import TicketChat from "../../components/TicketChat";

export default function TicketDetails() {

  const { id } = useParams();
  const { getTicket } = useTickets();

  const ticket = getTicket(id);

  if (!ticket) return <p>Ticket not found</p>;

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">
        {ticket.title}
      </h1>

      <p className="text-gray-600">
        {ticket.description}
      </p>
      
      
      <p className="text-sm text-gray-500">
  Email: {ticket.email}
</p>
{ticket.file && (
  <a
    href={ticket.file}
    target="_blank"
    rel="noreferrer"
    className="text-blue-600 underline"
  >
    View Attachment
  </a>
)}

      {/* CHAT */}
      <TicketChat ticket={ticket} role="admin" />

    </div>
  );
}