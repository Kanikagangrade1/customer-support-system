import { useTickets } from "../../context/TicketContext";
import DashboardCard from "../../components/DashBoardCards";

function AdminDashboard() {
  const { tickets } = useTickets();

  const total = tickets.length;
  const pending = tickets.filter(t => t.status === "Pending").length;
  const accepted = tickets.filter(t => t.status === "Accepted").length;
  const resolved = tickets.filter(t => t.status === "Resolved").length;

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Tickets" value={total} />
        <DashboardCard title="Pending" value={pending} />
        <DashboardCard title="Accepted" value={accepted} />
        <DashboardCard title="Resolved" value={resolved} />
      </div>

      {/* RECENT TICKETS */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Tickets</h2>

        {tickets.length === 0 ? (
          <p className="text-gray-500">No tickets available</p>
        ) : (
          <div className="space-y-3">
            {tickets.slice(0, 5).map(ticket => (
              <div
                key={ticket.id}
                className="flex justify-between border-b pb-2"
              >
                <p className="font-medium">{ticket.issue}</p>
                <span className="text-sm text-gray-500">
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default AdminDashboard;