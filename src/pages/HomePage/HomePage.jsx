import { useEffect, useState } from 'react';
import { getTrending } from 'services/API';
import Gallery from '../../components/Gallery';
import * as Scroll from 'react-scroll';
// import { useLocation, useParams } from 'react-router-dom';

const HomePage = () => {
  const [films, setFilms] = useState(null);
  const [page, setPage] = useState(1);

  // const location = useLocation();
  // console.log(location);

  // const params = useParams();
  // console.log(params);

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

export default HomePage;
