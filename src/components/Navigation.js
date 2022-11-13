import Logo from './Logo';
import { StyledLink, WrapperStyle } from 'styles/Navigation.style';

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
