import Navigation from 'components/Navigation';
import styled from 'styled-components';

export const WrapperStyle = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 200px 1fr;
  background-color: ${({ theme }) => theme.BasicBacgraund};
`;

const WrapperChildren = styled.div`
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <WrapperStyle>
      <Navigation />
      <WrapperChildren>{children}</WrapperChildren>
    </WrapperStyle>
  );
};

export default Layout;
