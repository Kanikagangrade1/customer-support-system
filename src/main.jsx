import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

import { AuthProvider } from "./context/AuthContext";
import { TicketProvider } from "./context/TicketContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TicketProvider>
        <RouterProvider router={router} />
      </TicketProvider>
    </AuthProvider>
  </React.StrictMode>
);