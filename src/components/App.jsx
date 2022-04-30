import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';

// import { AppBar } from './AppBar/AppBar';
// import Navigation from './Navigation';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
