import { Link } from "react-router-dom";

export default function MyTickets() {

  // Dummy data (later comes from backend API)
  const tickets = [
    {
      id: 101,
      title: "Medicine batch barcode not scanning",
      category: "Major Issue",
      status: "In Progress",
      priority: "High",
      date: "20 Feb 2026",
    },
    {
      id: 102,
      title: "Invoice PDF download issue",
      category: "Minor Issue",
      status: "Open",
      priority: "Medium",
      date: "18 Feb 2026",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-yellow-100 text-yellow-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100";
    }
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-orange-100 text-orange-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        My Support Tickets
      </h1>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-600">
              <th className="p-4">Ticket ID</th>
              <th>Issue</th>
              <th>Category</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-semibold">
                  #{ticket.id}
                </td>

                <td>{ticket.title}</td>

                <td>{ticket.category}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColor(
                      ticket.priority
                    )}`}
                  >
                    {ticket.priority}
                  </span>
                </td>

                <td>{ticket.date}</td>

                <td>
                  <Link
                    to={`/ticket/${ticket.id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}