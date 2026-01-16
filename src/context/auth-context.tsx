'use client';

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isMember, setIsMember] = useState(false);

  const signOut = () => {
    setUser(null);
    setIsMember(false);
  };

  return (
    <AuthContext.Provider value={{ user, signOut, isMember }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);