import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgb(240, 241, 245);
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
  color: #222;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #222;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1rem;
  position: relative;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  color: ${(props) => (props.correct ? 'green' : 'red')};
`;

const PreDefinedExamples = [
  {
    prompt: 'Explain the importance of context in AI-generated answers.',
    response: 'Context plays a crucial role in AI-generated answers...'
  },
  {
    prompt: 'What is the difference between a prompt and a context?',
    response: 'A prompt is the question you ask the AI model...'
  },
  {
    prompt: 'How can I teach the AI model about a new topic?',
    response: 'You can teach the AI model about a new topic by providing it with information about the topic and examples of how the topic is used in real life.'
  },
  {
    prompt: 'Explain the importance of context in AI-generated answers.',
    response: 'Context plays a crucial role in AI-generated answers because it helps the AI model understand the intent of the question and generate a response that is relevant to the context.'
  },
  {
    prompt: 'List three benefits of using AI in healthcare.',
    response: '1. Improved diagnostics, 2. Personalized treatments, 3. Enhanced patient care'
  },
  {
    prompt: 'Describe how AI can be used to optimize energy consumption.',
    response: 'AI can analyze data from various sources to identify patterns and trends in energy consumption and use that information to optimize energy consumption.'
  },
];

const PromptEngineeringTipsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [userGuess, setUserGuess] = useState('');

  const handleExampleSelection = (index) => {
    setSelectedIndex(index);
    setUserGuess('');
  };

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const [isCorrect, setIsCorrect] = useState(null);

  const handleCheckAnswer = () => {
    const correctAnswer = PreDefinedExamples[selectedIndex].response;
    setIsCorrect(userGuess.trim().toLowerCase() === correctAnswer.trim().toLowerCase());
  };

  return (
    <Container>
      <Section>
        <Heading>Tip 1: Make Instructions More Explicit</Heading>
        <Paragraph>
          Providing clear and explicit instructions can help the AI model better understand your intent and generate more accurate responses. For example, instead of asking "How do I make a cake?" you can ask "Give me a step-by-step guide for making a chocolate cake for a birthday party."
</Paragraph>
</Section>
<Section>
<Heading>Tip 2: Specify the Format of the Answer</Heading>
<Paragraph>
If you want a specific type of answer, like a list or a step-by-step guide, mention that in your prompt. It will help guide the AI in crafting the desired response. For example, you can ask the AI to give you a list of ingredients for a recipe or a step-by-step guide for making a recipe.
</Paragraph>
</Section>
<Section>
<Heading>Tip 3: Use Step-by-Step or Debate-Style Instructions</Heading>
<Paragraph>
Asking the AI to think step-by-step or debate pros and cons before answering can lead to more thoughtful and accurate responses. For example, you can ask the AI to "list three benefits of using AI in healthcare" or "list three reasons why AI should not be used in healthcare."
</Paragraph>
</Section>
<Section>
    <Heading>Interactive Example</Heading>
    <Paragraph>
      Test your understanding of how context can be used to get better answers. Select a prompt from the list below and guess the AI-generated response based on the provided context. Then, check your answer to see if you were right! If you get stuck, you can always refer to the tips above.
    </Paragraph>
    <ul>
      {PreDefinedExamples.map((example, index) => (
        <li key={index} onClick={() => handleExampleSelection(index)} style={{ cursor: 'pointer' }}>
          {example.prompt}
        </li>
      ))}
    </ul>
    {selectedIndex >= 0 && (
  <>
    <Heading>Prompt:</Heading>
    <Paragraph>{PreDefinedExamples[selectedIndex].prompt}</Paragraph>
    <Heading>Your Guess:</Heading>
    <InputContainer>
      <Input
        type="text"
        value={userGuess}
        onChange={handleInputChange}
        placeholder="Enter your guess here"
      />
      <Button onClick={handleCheckAnswer}>Check Answer</Button>
      {isCorrect !== null && (
        <Result correct={isCorrect}>
          {isCorrect ? 'Correct!' : 'Incorrect. Try again.'}
        </Result>
      )}
    </InputContainer>
  </>
)}
</Section>
</Container>
);
};
export default PromptEngineeringTipsPage;

