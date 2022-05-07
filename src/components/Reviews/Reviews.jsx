import { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getReviews } from 'services/API';
import { ReviewItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    if (location.pathname === `/movies/${movieId}/reviews`)
      getReviews(movieId)
        .then(setReviews)
        .catch(error => {
          console.log(error);
          navigate('/');
        });
  }, [movieId, location, navigate]);

  return (
    <>
      {reviews && reviews.results.length !== 0 ? (
        reviews.results.map(review => (
          <ReviewItem key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </ReviewItem>
        ))
      ) : (
        <h3>No reviews yet</h3>
      )}
    </>
  );
};

export default Reviews;
