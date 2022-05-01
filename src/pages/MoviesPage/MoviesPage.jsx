import { useState, useEffect } from 'react';
import { getFilmsByQuery } from 'services/API';
import SearchForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import * as Scroll from 'react-scroll';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);
  const [page, setPage] = useState(1);

  const getQuery = userQuery => {
    setQuery(userQuery);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    getFilmsByQuery(page, query).then(response => setFilms(response.results));
  }, [page, query]);

  console.log(films);

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
      <SearchForm onSubmit={getQuery} />
      {films && (
        <Gallery
          handleGoBack={onGoBack}
          handleLoadMore={onLoadMore}
          page={page}
          films={films}
        />
      )}
    </>
  );
};

export default MoviesPage;
