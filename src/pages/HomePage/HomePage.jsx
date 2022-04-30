import { useEffect, useState } from 'react';
import { getTrending } from 'services/API';
import { FilmGallery, FilmImage } from './HomePage.styled';

const HomePage = () => {
  const [films, setFilms] = useState();

  useEffect(() => {
    getTrending().then(response => setFilms(response.results));
  }, []);

  return (
    <>
      {films && (
        <FilmGallery>
          {films.map(film => (
            <li key={film.id} id={film.id}>
              <FilmImage
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title || film.name}
              />
              <p>{film.title || film.name}</p>
              <p>Votes: {film.vote_count}</p>
              <p>Vote average: {film.vote_average}</p>
            </li>
          ))}
        </FilmGallery>
      )}
    </>
  );
};

export default HomePage;
