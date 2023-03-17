import { StyledLink, WrapperLink, Wrapper } from 'styles/Navigation.style';
import { bool } from 'prop-types';

const navItems = [
  { to: '/', name: 'Home' },
  { to: '/films', name: 'Films' },
  { to: '/characters', name: 'Characters' },
  { to: '/planets', name: 'Planets' },
];

export const Menu = ({ open }) => {
  const navItemRender = navItems.map(item => (
    <StyledLink key={item.name} to={item.to}>
      {item.name}
    </StyledLink>
  ));

  return (
    <Wrapper open={open}>
      <WrapperLink>{navItemRender}</WrapperLink>
    </Wrapper>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
