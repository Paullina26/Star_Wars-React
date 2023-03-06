import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from './theme';

export const WrapperStyle = styled.nav`
  position: fixed;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: ${({ theme }) => theme.GlassBackground};
  border-right: 2px solid ${({ theme }) => theme.GlassBorder};
  box-shadow: 0px 8px 32px ${({ theme }) => theme.GlassShadow};
  border-radius: 0px 10px 10px 0px;
  margin-right: 25px;

  @media ${device.mobileM} {
    z-index: 1;
    width: 90vw;
    height: 400px;
    border: 2px solid ${({ theme }) => theme.GlassBorder};
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 15px 32px ${({ theme }) => theme.GlassShadow};
    background: ${({ theme }) => theme.GlassBackgroundMobile};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.BasicFont};
  margin: 15px auto 15px 20px;
  font-size: 20px;

  &::after {
    content: '';
    margin-right: auto;
    position: absolute;
    width: 18px;
    height: 5px;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.NavFontActive};
    border-radius: 4px 0px 0px 4px;
  }
  &:hover::after {
    width: 30%;
    transition: width 0.3s linear;
  }

  &:hover {
    color: ${({ theme }) => theme.NavHover};
    transition: color 0.3s 0.3s linear;
  }

  &.active {
    color: ${({ theme }) => theme.NavHover};
  }

  &.active::after {
    width: 30%;
  }
`;
