import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilmById } from 'services/API';
import {
  FilmWrapper,
  FilmImage,
  FilmInfoWrapper,
  GoBackButton,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);

  const { movieId } = useParams();

  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    getFilmById(movieId).then(setFilm);
  }, [movieId]);

  const onGoBack = () => {
    navigate('/');
  };

  return (
    <>
      {film && (
        <>
          <GoBackButton onClick={onGoBack}>Go Back</GoBackButton>
          <FilmWrapper>
            <FilmImage
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                  : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
              }
              alt={film.original_title || film.title}
            />
            <FilmInfoWrapper>
              <h1>
                {film.original_title || film.title} (
                {film.release_date.slice(0, 4)})
              </h1>
              <h2>Overwiew</h2>
              <p>{film.overview}</p>
              <h2>Genres</h2>
              <p>{film.genres.map(genre => `${genre.name} `)}</p>
            </FilmInfoWrapper>
          </FilmWrapper>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
