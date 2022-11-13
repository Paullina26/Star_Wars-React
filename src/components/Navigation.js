import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const WrapperStyle = styled.nav`
  width: 100%;
  height: 100%;
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

const StyledLink = styled(NavLink)`
  width: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.NavLinkFont};
  margin: 15px auto 15px 20px;
  font-size: 20px;

  &.active {
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
  }
  &:hover {
    color: ${({ theme }) => theme.NavHover};
    transition: color 0.3s 0.3s linear;
  }
`;

export const Navigation = () => {
  return (
    <WrapperStyle>
      <Logo />
      <StyledLink to='/' end>
        Home
      </StyledLink>
      <StyledLink to='/films'>Films</StyledLink>
      <StyledLink to='/charakters'>Charakters</StyledLink>
      <StyledLink to='/planets'>Planets</StyledLink>
    </WrapperStyle>
  );
};

export default Navigation;
