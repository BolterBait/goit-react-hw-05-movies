import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import { getMovieByName } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/Movies/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

import { Container } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  const getQuery = newQuery => {
    if (newQuery === query) {
      return toast.info('You just see this search');
    }
    setQuery(newQuery);
    setSearchParams(newQuery !== '' ? { query: newQuery } : {});
  };
  async function createMovieList(newQuery) {
    try {
      setMovieList([]);
      setIsLoading(true);

      const movies = await getMovieByName(newQuery);
      if (!movies.length) {
        setError(false);
        return;
      }
      setMovieList(movies);
      setError(true);
    } catch {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (search) {
      setQuery(search);
    }
    if (!query) {
      return;
    }
    createMovieList(query);
    // eslint-disable-next-line
  }, [query]);

  return (
    <Container>
      <SearchForm onSubmit={getQuery} toast={toast.warning} />
      {isLoading && <Loader />}
      {error === false ? (
        <ErrorMessage text={'Sorry, no match your search'} />
      ) : (
        <MovieList list={movieList} />
      )}
      <ToastContainer
        autoClose={2000}
        limit={1}
        closeOnClick
        rtl={false}
        position="top-right"
        hideProgressBar={false}
      />
    </Container>
  );
};
export default Movies;
