import { useState, useEffect } from 'react';
import { getFilmsByQuery } from 'services/API';
import SearchForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import * as Scroll from 'react-scroll';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onSubmit = userQuery => {
    setSearchParams({
      query: userQuery.trim(),
      page: 1,
    });
  };

  const searchQuery = searchParams.get('query') ?? '';
  const currentPage = searchParams.get('page') ?? 1;

  useEffect(() => {
    if (!searchQuery) return setSearchParams('');

    getFilmsByQuery(searchQuery, currentPage)
      .then(response => {
        if (response.results.length === 0) {
          alert('Please, type correct search query');
        } else {
          setFilms(response.results);
        }
      })
      .catch(error => {
        console.log(error);
        navigate('/');
      });
  }, [searchQuery, currentPage, setSearchParams, navigate]);

  const onLoadMore = () => {
    setSearchParams({
      query: searchQuery,
      page: Number(currentPage) + 1,
    });

    Scroll.animateScroll.scrollToTop();
  };

  const onGoBack = () => {
    setSearchParams({
      query: searchQuery,
      page: Number(currentPage) - 1,
    });
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {films && (
        <Gallery
          handleGoBack={onGoBack}
          handleLoadMore={onLoadMore}
          query={searchQuery}
          page={Number(currentPage)}
          films={films}
        />
      )}
    </>
  );
};

export default MoviesPage;
