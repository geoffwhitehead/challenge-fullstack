import { useHistory } from 'react-router-dom';
import { setItem } from '../../helpers/localStorage';
import { useAuthenticatedUser } from '../contexts/AuthenticatedContext';

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
