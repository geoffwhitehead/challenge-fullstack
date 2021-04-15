import { UserLoginProps } from '@org/types';
import { useState } from 'react';
import { config } from '../config';
import { setItem } from '../helpers/localStorage';
import { useIsAuthenticated } from './useIsAuthenticated';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const [_, setIsAuthenticated] = useIsAuthenticated();

  const login = async (data: UserLoginProps) => {
    setIsLoading(true);
    setHasErrored(false);

    const response = await fetch(`${config.baseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await response.json();

    if (!response.ok) {
      setHasErrored(true);
    } else {
      setItem('access_token', body.access_token);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  };

  return [login, isLoading, hasErrored] as const;
};
