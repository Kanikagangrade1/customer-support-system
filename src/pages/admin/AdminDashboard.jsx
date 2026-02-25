import { useTickets } from "../../context/TicketContext";

export default function AdminDashboard() {
  const { tickets } = useTickets();

  const total = tickets.length;
  const pending = tickets.filter(t => t.status === "Pending").length;
  const accepted = tickets.filter(t => t.status === "Accepted").length;
  const rejected = tickets.filter(t => t.status === "Rejected").length;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <Card title="Total Tickets" value={total} />
        <Card title="Pending" value={pending} />
        <Card title="Accepted" value={accepted} />
        <Card title="Rejected" value={rejected} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}