import React, { useState } from 'react';
import { chatGPT } from '../api';
import {
  Container,
  InputContainer,
  Input,
  Button,
  ResponseContainer,
  Prompt,
  Response,
} from '../styles';

const InteractiveExamples = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await chatGPT(input);
      if (result) {
        setResponse(result);
      } else {
        console.error('Unexpected API response:', result);
        setResponse('An error occurred while fetching the response. Please check the console for more details.');
      }
    } catch (err) {
      console.error(err);
      setResponse('An error occurred while fetching the response. Please check the console for more details.');
    }
  };

  return (
    <Container>
      <h2>Interactive Examples</h2>
      <p>Test your prompt engineering skills with ChatGPT by typing a prompt and receiving a response.</p>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt here"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </InputContainer>
      <ResponseContainer>
        <Prompt>Prompt: {input}</Prompt>
        <Response>Response: {response}</Response>
      </ResponseContainer>
    </Container>
  );
};

export default InteractiveExamples;
