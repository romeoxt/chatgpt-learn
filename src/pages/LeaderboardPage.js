import React from 'react';
import Leaderboard from '../components/Leaderboard';
import { Introduction, Border, AppContainer } from '../styles';

const LeaderboardPage = () => {
  return (
    <>
      <Introduction>
        <h2>Leaderboard</h2>
      </Introduction>
      <AppContainer>
        <Border>
          <Leaderboard />
        </Border>
      </AppContainer>
    </>
  );
};

export default LeaderboardPage;
