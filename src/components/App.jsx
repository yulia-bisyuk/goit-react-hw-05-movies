import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="movies" element={<MoviesPage />} />

        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
      </Route>
    </Routes>
  );
};
