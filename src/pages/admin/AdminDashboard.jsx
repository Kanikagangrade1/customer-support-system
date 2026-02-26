import { useTickets } from "../../context/TicketContext";

export default function AdminDashboard() {
  const { tickets } = useTickets();

  const total = tickets.length;
  const pending = tickets.filter(t => t.status === "Pending").length;
  const accepted = tickets.filter(t => t.status === "Accepted").length;
  const rejected = tickets.filter(t => t.status === "Rejected").length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-serif text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500">
          Overview of support ticket activity
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Tickets"
          value={total}
          color="bg-indigo-500"
        />
        <Card
          title="Pending"
          value={pending}
          color="bg-yellow-500"
        />
        <Card
          title="Accepted"
          value={accepted}
          color="bg-green-500"
        />
        <Card
          title="Rejected"
          value={rejected}
          color="bg-red-500"
        />
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 p-6">
      
      {/* COLOR BAR */}
      <div className={`absolute top-0 left-0 h-1 w-full ${color}`} />

      <h3 className="text-gray-500 text-sm font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-4xl font-bold text-gray-800">
        {value}
      </p>

      
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gray-100 rounded-full opacity-40"></div>
    </div>
  );
}