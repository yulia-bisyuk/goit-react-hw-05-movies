import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCast } from '../../services/API';
import { CastItem, CastImg, CastName } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCast(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(error => {
        console.log(error);
        navigate('/');
      });
  }, [movieId, navigate]);

  return (
    <>
      {cast &&
        cast.map(cast => (
          <CastItem key={cast.id}>
            <CastName>{cast.name}</CastName>

            <CastImg
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
              }
              alt={cast.name}
            />
          </CastItem>
        ))}
    </>
  );
};

export default Cast;
