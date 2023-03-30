import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const instructionsContainerStyles = css`
  padding: 1rem;
  color: #fff;
  width: 400px;
  margin: 0 auto;
`;

const InstructionsContainer = styled.div`
  ${instructionsContainerStyles}
`;

const Instructions = () => {
  return (
    <InstructionsContainer>
      <h2>How to use ChatGPT Prompts</h2>
      <p>
        To practice writing ChatGPT prompts, enter your prompt in the input
        field and click "Submit". The AI will respond to your prompt, and you
        can analyze the response to improve your prompt-writing skills.
      </p>
    </InstructionsContainer>
  );
};

export default Instructions;
