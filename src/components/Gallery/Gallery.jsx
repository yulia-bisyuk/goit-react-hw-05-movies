import {
  FilmGallery,
  FilmGalleryItem,
  FilmImage,
  FilmTitle,
  FilmInfo,
  LoadMoreButton,
  ButtonsWrapper,
} from './Gallery.styled';
const Gallery = ({ handleGoBack, handleLoadMore, page, films }) => {
  return (
    <>
      <FilmGallery>
        {films.map(film => (
          <FilmGalleryItem key={film.id} id={film.id}>
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
          </FilmGalleryItem>
        ))}
      </FilmGallery>

      <ButtonsWrapper>
        {page >= 2 && (
          <LoadMoreButton onClick={handleGoBack}>Previous page</LoadMoreButton>
        )}
        {page <= 1000 && (
          <LoadMoreButton onClick={handleLoadMore}>Next page</LoadMoreButton>
        )}
      </ButtonsWrapper>
    </>
  );
};

export default Gallery;
