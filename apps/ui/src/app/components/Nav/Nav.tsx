import React from 'react';
import styled from 'styled-components';
import { useAuthenticatedUser } from '../../contexts/AuthenticatedContext';
import { useLogout } from '../../hooks/useLogout';
import { Button } from '../Button/Button';
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
            <StyledButton>Login</StyledButton>
          </NavItem>
        )}
        {isAuthenticated && (
          <StyledButton onClick={logout}>Logout</StyledButton>
        )}
      </AuthContainer>
    </Navbar>
  );
};

const AuthContainer = styled.div`
  margin-left: auto;
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

const Navbar = styled.nav`
  background: whiteSmoke;
  display: flex;
  height: 60px;
  width: '100%';
  align-items: center;
`;
