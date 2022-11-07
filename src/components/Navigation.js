import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const WrapperStyle = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.bacgraund};
  border-top: 2px solid ${({ theme }) => theme.borderNav};
  border-right: 2px solid ${({ theme }) => theme.borderNav};
  border-bottom: 2px solid ${({ theme }) => theme.borderNav};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.borderShadowNav};
  border-radius: 0px 10px 10px 0px;
  margin-right: 25px;
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.font};
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
      background-color: ${({ theme }) => theme.fontLogo};
      border-radius: 4px 0px 0px 4px;
    }
    &:hover::after {
      width: 30%;
      transition: width 0.5s;
    }
  }
  &:hover {
    color: ${({ theme }) => theme.fontLogo};
    transition: color 0.5s;
  }
`;

export const Navigation = () => {
  return (
    <WrapperStyle>
      <Logo />
      <StyledLink>Home</StyledLink>
      <StyledLink>Films</StyledLink>
      <StyledLink>Charakters</StyledLink>
      <StyledLink>Planets</StyledLink>
    </WrapperStyle>
  );
};

export default Navigation;
