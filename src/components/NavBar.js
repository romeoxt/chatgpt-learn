import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const NavBarContainer = styled.div`
  background-color: #333;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 1px solid #4a4a4a;
`;

const NavLink = styled(RouterNavLink)`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #007bff;
  }
  &.active {
    color: #007bff;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="/" end activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/leaderboard" activeClassName="active">
        Leaderboard
      </NavLink>
      <NavLink to="/prompts-guide" activeClassName="active">
        Prompts Guide
      </NavLink>
      <NavLink to="/interactive-examples" activeClassName="active">
        Interactive Examples
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
