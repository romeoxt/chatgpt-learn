  // src/components/Footer.js

  import React from 'react';
  import styled from '@emotion/styled';

  const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem;
  `;

  const FooterContainer = styled.footer`
    background-color: #333;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  `;

  const FooterText = styled.p`
    color: white;
    margin: 0;
    font-size: 0.9rem;
  `;

  const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  const Footer = () => {
    return (
      <FooterContainer>
        <FooterText>
          Learn more about ChatGPT API at{' '}
          <FooterLink href="https://platform.openai.com/docs/introduction/overview" target="_blank" rel="noopener noreferrer">
            ChatGPT
          </FooterLink>
        </FooterText>
      </FooterContainer>
    );
  };

  export default Footer;
