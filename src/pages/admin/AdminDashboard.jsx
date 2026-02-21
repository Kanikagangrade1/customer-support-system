import { useTicket } from "../../context/TicketContext";

export default function AdminDashboard() {
  const { tickets } = useTicket();

  const pending = tickets.filter(t => t.status === "Pending").length;
  const resolved = tickets.filter(t => t.status === "Resolved").length;

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Total Tickets</h3>
        <p className="text-3xl font-bold">{tickets.length}</p>
      </div>

      <div className="bg-yellow-100 p-6 rounded-xl">
        <h3>Pending</h3>
        <p className="text-3xl font-bold">{pending}</p>
      </div>

      <div className="bg-green-100 p-6 rounded-xl">
        <h3>Resolved</h3>
        <p className="text-3xl font-bold">{resolved}</p>
      </div>

    </div>
  );
}