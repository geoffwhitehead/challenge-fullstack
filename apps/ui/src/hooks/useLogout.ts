import { useHistory } from 'react-router-dom';
import { setItem } from '../helpers/localStorage';
import { useIsAuthenticated } from './useIsAuthenticated';

export const useLogout = () => {
  const [_, setIsAuthenticated] = useIsAuthenticated();
  const history = useHistory();

  const logout = () => {
    setItem('access_token', null);
    setIsAuthenticated(false);
    history.push('/home');
  };

  return [logout] as const;
};
