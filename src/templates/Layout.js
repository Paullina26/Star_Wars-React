import Navigation from 'components/Navigation';
import styled from 'styled-components';

export const WrapperStyle = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display: grid;
  /* grid-template-columns: 200px 1fr; */
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
