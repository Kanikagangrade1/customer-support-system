import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProtectedRoute from "./app/ProtectedRoute";

// USER
import UserHome from "./pages/user/UserHome";
import RaiseTicket from "./pages/user/RaiseTicket";
import MyTickets from "./pages/user/MyTickets";
import UserTicketDetails from "./pages/user/UserTicketDetails";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

// ADMIN
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTickets from "./pages/admin/AdminTickets";
import TicketDetails from "./pages/admin/TicketDetails";
import ActiveUsers from "./pages/admin/ActiveUsers";
import AdminLogin from "./pages/auth/AdminLogin";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* USER BASE ROUTE */}
        <Route path="user" element={<UserHome />} />
        <Route path="user/raise" element={<RaiseTicket />} />
        <Route path="user/tickets" element={<MyTickets />} />
        <Route path="user/ticket/:id" element={<UserTicketDetails />} />
        <Route path="register"  element = {<Register/>} />
        <Route Path="login/user" element = {<Login/>} />

        {/* ADMIN ROUTES */}
        <Route path="admin/dashboard" element={<AdminDashboard />} />
        <Route path="admin/tickets" element={<AdminTickets />} />
        <Route path="admin/ticket/:id" element={<TicketDetails />} />
        <Route path="admin/users" element={<ActiveUsers />} />

<Route
  path="admin"
  element={
    <ProtectedRoute role="admin">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route path="admin-login" element ={<AdminLogin/>} />

<Route
  path="admin/tickets"
  element={
    <ProtectedRoute role="admin">
      <AdminTickets />
    </ProtectedRoute>
  }
/>

<Route
  path="admin/ticket/:id"
  element={
    <ProtectedRoute role="admin">
      <TicketDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="admin/users"
  element={
    <ProtectedRoute role="admin">
      <ActiveUsers />
    </ProtectedRoute>
  }
/>
      </Route>
    </Routes>
  );
}

export default App;