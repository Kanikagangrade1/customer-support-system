import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LOGIN FUNCTION
  const login = (role) => {
    const loggedUser = {
      name: role === "admin" ? "Admin" : "Customer",
      role: role,
    };

    setUser(loggedUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);