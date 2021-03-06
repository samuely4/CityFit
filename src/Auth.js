import React, { useEffect, useState } from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('wait');

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if(user) {
        setCurrentUser(user.uid)
      } else {
        setCurrentUser(null)
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
