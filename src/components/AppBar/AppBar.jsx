import Navigation from 'components/Navigation';
// import { Outlet } from 'react-router-dom';
import { Container } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <Navigation />

      {/* <Outlet /> */}
    </Container>
  );
};

export default AppBar;
