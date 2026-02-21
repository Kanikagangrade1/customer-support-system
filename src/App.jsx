import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

/* USER */
import Home from "./pages/user/Home";
import RaiseTicket from "./pages/user/RaiseTicket";
import MyTickets from "./pages/user/MyTickets";

/* ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTickets from "./pages/admin/AdminTickets";
import TicketDetails from "./pages/admin/TicketDetails";
import ActiveUsers from "./pages/admin/ActiveUsers";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* USER */}
        <Route path="/" element={<Home />} />
        <Route path="/raise-ticket" element={<RaiseTicket />} />
        <Route path="/my-tickets" element={<MyTickets />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/tickets" element={<AdminTickets />} />
        <Route path="/admin/ticket/:id" element={<TicketDetails />} />
        <Route path="/admin/users" element={<ActiveUsers />} />
      </Route>
    </Routes>
  );
}