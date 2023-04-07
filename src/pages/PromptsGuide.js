import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
`;

const Title = styled.h1`
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
`;

const SectionContent = styled.div`
  margin-top: 1rem;
  margin-left: 1.5rem;
`;

const Code = styled.code`
  background-color: #eee;
  padding: 0.1rem 0.3rem;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const PromptsGuide = () => {
  const knowledge_cutoff = '2021-09';
  const current_date = new Date().toISOString().substring(0, 10);

  return (
    <Container className='card-layout-box'>
      <Title>Prompts Guide</Title>
      <p>
        Instructing chat models
        <br />
        Best practices for instructing models may change from model version to version. The advice that follows applies to gpt-3.5-turbo-0301 and may not apply to future models.
      </p>
      <SectionTitle>System Message</SectionTitle>
      <SectionContent>
        <p>
          Many conversations begin with a system message to gently instruct the assistant. For example, here is one of the system messages used for ChatGPT:
        </p>
        <Code>
          You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}
        </Code>
        <p>In general, gpt-3.5-turbo-0301 does not pay strong attention to the system message, and therefore important instructions are often better placed in a user message.</p>
      </SectionContent>
      <SectionTitle>Iterating and Experimenting</SectionTitle>
      <SectionContent>
        <p>If the model isn’t generating the output you want, feel free to iterate and experiment with potential improvements. You can try approaches like:</p>
        <ul>
          <li>Make your instruction more explicit</li>
          <li>Specify the format you want the answer in</li>
          <li>Ask the model to think step by step or debate pros and cons before settling on an answer</li>
        </ul>
        <p>For more prompt engineering ideas, read the OpenAI Cookbook guide on techniques to improve reliability.</p>
      </SectionContent>
      <SectionTitle>Temperature and Max Tokens</SectionTitle>
      <SectionContent>
        <p>Beyond the system message, the temperature and max tokens are two of many options developers have to influence the output of the chat models. For temperature, higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. In the case of max tokens, if you want to limit a response to a certain length, max tokens can be set to an arbitrary number. This may cause issues for example if you set the max tokens value to 5 since the output will be cut-off and the result will not make sense to users.</p>
      </SectionContent>
    </Container>
  );
};

export default PromptsGuide;
