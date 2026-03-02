import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./app/ProtectedRoute";

/* ================= USER ================= */

// Auth Pages
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

// User Layout + Pages
import UserLayout from "./layouts/UserLayout";
import UserHome from "./pages/user/UserHome";
import RaiseTicket from "./pages/user/RaiseTicket";
import MyTickets from "./pages/user/MyTickets";
import UserTicketDetails from "./pages/user/UserTicketDetails";

/* ================= ADMIN ================= */

// Admin Auth
import AdminLogin from "./pages/auth/AdminLogin";

// Admin Layout + Pages
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTickets from "./pages/admin/AdminTickets";
import TicketDetails from "./pages/admin/TicketDetails";
import ActiveUsers from "./pages/admin/ActiveUsers";
import UserInformation from "./pages/admin/UserInformation";

function App() {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />

      {/* ================= USER PROTECTED ================= */}

      <Route element={<ProtectedRoute role="user" />}>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="raise" element={<RaiseTicket />} />
          <Route path="tickets" element={<MyTickets />} />
          <Route path="ticket/:id" element={<UserTicketDetails />} />
        </Route>
      </Route>

      {/* ================= ADMIN LOGIN ================= */}

      <Route path="/admin" element={<AdminLogin />} />

      {/* ================= ADMIN PROTECTED ================= */}

      <Route element={<ProtectedRoute role="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="tickets" element={<AdminTickets />} />
          <Route path="ticket/:id" element={<TicketDetails />} />
          <Route path="users" element={<ActiveUsers />} />
          <Route path="userInfo" element={<UserInformation />} />
        </Route>
      </Route>

      {/* ================= FALLBACK ================= */}

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;