import { MenuLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <MenuLink to="/">Home</MenuLink>

      <MenuLink to="movies">Movies</MenuLink>
    </nav>
  );
};

export default Navigation;
