import { useEffect, useState } from 'react';
import { getTrending } from 'services/API';
import Gallery from '../../components/Gallery';
import * as Scroll from 'react-scroll';

const HomePage = () => {
  const [films, setFilms] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrending(page).then(response => setFilms(response.results));
  }, [page]);

  const onLoadMore = () => {
    setPage(page => page + 1);
    Scroll.animateScroll.scrollToTop();
  };

  const onGoBack = () => {
    setPage(page => page - 1);
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <>
      {
        films && (
          <Gallery
            handleGoBack={onGoBack}
            handleLoadMore={onLoadMore}
            page={page}
            films={films}
          />
        )
        // <>
        // <FilmGallery>
        //   {films.map(film => (

        //     <FilmGalleryItem key={film.id} id={film.id}>

        //       <FilmImage
        //         src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        //         alt={film.title || film.name}
        //       />
        //       <FilmTitle>{film.title || film.name}</FilmTitle>

        //       <FilmInfo>Votes: {film.vote_count}</FilmInfo>
        //       <FilmInfo>Vote average: {film.vote_average}</FilmInfo>

        //     </FilmGalleryItem>
        //   ))}
        //   </FilmGallery>

        //   <ButtonsWrapper>
        //     {page >= 2 &&<LoadMoreButton onClick={onGoBack}>Previous page</LoadMoreButton>}
        //     {page <= 1000 && <LoadMoreButton onClick={onLoadMore}>Next page</LoadMoreButton>}
        //   </ButtonsWrapper>
        //   </>
      }
    </>
  );
};

export default HomePage;
