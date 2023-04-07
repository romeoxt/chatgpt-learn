import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const headerContainerStyles = css`
`;
const HeaderContainer = styled.header`
  ${headerContainerStyles}
`;
// add links to header section
const Header = () => {
  return (
    <HeaderContainer>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet"></link>

      <div className='wrapper'>
        <div className='hero-left'>
          <h4 className='hero-subtitle'>Introducing</h4>
          <h1 className='hero-title'>GPT-Learn</h1>
          <p className='hero-description'>Explore our site to learn more about the courses we offer and how GPT Learn can help you achieve your learning goals. If you have any questions, our team is always here to assist you.</p>
          <a className='hero-button hero-button-dark'>Read More</a>
          <a className='hero-button hero-button-light'>View More</a>
        </div>
        <div className='hero-right'>
          <span className='code-img'></span>
          <span className='brain-img'></span>
          <span className='gamer-img'></span>
          <span className='tool-tip'><h4>Impact of AI</h4>
          <p>Some tip about GPT-Learn goes here to fill up this content block.</p>
          </span>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

