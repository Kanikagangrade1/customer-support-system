import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  // CREATE TICKET
  const addTicket = (ticket) => {
    setTickets([
      ...tickets,
      {
        id: Date.now(),
        status: "Pending",
        chat: [],
        ...ticket,
      },
    ]);
  };

  // UPDATE STATUS
  const updateStatus = (id, status) => {
    setTickets(tickets.map(t =>
      t.id === id ? { ...t, status } : t
    ));
  };

  // CHAT MESSAGE
  const sendMessage = (id, sender, message) => {
    setTickets(tickets.map(t =>
      t.id === id
        ? {
            ...t,
            chat: [
              ...t.chat,
              { sender, message, time: new Date().toLocaleTimeString() },
            ],
          }
        : t
    ));
  };

  return (
    <TicketContext.Provider
      value={{ tickets, addTicket, updateStatus, sendMessage }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);