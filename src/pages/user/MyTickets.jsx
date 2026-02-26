import { Link } from "react-router-dom";
import { useTickets } from "../../context/TicketContext";

export default function MyTickets() {
  const { tickets } = useTickets();
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

  // const priorityColor = (priority) => {
  //   switch (priority) {
  //     case "High":
  //       return "bg-red-100 text-red-700";
  //     case "Medium":
  //       return "bg-orange-100 text-orange-700";
  //     case "Low":
  //       return "bg-green-100 text-green-700";
  //     default:
  //       return "bg-gray-100";
  //   }
  // };

  return (
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        My Support Tickets
      </h1>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
<table className="w-full border-collapse">
  <thead className="bg-gray-200 text-black">
    <tr className="text-sm text-center">
      <th className="p-4">Ticket ID</th>
      <th>Issue</th>
      <th>Category</th>
      <th>Status</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {tickets.map((ticket) => (
      <tr
        key={ticket.id}
        className="border-t text-center hover:bg-gray-50 transition"
      >
        {/* Ticket ID */}
        <td className="p-3 font-semibold">
          #{ticket.id}
        </td>

        {/* Issue */}
        <td className="p-3 font-medium">
          {ticket.title}
        </td>

        {/* Category */}
        <td className="p-3">
          {ticket.category}
        </td>

        {/* Status */}
        <td className="p-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
              ticket.status
            )}`}
          >
            {ticket.status}
          </span>
        </td>

        {/* Date */}
        <td className="p-3">
          <div className="flex flex-col items-center text-sm">
            <span>{ticket.date}</span>
            <span className="text-xs text-gray-800">
              Raised: {new Date(ticket.createdAt).toLocaleString()}
            </span>
          </div>
        </td>

        {/* Action */}
        <td className="p-3">
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