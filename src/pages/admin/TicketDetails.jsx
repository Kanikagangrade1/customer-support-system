import { useParams } from "react-router-dom";
import { useTickets } from "../../context/TicketContext";
import { useState } from "react";

export default function TicketDetails() {
  const { id } = useParams();
  const { tickets } = useTickets();

  const ticket = tickets.find((t) => String(t.id) === id);

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  if (!ticket)
    return (
      <h2 className="text-xl font-bold text-red-500 p-6">
        Ticket not found
      </h2>
    );

  /*  TIMELINE LOGIC  */

  const steps = ["Pending", "Accepted", "Resolved"];
  const currentStep = steps.indexOf(ticket.status);

  /*  CHAT SEND  */

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        message: text,
        sender: "Admin",
        time: new Date().toLocaleTimeString(),
      },
    ]);

    setText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* PAGE GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/*  LEFT SIDE  */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">

          {/* HEADER */}
          <h1 className="text-2xl font-bold mb-2 text-center">
            Ticket #{ticket.id}
          </h1>

          <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">
            {ticket.title}
          </h2>

          {/* TIMELINE */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Ticket Progress</h3>

            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step} className="flex-1 text-center relative">

                  {/* LINE */}
                  {index !== steps.length - 1 && (
                    <div
                      className={`absolute top-4 left-1/2 w-full h-1 ${
                        index < currentStep
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}

                  {/* CIRCLE */}
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-white font-bold relative z-10
                      ${
                        index <= currentStep
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                  >
                    ✓
                  </div>

                  <p className="mt-2 text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-4">
            <Info label="Description" value={ticket.description} />
            <Info label="Priority" value={ticket.priority} />
            <Info label="Status" value={ticket.status} />
            <Info
              label="Created At"
              value={new Date(ticket.createdAt).toLocaleString()}
            />
          </div>
        </div>

        {/*  RIGHT SIDE CHAT  */}
        <div className="bg-white rounded-xl shadow flex flex-col h-[75vh]">

          {/* CHAT HEADER */}
          <div className="border-b p-4 font-semibold">
            Admin Conversation
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-gray-400 text-center">
                No messages yet
              </p>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-indigo-100 p-3 rounded-lg max-w-xs ml-auto"
              >
                <p className="text-sm">{msg.message}</p>
                <span className="text-xs text-gray-500">
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="border-t p-3 flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type message..."
              className="flex-1 border rounded px-3 py-2 focus:outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*  SMALL INFO COMPONENT  */

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}