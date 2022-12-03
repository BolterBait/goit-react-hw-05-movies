import { getMovieInfo } from 'api/api';
import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { posterBaseUrl } from 'const/secureBaseUrl';
import { Loader } from 'components/Loader/Loader';

import { CardWrapper, Container } from './MovieInfo.styled';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    getMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    poster_path,
    title,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
  } = movie;

  return (
    <div>
      <Link to={goBackLink}>Go Back</Link>
      <Container>
        <CardWrapper>
          <img
            src={poster_path ? posterBaseUrl + poster_path : 'no_poster'}
            alt={title}
          />
        </CardWrapper>
        <div>
          <span>{original_title}</span>
          <ul>
            <li>
              User Score:{''}
              <p rating={vote_average}>{vote_average.toFixed(2)}</p>
            </li>
            <li>
              Release date:
              <span>{release_date}</span>
            </li>
            <li>
              Overview:
              <span>{overview}</span>
            </li>
            <li>
              Genres:
              {genres.map(({ name }) => (
                <span key={name}> {name}</span>
              ))}
            </li>
          </ul>
          <h3>Additional information</h3>
          <ul>
            <li to="cast" state={{ from: goBackLink }}>
              Cast
            </li>
            <li to="reviews" state={{ from: goBackLink }}>
              Reviews
            </li>
          </ul>
        </div>
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieInfo;
