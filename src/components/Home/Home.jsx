import { MovieList } from '../Movies/MovieList';

import { Container } from 'components/App.styled';

export const Home = () => {
  return (
    <Container>
      <p text={'Trending today'} />
      <MovieList />
    </Container>
  );
};
