import { MenuLink } from './MainNavigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  console.log(location);

  return (
    <nav>
      <MenuLink to={`/`} state={{ from: location }}>
        Home
      </MenuLink>

      <MenuLink to={`movies`} state={{ from: location }}>
        Movies
      </MenuLink>
    </nav>
  );
};

export default Navigation;
