import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { colors } from 'styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'templates/Layout';

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path='/' />
            <Route path='/films' />
            <Route path='/charakters' />
            <Route path='/planets' />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
