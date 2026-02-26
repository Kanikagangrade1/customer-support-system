// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")) || null);

  // USER FUNCTIONS
  const registerUser = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === data.email)) return false; // Already exists

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const loginUser = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(u => u.email === data.email && u.password === data.password);
    if (found) {
      setUser(found);
      localStorage.setItem("user", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // ADMIN FUNCTIONS
  const loginAdmin = (email, password) => {
    // Hardcoded admin for simplicity
    const adminData = { email: "admin@example.com", password: "admin123" };
    if (email === adminData.email && password === adminData.password) {
      setAdmin(adminData);
      localStorage.setItem("admin", JSON.stringify(adminData));
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{
      user, admin,
      registerUser, loginUser, logoutUser,
      loginAdmin, logoutAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);