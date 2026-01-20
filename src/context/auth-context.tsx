'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  // Define the user properties you expect, e.g.,
  uid: string;
  email: string;
  displayName?: string;
}

interface AuthContextType {
  user: User | null;
  isMember: boolean;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
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

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};