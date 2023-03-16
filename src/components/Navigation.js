import Logo from './Logo';
import { WrapperLogo } from 'styles/Navigation.style';
import Burger from './Burger';
import { useState } from 'react';
import Menu from './Menu';

// const navItems = [
//   { to: '/', name: 'Home' },
//   { to: '/films', name: 'Films' },
//   { to: '/characters', name: 'Characters' },
//   { to: '/planets', name: 'Planets' },
// ];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  // const navItemRender = navItems.map(item => (
  //   <StyledLink key={item.name} to={item.to}>
  //     {item.name}
  //   </StyledLink>
  // ));

  return (
    <>
      <WrapperLogo>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
      </WrapperLogo>
      <Menu open={open} setOpen={setOpen} />
      {/* <Wrapper>
        <WrapperLink open={open} setOpen={setOpen}>
          {navItemRender}
        </WrapperLink>
      </Wrapper> */}
    </>
  );
};

export default Navigation;
