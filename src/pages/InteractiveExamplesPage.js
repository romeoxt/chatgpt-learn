import React from 'react';
import InteractiveExamples from '../components/InteractiveExamples';
import { PageContainer, Title, Description } from '../styles';

const InteractiveExamplesPage = () => {
  return (
    <PageContainer>
      <Title>Interactive Examples</Title>
      <Description>
        Explore how to effectively communicate with ChatGPT by trying out different prompts and observing the generated responses. Use these interactive examples to learn how to craft better prompts and get the desired output from the AI.
      </Description>
      <InteractiveExamples />
    </PageContainer>
  );
};

export default InteractiveExamplesPage;
