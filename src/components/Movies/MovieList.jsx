import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getTrendingMovies } from 'api/api';
import { posterBaseUrl } from 'const/secureBaseUrl';
import no_poster from 'images/no_poster.jpg';

import { Container, CardWrapper } from 'components/Movies/MovieList.styled';

export const MovieList = ({ list }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const currentUrl = location.pathname === '/' ? 'movies/' : '';

  async function makeMovieList() {
    const trendingMovies = await getTrendingMovies();

    if (!trendingMovies) {
      return;
    }

    setMovies(trendingMovies);
  }

  useEffect(() => {
    if (list) {
      return setMovies(list);
    }
    makeMovieList();
  }, [list]);

  return (
    <Container>
      {movies.map(({ id, title, poster_path }) => (
        <CardWrapper key={id}>
          <NavLink to={`${currentUrl}${id}`} state={{ from: location }}>
            <img
              src={poster_path ? posterBaseUrl + poster_path : no_poster}
              alt={title}
            />
            <p>{title}</p>
          </NavLink>
        </CardWrapper>
      ))}
    </Container>
  );
};

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
