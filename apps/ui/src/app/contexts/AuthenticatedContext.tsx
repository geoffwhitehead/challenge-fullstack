import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getItem } from '../../helpers/localStorage';

export type AuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

const Ctx = createContext<AuthContext>(null);

export const AuthenticatedUserProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [{ isAuthenticated }, setValue] = useState<
    Omit<AuthContext, 'setIsAuthenticated'>
  >({
    isAuthenticated: false,
  });

  const setIsAuthenticated = useCallback(
    (isAuthenticated: boolean) => setValue({ isAuthenticated }),
    []
  );

  useEffect(() => {
    const token = getItem('access_token');
    if (token !== 'null') setValue({ isAuthenticated: true });
    console.log(`token`, token);
  }, []);

  return (
    <Ctx.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </Ctx.Provider>
  );
};

export const useAuthenticatedUser = () => {
  const ctx = useContext(Ctx);

  console.log(`ctx`, ctx);
  if (!ctx)
    throw new Error(
      `No Provider. Ensure that the AuthenticatedUserProvider is rendered as a parent before using this hook.`
    );

  const { isAuthenticated, setIsAuthenticated } = ctx;

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};
