import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authClient, setAuthClient] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);

      const isLoggedIn = await client.isAuthenticated();
      if (isLoggedIn) {
        const identity = client.getIdentity();
        setPrincipal(identity.getPrincipal().toString());
        setIsAuthenticated(true);
      }
    };

    initAuth();
  }, []);

  const login = async () => {
    if (!authClient) return;

    await authClient.login({
      identityProvider: "https://identity.ic0.app",
      onSuccess: async () => {
        document.body.classList.add('logged-in'); // Add the class after login
        const identity = authClient.getIdentity();
        setPrincipal(identity.getPrincipal().toString());
        setIsAuthenticated(true);
      },
      onError: (err) => console.error("Login failed:", err),
    });
  };

  const logout = async () => {
    if (!authClient) return;

    await authClient.logout();
    setPrincipal(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, principal, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
