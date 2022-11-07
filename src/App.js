import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { colors } from 'styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Layout from 'templates/Layout';

const Wrapper = styled.div`
  position: relative;
`;

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout>
          <Wrapper>{/* <Logo /> */}</Wrapper>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
