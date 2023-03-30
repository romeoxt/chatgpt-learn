import styled from '@emotion/styled';

export const Introduction = styled.div`
  padding: 1rem;
  color: #fff;
  text-align: center;
  max-width: 900px;
  margin: 1rem auto;
`;

export const Border = styled.div`
  border: 2px solid #4a4a4a;
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
`;

export const PromptSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background-color: #333;
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 60%;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1px solid #333;
  border-radius: 3px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export const ResponseContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 3px;
`;

export const Prompt = styled.p`
  font-weight: bold;
`;

export const Response = styled.p`
  white-space: pre-wrap;
`;

