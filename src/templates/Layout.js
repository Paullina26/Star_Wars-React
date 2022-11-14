import Navigation from 'components/Navigation';
import styled from 'styled-components';

export const WrapperStyle = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100vh;
  /* overflow-x: hidden; */
  padding: 0;
  display: grid;
  grid-template-columns: 200px 1fr;
  background-color: ${({ theme }) => theme.BasicBacgraund};
`;

const Layout = ({ children }) => {
  return (
    <WrapperStyle>
      <Navigation />
      {children}
    </WrapperStyle>
  );
};

export default Layout;
