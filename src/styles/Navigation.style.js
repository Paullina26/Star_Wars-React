import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperStyle = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.NavBacgraund};
  border-top: 2px solid ${({ theme }) => theme.NavBorder};
  border-right: 2px solid ${({ theme }) => theme.NavBorder};
  border-bottom: 2px solid ${({ theme }) => theme.NavBorder};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.NavBorderShadow};
  border-radius: 0px 10px 10px 0px;
  margin-right: 25px;
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.NavLinkFont};
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
