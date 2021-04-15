import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

export type AuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

const Ctx = createContext<AuthContext>(null);

export function AuthenticatedUserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [{ isAuthenticated }, setValue] = useState<
    Omit<AuthContext, 'setIsAuthenticated'>
  >({
    isAuthenticated: false,
  });

  const setIsAuthenticated = useCallback(
    (isAuthenticated: boolean) => setValue({ isAuthenticated }),
    []
  );

  return (
    <Ctx.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuthenticatedUser() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Ctx);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
}
