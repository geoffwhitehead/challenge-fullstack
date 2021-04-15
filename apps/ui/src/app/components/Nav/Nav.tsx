import { useLogout } from 'apps/ui/src/hooks/useLogout';
import React from 'react';
import styled from 'styled-components';
import { useAuthenticatedUser } from '../../contexts/AuthenticatedContext';
import { NavItem } from './NavItem';

type Nav = {
  routes: RouteItem[];
};

type RouteItem = {
  path: string;
  name: string;
};

export const Nav: React.FC<Nav> = ({ routes }) => {
  const { isAuthenticated } = useAuthenticatedUser();
  const [logout] = useLogout();

  return (
    <Navbar>
      {routes.map((route) => {
        return (
          <NavItem key={route.path} to={route.path}>
            {route.name}
          </NavItem>
        );
      })}
      <AuthContainer>
        {!isAuthenticated && (
          <NavItem key={'/login'} to={'/login'}>
            <button>Login</button>
          </NavItem>
        )}
        {isAuthenticated && <button onClick={logout}>Logout</button>}
      </AuthContainer>
    </Navbar>
  );
};

const AuthContainer = styled.div`
  margin-left: auto;
`;

const Navbar = styled.nav`
  background: whiteSmoke;
  display: flex;
  height: 60px;
  width: '100%';
  align-items: center;
`;
