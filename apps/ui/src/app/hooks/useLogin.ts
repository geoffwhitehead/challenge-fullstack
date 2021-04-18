import { UserLoginDto, UserLoginResponse } from '@org/types';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthenticatedUser } from '../../app/contexts/AuthenticatedContext';
import { config } from '../../config';
import { setItem } from '../../helpers/localStorage';
import { useFetch } from './useFetch';

export const useLogin = () => {
  const { setIsAuthenticated } = useAuthenticatedUser();
  const history = useHistory();
  const { fetch, isLoading, hasErrored } = useFetch<UserLoginResponse>();

  const login = useCallback(
    async (data: UserLoginDto) => {
      const { body } = await fetch({
        url: `${config.apiUrl}/auth/login`,
        opts: {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      });

      if (body.access_token) {
        setItem('access_token', body.access_token);
        setIsAuthenticated(true);
        history.push('/');
      }
    },
    [fetch, setItem, setIsAuthenticated, history.push]
  );

  return { login, isLoading, hasErrored };
};
