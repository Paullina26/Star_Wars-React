import Navigation from 'components/Navigation';
import styled from 'styled-components';
import { MainStyle } from 'styles/WrapperStyles.style';
import { device } from 'styles/theme';

export const WrapperStyle = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display: grid;
  /* grid-template-columns: 200px 1fr; */
  @media ${device.mobileM} {
    display: flex;
    /* display: inline-flex; */
    /* display: inline-block; */
    flex-direction: column;
    align-items: center;
  }
`;

const Layout = ({ children }) => {
  return (
    <WrapperStyle>
      <Navigation />
      <MainStyle>{children}</MainStyle>
    </WrapperStyle>
  );
};

export default Layout;
