import { MovieList } from '../../components/Movies/MovieList';

import { Container } from 'components/App/App.styled';

const Home = () => {
  return (
    <Container>
      <p text={'Trending today'} />
      <MovieList />
    </Container>
  );
};

export default Home;
