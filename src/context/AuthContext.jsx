import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Pharma User",
    role: "user", // change to admin
  });

  const switchRole = () => {
    setUser((prev) => ({
      ...prev,
      role: prev.role === "user" ? "admin" : "user",
    }));
  };

  return (
    <AuthContext.Provider value={{ user, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);