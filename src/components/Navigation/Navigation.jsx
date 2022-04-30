import { MenuLink } from './Navigation.styled';

const active = {
  textDecoration: 'underline',
};

const Navigation = () => {
  return (
    <nav>
      <MenuLink activeStyle={active} to="/">
        Home
      </MenuLink>
      <MenuLink to="movies">Movies</MenuLink>
    </nav>
  );
};

export default Navigation;
