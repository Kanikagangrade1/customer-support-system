import { Routes, Route,Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProtectedRoute from "./app/ProtectedRoute";

// USER
import UserHome from "./pages/user/UserHome";
import RaiseTicket from "./pages/user/RaiseTicket";
import MyTickets from "./pages/user/MyTickets";
import UserTicketDetails from "./pages/user/UserTicketDetails";
import Register from "./pages/UserRegister";
import Login from "./pages/UserLogin";
import UserLayout from "./layouts/UserLayout";

// ADMIN
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTickets from "./pages/admin/AdminTickets";
import TicketDetails from "./pages/admin/TicketDetails";
import ActiveUsers from "./pages/admin/ActiveUsers";
import AdminLogin from "./pages/auth/AdminLogin";
import AdminLayout from "./layouts/AdminLayout";

import UserInformation from "./pages/admin/UserInformation";
import AdminTicketDetails from "./pages/admin/AdminTicketDetails";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

function App() {
  return (
    <Routes>

        <Route path="/login" element={<UserLogin/>} />
        <Route path="/register" element={<UserRegister/>} />

      {/* USER BASE ROUTE */}
      <Route path="/" element={< UserRegister/>}>
        <Route index element={<UserHome />} />
        <Route path="user" element={<UserHome />} />
        <Route path="user/raise" element={<RaiseTicket />} />
        <Route path="user/tickets" element={<MyTickets />} />
        <Route path="user/ticket/:id" element={<UserTicketDetails />} />
      </Route>

    

      {/* ADMIN LOGIN */}
<Route path="/admin" element={<AdminLogin />} />

{/* ADMIN PANEL (WITH SIDEBAR) */}
<Route path="/admin" element={<AdminLayout />}>

  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="tickets" element={<AdminTickets />} />
  <Route path="ticket/:id" element={<TicketDetails />} />
  <Route path="users" element={<ActiveUsers />} />
  <Route path="userInfo" element={<UserInformation />} />

</Route>
   

      {/* <Route path="admin-login" element={<AdminLogin />} />/ */}

      
      <Route path="*" element={<Navigate to="/register" />} />


    
    </Routes>
  );
}

export default App;
