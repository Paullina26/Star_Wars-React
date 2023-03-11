import Logo from './Logo';
import { StyledLink, WrapperLink, WrapperStyle } from 'styles/Navigation.style';
import Burger from './Burger';
import { useEffect, useState, useContext } from 'react';

const navItems = [
  { to: '/', name: 'Home' },
  { to: '/films', name: 'Films' },
  { to: '/characters', name: 'Characters' },
  { to: '/planets', name: 'Planets' },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navItemRender = navItems.map(item => (
    <StyledLink key={item.name} to={item.to}>
      {item.name}
    </StyledLink>
  ));

  return (
    <WrapperStyle>
      <Logo />
      <Burger open={open} setOpen={setOpen} />
      <WrapperLink open={open} setOpen={setOpen}>
        {navItemRender}
      </WrapperLink>
    </WrapperStyle>
  );
};

export default Navigation;
