import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginAdmin = (email,password) => {
    if(email === "admin@gmail.com" && password === "1234"){
      setUser ({role: "admin",email});
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, setUser,loginAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};