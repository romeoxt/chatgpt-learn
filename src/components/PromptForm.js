import React, { useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const formContainerStyles = css`
  padding: 1rem;
  width: 400px;
  margin: 0 auto;
  border: 1px solid #4a4a4a;
  border-radius: 0 0 5px 5px;
`;

const FormContainer = styled.div`
  ${formContainerStyles}
`;

const inputStyles = css`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #2c2c2c;
  color: white;
`;

const Input = styled.input`
  ${inputStyles}
`;

const submitButtonStyles = css`
  background-color: #4a4a4a;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  ${submitButtonStyles}
`;

const responseAreaStyles = css`
  margin-top: 1rem;
  color: white;
  white-space: pre-wrap;
`;

const ResponseArea = styled.div`
  ${responseAreaStyles}
`;

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your own API URL and API key
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const result = await axios.post(
        apiUrl,
        { prompt, max_tokens: 100 },
        { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` } }
      );
      setResponse(result.data.choices[0].text);
    } catch (error) {
      setResponse('Error: Unable to fetch response from API.');
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your ChatGPT prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      <ResponseArea>{response}</ResponseArea>
    </FormContainer>
  );
};

export default PromptForm;
