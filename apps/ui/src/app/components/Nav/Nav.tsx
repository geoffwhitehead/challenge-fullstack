import React from 'react';
import styled from 'styled-components';
import { NavItem } from './NavItem';

type Nav = {
  routes: RouteItem[];
};

type RouteItem = {
  path: string;
  name: string;
};

export const Nav: React.FC<Nav> = ({ routes }) => {
  return (
    <Navbar>
      {routes.map((route) => {
        return <NavItem to={route.path}>{route.name}</NavItem>;
      })}
    </Navbar>
  );
};

const Navbar = styled.nav`
  background: whiteSmoke;
  color: white;
  display: flex;
  height: 60px;
  align-items: center;
`;
