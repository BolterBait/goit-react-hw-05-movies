import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'api/api';
import no_poster from 'images/no_poster.jpg';

import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { posterBaseUrl } from 'const/secureBaseUrl';

import { Container } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actorsList, setActorsList] = useState([]);
  const [error, setError] = useState(null);

  async function createCastList(id) {
    const castList = await getMovieCast(id);

    if (!castList.length) {
      setError(true);
      return;
    }
    setActorsList(castList);
    setError(false);
  }
  useEffect(() => {
    createCastList(movieId);
  }, [movieId]);

  return (
    <Container>
      {error && <ErrorMessage text={'No information till now.'} />}
      {error === false && (
        <ul>
          {actorsList.map(({ name, profile_path, character }) => (
            <li key={name}>
              <img
                src={profile_path ? posterBaseUrl + profile_path : no_poster}
                alt={name}
              ></img>
              <p>
                Name:<span>{name}</span>
              </p>
              <p>
                Character:<span>{character}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Cast;
