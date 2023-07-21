// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = async (companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret) => {
    try {
      const response = await registerCompany(companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret);
      setToken(response);
    } catch (error) {
      console.error('Error registering company:', error);
      // Handle error case, e.g., display an error message
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
