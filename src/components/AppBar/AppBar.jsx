import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  console.log('object');
  return (
    <header>
      <Navigation />
      <Outlet />
    </header>
  );
};
