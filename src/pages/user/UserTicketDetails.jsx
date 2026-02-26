import { useParams } from "react-router-dom";
import { useTickets } from "../../context/TicketContext";
import { useState } from "react";

function UserTicketDetails() {
  const { id } = useParams();
  const { tickets, sendMessage } = useTickets();

  const ticket = tickets.find(t => t.id === Number(id));

  const [message, setMessage] = useState("");

  if (!ticket) {
    return <div className="p-6">Ticket not found</div>;
  }

  const handleSend = () => {
    if (!message.trim()) return;

    sendMessage(ticket.id, {
      sender: "customer",
      text: message,
      time: new Date().toLocaleTimeString()
    });

    setMessage("");
  };

  return (
    <div className="p-6 space-y-4">

      <h2 className="text-2xl font-bold">{ticket.title}</h2>

      <div className="bg-white shadow rounded p-4">
        <p><b>Status:</b> {ticket.status}</p>
        {/* <p><b>Priority:</b> {ticket.priority}</p> */}
      </div>

      {/* CHAT AREA */}
      <div className="bg-gray-100 h-80 overflow-y-auto p-4 rounded space-y-2">
        {ticket.messages?.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded w-fit max-w-xs ${
              msg.sender === "customer"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-white"
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs opacity-70">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* MESSAGE INPUT */}
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default UserTicketDetails;