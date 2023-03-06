import styled from 'styled-components';
import { device } from './theme';

export const MainStyle = styled.div`
  color: ${({ theme }) => theme.BasicFont};
  margin: 5vh 15px 40px 215px;
  position: relative;
  @media ${device.mobileM} {
    height: 90vh;
    overflow-y: auto;
    margin: 0 auto;
    margin-top: 10vh;
    /* margin-top: 70px; */
    /* padding-bottom: 20px; */
  }
`;
