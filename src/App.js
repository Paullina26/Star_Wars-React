import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { colors } from 'styles/theme';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.lightBlack};
  color: ${({ theme }) => theme.lightGray};
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Wrapper>
        <p>dupka żonki</p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
