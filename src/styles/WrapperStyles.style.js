import styled from 'styled-components';
import { device } from './theme';

export const MainStyle = styled.div`
  color: ${({ theme }) => theme.BasicFont};
  margin: 5vh 15px 40px 215px;
  position: relative;
  @media ${device.mobileM} {
    margin: 20px auto;
    margin-top: 70px;
  }
`;
