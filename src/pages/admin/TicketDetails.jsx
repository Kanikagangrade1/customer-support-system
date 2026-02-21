import { useParams } from "react-router-dom";
import { useTicket } from "../../context/TicketContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import StatusBadge from "../../components/StatusBadge";

export default function TicketDetails() {
  const { id } = useParams();
  const { tickets, sendMessage, updateStatus } = useTicket();
  const { user } = useAuth();

  const ticket = tickets.find(t => t.id === Number(id));
  const [msg, setMsg] = useState("");

  if (!ticket) return <div>Ticket not found</div>;

  const send = () => {
    if (!msg) return;
    sendMessage(ticket.id, user.role, msg);
    setMsg("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-xl font-bold">{ticket.title}</h1>

        <StatusBadge status={ticket.status} />

        <p className="mt-2">{ticket.description}</p>

        {ticket.screenshot && (
          <img
            src={ticket.screenshot}
            className="mt-4 rounded-lg max-h-60"
          />
        )}

        {/* STATUS BUTTONS */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => updateStatus(ticket.id, "Accepted")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Accept
          </button>

          <button
            onClick={() => updateStatus(ticket.id, "Resolved")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Resolve
          </button>
        </div>
      </div>

      {/* CHAT BOX */}
      <div className="bg-white mt-6 rounded-xl shadow p-4">
        <div className="h-64 overflow-y-auto space-y-2">
          {ticket.chat.map((c, i) => (
            <div
              key={i}
              className={`p-2 rounded max-w-xs ${
                c.sender === "admin"
                  ? "bg-blue-100 ml-auto"
                  : "bg-gray-100"
              }`}
            >
              <p>{c.message}</p>
              <span className="text-xs">{c.time}</span>
            </div>
          ))}
        </div>

        <div className="flex mt-4 gap-2">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="border flex-1 p-2 rounded"
            placeholder="Type message..."
          />
          <button
            onClick={send}
            className="bg-indigo-600 text-white px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}