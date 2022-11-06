import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { colors } from 'styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import Charakters from './pages/Charakters';
import Navigation from './components/Navigation';
import Title from './components/Title';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.lightBlack};
  color: ${({ theme }) => theme.lightGray};
`;

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Wrapper>
          <Title />
          <Navigation />
          <Home />
          <Films />
          <Charakters />
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
