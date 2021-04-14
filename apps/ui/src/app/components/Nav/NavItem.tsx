import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)<{}>`
  display: flex;
  cursor: pointer;
  background: light-grey;
  &.active {
    color: black;
  }
  padding: 0.4rem;
`;
