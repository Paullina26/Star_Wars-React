import Logo from './Logo';
import { WrapperLogo, WrapperNav } from 'styles/Navigation.style';
import Burger from './Burger';
import { useState } from 'react';
import Menu from './Menu';

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <WrapperNav>
      <WrapperLogo>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
      </WrapperLogo>
      <Menu open={open} setOpen={setOpen} />
    </WrapperNav>
  );
};

export default Navigation;
