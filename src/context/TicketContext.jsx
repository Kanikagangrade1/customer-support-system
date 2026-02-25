import { createContext, useContext, useEffect, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("tickets");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  // ✅ RAISE TICKET
  const raiseTicket = (ticket) => {
    const newTicket = {
      id: Date.now(), // IMPORTANT
      ...ticket,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    setTickets((prev) => [...prev, newTicket]);
  };

  // ✅ ACCEPT / REJECT
  const updateTicketStatus = (id, status) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status } : t
      )
    );
  };

  return (
    <TicketContext.Provider
      value={{ tickets, raiseTicket, updateTicketStatus }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);