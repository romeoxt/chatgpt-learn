import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const examplesContainerStyles = css`
  color: #fff;
`;

const ExamplesContainer = styled.div`
  ${examplesContainerStyles}
`;

const ExampleItem = styled.div`
  margin-bottom: 1.5rem;
  align: center;
`;

const Documentation = () => {
  return (
    <ExamplesContainer className='card-container'>
      <h2 className='title'>Examples</h2>
      <ExampleItem>
        <strong>Prompt:</strong> Who was the first president of the United States?
        <br />
        <strong>Output:</strong> The first president of the United States was George Washington.
      </ExampleItem>
      <ExampleItem>
        <strong>Prompt:</strong> What is the capital of the United States?
        <br />
        <strong>Output:</strong> The capital of the United States is Washington, D.C.
      </ExampleItem>
      <ExampleItem>
        <strong>Prompt:</strong> How can I say hello in Spanish?
        <br />
        <strong>Output:</strong> You can say hello in Spanish by saying "Hola".
      </ExampleItem>
      {/* Add more example items */}
    </ExamplesContainer>
  );
};

export default Documentation;