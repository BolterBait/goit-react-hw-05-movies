import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
// import { Movies } from './Movies/Movies';

import { Container, Link, Header } from './App.styled';
import { MovieInfo } from 'pages/MovieInfo/MovieInfo';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>
        <Route path="/movies/:movieId" element={<MovieInfo />}></Route>
      </Routes>
    </Container>
  );
};
