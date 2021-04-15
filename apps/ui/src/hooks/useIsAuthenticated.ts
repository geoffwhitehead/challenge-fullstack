import { useEffect, useState } from 'react';
import { getItem } from '../helpers/localStorage';

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getItem('access_token');

    if (token) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return [isAuthenticated, setIsAuthenticated] as const;
};
