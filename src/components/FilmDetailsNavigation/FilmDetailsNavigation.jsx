import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link, LinksWrapper } from './FilmDetailsNavigation.styled';

const FilmDetailsNavigation = ({ id }) => {
  const location = useLocation();

  return (
    <LinksWrapper>
      <Link to={`/movies/${id}/cast`} state={{ from: location?.state?.from }}>
        Cast
      </Link>

      <Link
        to={`/movies/${id}/reviews`}
        state={{ from: location?.state?.from }}
      >
        Reviews
      </Link>
    </LinksWrapper>
  );
};

export default FilmDetailsNavigation;

FilmDetailsNavigation.propTypes = {
  id: PropTypes.string,
};
