import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const tipsContainerStyles = css`
  padding: 1rem;
  color: #fff;
  width: 400px;
  margin: 0 auto;
  margin-top: 1rem;
  border: 1px solid #4a4a4a;
  border-radius: 5px;
`;

const TipsContainer = styled.div`
  ${tipsContainerStyles}
`;

const TipItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.span`
  margin-right: 1rem;
  font-weight: bold;
`;

const Tips = () => {
  return (
    <TipsContainer>
      <h2>Tips for Formulating Questions</h2>
      <TipItem>
        <Icon>✓</Icon>
        <span>Be specific and clear with your question</span>
      </TipItem>
      <TipItem>
        <Icon>✓</Icon>
        <span>Provide context when necessary</span>
      </TipItem>
      <TipItem>
        <Icon>✗</Icon>
        <span>Ask overly broad questions</span>
      </TipItem>
      <TipItem>
        <Icon>✗</Icon>
        <span>Use ambiguous language</span>
      </TipItem>
    </TipsContainer>
  );
};

export default Tips;
