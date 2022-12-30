import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { colors } from 'styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'templates/Layout';
import Home from 'pages/Home';
import Films from 'pages/Films';
import Characters from 'pages/Characters';
import Planets from 'pages/Planets';
import SingleFilms from 'pages/SingleFilm';
import SingleCharacter from 'pages/SingleCharacters';

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/films' element={<Films />} />
            <Route path='/films/:idFilm' element={<SingleFilms />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/characters/:idCharacter' element={<SingleCharacter />} />
            <Route path='/planets' element={<Planets />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
