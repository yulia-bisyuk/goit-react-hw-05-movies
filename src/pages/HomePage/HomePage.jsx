import { useEffect, useState } from 'react';
import { getTrending } from 'services/API';
import Gallery from '../../components/Gallery';
import * as Scroll from 'react-scroll';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page') ?? 1;

  useEffect(() => {
    getTrending(currentPage)
      .then(response => setFilms(response.results))
      .catch(error => console.log(error));
  }, [currentPage]);

  const onLoadMore = () => {
    setSearchParams({
      page: Number(currentPage) + 1,
    });

    Scroll.animateScroll.scrollToTop();
  };

  const onGoBack = () => {
    setSearchParams({
      page: Number(currentPage) - 1,
    });

    Scroll.animateScroll.scrollToTop();
  };

  return (
    <>
      {films && (
        <Gallery
          handleGoBack={onGoBack}
          handleLoadMore={onLoadMore}
          page={Number(currentPage)}
          films={films}
        />
      )}
    </>
  );
};

export default HomePage;
