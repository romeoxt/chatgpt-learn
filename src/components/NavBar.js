import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const NavBarContainer = styled.div`
  background-color: #333;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
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
    <NavBarContainer className='navbar'>
      <div className='wrapper'>
      <div className='navbar-left'><img src='./images/gtp.png'/></div>
      <div className='navbar-right'>
      <NavLink to="/" end activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/prompts-guide" activeClassName="active">
        Prompts Guide
      </NavLink>
      <NavLink to="/interactive-examples" activeClassName="active">
        Interactive Examples
      </NavLink>
      <NavLink to="/prompt-engineering-tips" activeClassName="active">
        Prompt Engineering Tips
      </NavLink>
      </div>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
