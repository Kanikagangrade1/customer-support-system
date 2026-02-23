import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  /*  USER LOGIN  */
  const login = (email, password) => {
    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setRole("user");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  /*  ADMIN LOGIN  */
  const loginAdmin = (email, password) => {
    // demo admin credentials
    if (email === "admin@gmail.com" && password === "admin123") {
      const adminUser = { email };
      setUser(adminUser);
      setRole("admin");

      localStorage.setItem(
        "currentUser",
        JSON.stringify(adminUser)
      );

      return true;
    }

    return false;
  };

  /*  REGISTER  */
  const register = (name, email, password) => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));
  };

  /*  LOGOUT  */
  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        login,
        loginAdmin, 
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);