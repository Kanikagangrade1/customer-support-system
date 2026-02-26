import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
// import AdminTickets from "../pages/admin/AdminTickets";
import AdminLayout from "../layouts/AdminLayout";
import ManageTickets from "../pages/admin/ManageTickets";
import TicketDetails from "../pages/admin/TicketDetails";


import UserHome from "../pages/user/UserHome";
import RaiseTicket from "../pages/user/RaiseTicket";
import MyTickets from "../pages/user/MyTickets";

import Layout from "../layouts/Layout";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserHome />,
  },
  {
    path: "/login",
    element: <Login/>,
  },

  //  ADMIN
  {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "tickets",
      element: <ManageTickets />,
    },
    {
      path: "tickets/:id",
      element: <TicketDetails />,
    },
  ],
},

  // USER
  // {
  //   element: <ProtectedRoute role="user" />,
  //   children: [
  //     {
  //       path: "/user",
  //       element: <Layout />,
  //       children: [
  //         { index: true, element: <UserHome /> },
  //         { path: "raise", element: <RaiseTicket /> },
  //         { path: "tickets", element: <MyTickets /> },
  //       ],
  //     },
  //   ],
  // },
]);