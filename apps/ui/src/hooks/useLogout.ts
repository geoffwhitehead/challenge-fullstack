import { useHistory } from 'react-router-dom';
import { useAuthenticatedUser } from '../app/contexts/AuthenticatedContext';
import { setItem } from '../helpers/localStorage';

export const useLogout = () => {
  const { setIsAuthenticated } = useAuthenticatedUser();
  const history = useHistory();

  const logout = () => {
    setItem('access_token', null);
    setIsAuthenticated(false);
    history.push('/');
  };

  return [logout] as const;
};
