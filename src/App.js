import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Instructions from './components/Instructions';
import PromptForm from './components/PromptForm';
import Tips from './components/Tips';
import Examples from './components/Examples';
import Leaderboard from './components/Leaderboard';
import PracticeMode from './components/PracticeMode';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import PromptsGuide from './pages/PromptsGuide'; // import the PromptsGuide component
import InteractiveExamplesPage from './pages/InteractiveExamplesPage'; // import the InteractiveExamplesPage component
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { css, Global } from '@emotion/react';

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #222;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Introduction = styled.div`
  padding: 1rem;
  color: #fff;
  text-align: center;
  max-width: 900px;
  margin: 1rem auto;
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const Border = styled.div`
  border: 2px solid #4a4a4a;
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
`;

const PromptSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background-color: #333;
`;

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                header={Header}
                introduction={Introduction}
                border={Border}
                promptSection={PromptSection}
                appContainer={AppContainer}
                tips={Tips}
                examples={Examples}
                leaderboard={Leaderboard}
                practiceMode={PracticeMode}
              />
            }
          />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/prompts-guide" element={<PromptsGuide />} />
          <Route path="/interactive-examples" element={<InteractiveExamplesPage />} /> // add a new Route for InteractiveExamplesPage
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
