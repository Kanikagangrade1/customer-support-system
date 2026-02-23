import { useState } from "react";
import { Link } from "react-router-dom";
import { useTickets} from "../../context/TicketContext";
import PriorityBadge from "../../components/PriorityBadge";

export default function AdminTickets() {
  const { tickets, updateStatus } = useTickets();

  /*STATES */
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  /*  FILTER LOGIC  */
  const filteredTickets = tickets.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || t.status === filter)
  );

const acceptTicket = async (id) => {
  try {
    await axios.put(`/api/tickets/accept/${id}`);
    fetchTickets(); // refresh list
  } catch (err) {
    console.log(err);
  }
};
  /*  STATUS COLOR  */
  const statusStyle = {
    Pending: "bgyellow100 textyellow700",
    Accepted: "bgblue100 textblue700",
    Resolved: "bggreen100 textgreen700",
    Rejected: "bgred100 textred700",
  };

  return (
    <div className="p6">

      {/* PAGE TITLE */}
      <h1 className="text2xl fontbold mb6">
         Admin Ticket Management
      </h1>

      {/* SEARCH + FILTER */}
      <div className="flex flexcol md:flexrow gap3 mb6">

        <input
          type="text"
          placeholder="Search tickets..."
          className="border p3 roundedlg wfull md:w1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p3 roundedlg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Resolved">Resolved</option>
          <option value="Rejected">Rejected</option>
        </select>

      </div>

      {/* TICKETS LIST */}
      <div className="grid gap5">

        {filteredTickets.length === 0 ? (
          <div className="textcenter textgray500 py10">
            No tickets found 
          </div>
        ) : (
          
          filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bgwhite shadowmd roundedxl p5 hover:shadowxl transition"
            >
              {/* HEADER */}
              <div className="flex flexcol md:flexrow md:justifybetween gap3">

                <div>
                  <h3>Id : {ticket.id}</h3>
                  <h2 className="fontsemibold textlg">
                    {ticket.title}
                  </h2>

                  <p className="textsm textgray500">
                    Category: {ticket.category}
                  </p>
                </div>

                <div className="flex gap2 flexwrap">
                  {/* STATUS */}
                  <span
                    className={`px3 py1 roundedfull textxs ${
                      statusStyle[ticket.status]
                    }`}
                  >
                    {ticket.status}
                  </span>

                  {/* PRIORITY */}
                  <PriorityBadge priority={ticket.priority} />
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="textgray600 mt3 lineclamp2">
                {ticket.description}
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flexwrap gap3 mt5 ">

                <button
                  onClick={() => acceptTicket(ticket.id, "Accepted")}
                  className="bgblue500 textwhite px4 py2 roundedlg hover:bgblue600"
                >
                  Accept
                </button>

                <button
                  onClick={() => updateStatus(ticket.id, "Rejected")}
                  className="bgred500 textwhite px4 py2 roundedlg hover:bgred600"
                >
                  Reject
                </button>

                <button
                  onClick={() => updateStatus(ticket.id, "Resolved")}
                  className="bggreen500 textwhite px4 py2 roundedlg hover:bggreen600"
                >
                  Resolve
                </button>

                <Link
                  to={`/admin/ticket/${ticket.id}`}
                  className="bgindigo600 textwhite px4 py2 roundedlg hover:bgindigo700"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}