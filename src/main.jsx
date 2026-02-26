import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { TicketProvider } from "./context/TicketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TicketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TicketProvider>
    </AuthProvider>
  </React.StrictMode>
);