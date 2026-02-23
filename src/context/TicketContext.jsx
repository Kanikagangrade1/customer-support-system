import { createContext, useContext, useState, useEffect } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  // ✅ ADD TICKET FUNCTION
  const addTicket = (ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(saved);
  }, []);

 const raiseTicket = (ticket) => {
  const newTicket = {
    ...ticket,
    id: "TCK-" + Date.now(),
    status: "Pending",

    createdAt: new Date().toISOString(),
  };

  const updated = [...tickets, newTicket];
  setTickets(updated);
  localStorage.setItem("tickets", JSON.stringify(updated));
};

  return (
    <TicketContext.Provider value={{ tickets, raiseTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);