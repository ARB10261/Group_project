import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); // 🔹 store role here

  const login = (role) => {
    setIsLoggedIn(true);
    setUserRole(role); // 🔹 save role when user logs in
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
