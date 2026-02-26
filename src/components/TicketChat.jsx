// import React, { useState } from "react";

// const TicketChat = ({ ticketId }) => {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   const sendMessage = () => {
//     if (!text.trim()) return;

//     setMessages([
//       ...messages,
//       { id: Date.now(), message: text, sender: "admin" }
//     ]);

//     setText("");
//   };

//   return (
//     <div className="h-full flex flex-col">

//       <h2 className="p-4 font-bold border-b bg-gray-100">
//         Ticket Chat
//       </h2>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         {messages.map(msg => (
//           <div
//             key={msg.id}
//             className="bg-blue-100 p-2 rounded w-fit"
//           >
//             {msg.message}
//           </div>
//         ))}
//       </div>

//       {/* Input */}
//       <div className="p-3 border-t flex gap-2">
//         <input
//           value={text}
//           onChange={e => setText(e.target.value)}
//           className="flex-1 border p-2 rounded"
//           placeholder="Type message..."
//         />

//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 text-white px-4 rounded"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TicketChat;