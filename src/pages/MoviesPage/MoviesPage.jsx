import { useState, useEffect } from 'react';
import { getFilmsByQuery } from 'services/API';
import SearchForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import * as Scroll from 'react-scroll';
// import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);
  const [page, setPage] = useState(1);

  // const params = useSearchParams();
  //   console.log(params);

  //  const location = useLocation();
  // console.log(location);

  const getQuery = userQuery => {
    setQuery(userQuery);
  };

  useEffect(() => {
    if (query === '' || query.trim() === '') {
      return;
    }

    getFilmsByQuery(page, query).then(response => {
      console.log(response);
      if (response.results.length === 0) {
        alert('Please, type correct search query');
      } else {
        setFilms(response.results);
      }
    });
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
