import Logo from './Logo';
import { StyledLink, WrapperStyle } from 'styles/Navigation.style';

const navItems = [
  { to: '/', name: 'Home' },
  { to: '/films', name: 'Films' },
  { to: '/characters', name: 'Characters' },
  { to: '/planets', name: 'Planets' },
];

export const Navigation = () => {
  const navItemRender = navItems.map(item => (
    <StyledLink key={item.name} to={item.to}>
      {item.name}
    </StyledLink>
  ));

  return (
    <WrapperStyle>
      <Logo />
      {navItemRender}
    </WrapperStyle>
  );
};

export default Navigation;
