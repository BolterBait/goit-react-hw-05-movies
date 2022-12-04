import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'api/api';

import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

import { Container } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  async function createReviews(id) {
    const reviews = await getMovieReviews(id);

    if (!reviews.length) {
      setError(true);
      return;
    }
    setReviews(reviews);
    setError(false);
  }
  useEffect(() => {
    createReviews(movieId);
  }, [movieId]);

  return (
    <Container>
      {error && <ErrorMessage text={'No information till now.'} />}
      {error === false && (
        <ul>
          {reviews.map(({ author, created_at, content }) => (
            <li key={author}>
              <p>{author}</p>
              <p>{new Date(created_at).toLocaleString()}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Reviews;
