import PropTypes from 'prop-types';
import {
  FilmGallery,
  FilmGalleryItem,
  FilmImage,
  FilmTitle,
  FilmInfo,
  LoadMoreButton,
  ButtonsWrapper,
  FilmLink,
} from './Gallery.styled';
import { useLocation } from 'react-router-dom';

const Gallery = ({ handleGoBack, handleLoadMore, page, films }) => {
  const location = useLocation();

  return (
    <>
      <FilmGallery>
        {films.map(film => (
          <FilmGalleryItem key={film.id} id={film.id}>
            <FilmLink
              to={
                location.pathname === '/' ? `movies/${film.id}` : `${film.id}`
              }
              state={{
                from: location,
              }}
            >
              <FilmImage
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                    : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
                }
                alt={film.title || film.name}
              />
              <FilmTitle>{film.title || film.name}</FilmTitle>

              <FilmInfo>Votes: {film.vote_count}</FilmInfo>
              <FilmInfo>Vote average: {film.vote_average}</FilmInfo>
            </FilmLink>
          </FilmGalleryItem>
        ))}
      </FilmGallery>

      <ButtonsWrapper>
        {page >= 2 && (
          <LoadMoreButton onClick={handleGoBack}>Previous page</LoadMoreButton>
        )}
        {films.length === 20 && (
          <LoadMoreButton onClick={handleLoadMore}>Next page</LoadMoreButton>
        )}
      </ButtonsWrapper>
    </>
  );
};

export default Gallery;

Gallery.propTypes = {
  handleGoBack: PropTypes.func,
  handleLoadMore: PropTypes.func,
  page: PropTypes.number,
  films: PropTypes.array,
};
