import React from 'react';
import Instructions from '../components/Instructions';
import PromptForm from '../components/PromptForm';

const HomePage = ({
  header: Header,
  introduction: Introduction,
  border: Border,
  promptSection: PromptSection,
  appContainer: AppContainer,
  tips: Tips,
  examples: Examples,
  leaderboard: Leaderboard,
  practiceMode: PracticeMode,
}) => {
  return (
    <>
      <Header />
      <Introduction>
        {/* ... */}
      </Introduction>
      <Border>
        <PromptSection>
          <Instructions />
          <PromptForm />
        </PromptSection>
      </Border>
      <AppContainer>
        <Border>
          <Tips />
        </Border>
        <Border>
          <Examples />
        </Border>
        <Border>
          <Leaderboard />
        </Border>
        <Border>
          <PracticeMode />
        </Border>
      </AppContainer>
    </>
  );
};

export default HomePage;
