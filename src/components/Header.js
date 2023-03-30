import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const headerContainerStyles = css`
  background-color: #2c2c2c;
  padding: 1rem;
  text-align: center;
  color: white;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px 5px 0 0;
`;
const HeaderContainer = styled.header`
  ${headerContainerStyles}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>ChatGPT Prompt Practice</h1>
    </HeaderContainer>
  );
};

export default Header;

