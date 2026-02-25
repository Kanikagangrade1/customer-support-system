import { useTickets } from "../../context/TicketContext";

export default function AdminTickets() {
  const { tickets, updateStatus } = useTickets();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">All Tickets</h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id} className="text-center border-t">
              <td className="p-3">{ticket.title}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>

              <td className="space-x-2">
                <button
                  onClick={() => updateStatus(ticket.id, "Accepted")}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() => updateStatus(ticket.id, "Resolved")}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Resolve
                </button>

                <button
                  onClick={() => updateStatus(ticket.id, "Rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}