import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const practiceContainerStyles = css`
  color: #fff;
`;

const PracticeContainer = styled.div`
  ${practiceContainerStyles}
`;

const Button = styled.button`
  background-color: #4a4a4a;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// In a real application, this data might come from a database or API
const practicePrompts = [
  {
    prompt: 'What is the capital of France?',
    response: 'The capital of France is Paris.',
  },
  {
    prompt: 'Who wrote the novel "To Kill a Mockingbird"?',
    response: 'Harper Lee wrote the novel "To Kill a Mockingbird".',
  },
];

const PracticeMode = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);

  const nextPrompt = () => {
    setCurrentPrompt((prev) => (prev + 1) % practicePrompts.length);
  };

  return (
    <PracticeContainer className='card-container'>
      <h2 className='title'>Practice Mode</h2>
      <p>
        <strong>Prompt:</strong> {practicePrompts[currentPrompt].prompt}
      </p>
      <p>
        <strong>Response:</strong> {practicePrompts[currentPrompt].response}
      </p>
      <Button onClick={nextPrompt}>Next Prompt</Button>
    </PracticeContainer>
  );
};

export default PracticeMode;
