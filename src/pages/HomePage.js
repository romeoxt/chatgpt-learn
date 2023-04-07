import React from 'react';
import Instructions from '../components/Instructions';
import PromptForm from '../components/PromptForm';
import SecondaryHero from '../components/SecondaryHero';
import Documentation from '../components/Documentation';

const HomePage = ({
  header: Header,
  introduction: Introduction,
  border: Border,
  appContainer: AppContainer,
  examples: Examples,
  practiceMode: PracticeMode,
}) => {
  return (
    <>
      <Header />
      <Introduction>
        {/* ... */}
      </Introduction>
          <SecondaryHero />
      <AppContainer className='wrapper margin'>
          <Examples />
          <PracticeMode />
          <Documentation />
      </AppContainer>
    </>
  );
};

export default HomePage;
