import { createContext, useContext, useState } from 'react';

interface AuthContextData {
  userId: string | null;
  isOwner: boolean;
  isWalker: boolean;
  setAuthState: (userId: string | null, isOwner: boolean, isWalker: boolean) => void;
}

const AuthContext = createContext<AuthContextData>({
  userId: null,
  isOwner: false,
  isWalker: false,
  setAuthState: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [isWalker, setIsWalker] = useState<boolean>(false);

  const setAuthState = (userId: string | null, isOwner: boolean, isWalker: boolean) => {
    setUserId(userId);
    setIsOwner(isOwner);
    setIsWalker(isWalker);
  };

  return (
    <AuthContext.Provider value={{ userId, isOwner, isWalker, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
