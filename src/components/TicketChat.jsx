import { useState } from "react";
import { useTickets } from "../context/TicketContext";

export default function TicketChat({ ticket, role }) {

  const { sendMessage } = useTickets();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSend = () => {
    if (!text && !image) return;

    const message = {
      sender: role,
      text,
      image,
      time: new Date().toLocaleTimeString()
    };

    sendMessage(ticket.id, message);
    setText("");
    setImage(null);
  };

  return (
    <div className="flex flex-col h-[500px] border rounded-xl">

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">

        {ticket.messages?.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === role
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-xl max-w-xs shadow
              ${
                msg.sender === role
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              <p>{msg.text}</p>

              {msg.image && (
                <img
                  src={msg.image}
                  alt=""
                  className="mt-2 rounded-lg max-h-40"
                />
              )}

              <span className="text-xs opacity-70 block mt-1">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT AREA */}
      <div className="p-3 border-t flex gap-2">

        <input
          type="text"
          placeholder="Type message..."
          className="flex-1 border rounded-lg px-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files[0]))
          }
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}