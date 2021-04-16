import { UserLoginDto } from '@org/types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthenticatedUser } from '../../app/contexts/AuthenticatedContext';
import { config } from '../../config';
import { setItem } from '../../helpers/localStorage';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { setIsAuthenticated } = useAuthenticatedUser();
  const history = useHistory();

  const login = async (data: UserLoginDto) => {
    setIsLoading(true);
    setHasErrored(false);

    const response = await fetch(`${config.apiUrl}/auth/login`, {
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
      history.push('/');
    }
    setIsLoading(false);
  };

  return [login, isLoading, hasErrored] as const;
};
