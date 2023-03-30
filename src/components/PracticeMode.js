import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const practiceContainerStyles = css`
  padding: 1rem;
  color: #fff;
  width: 400px;
  margin: 1rem auto;
  border: 1px solid #4a4a4a;
  border-radius: 5px;
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
    <PracticeContainer>
      <h2>Practice Mode</h2>
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
