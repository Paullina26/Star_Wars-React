import { WrapperStyle } from 'styles/WrapperStyles.style';
import CardFilm from 'components/CardFilm';
import { WrapperCard } from 'styles/Card.style';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

export const Films = () => {
  const FILMS_URL = 'https://swapi.dev/api/films/';
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(FILMS_URL)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results);
        setIsLoading(false);
      });
  }, []);

  const filmsRender = films.map(film => <CardFilm key={film.episode_id} data={film} />);

  return (
    <WrapperStyle>
      {isLoading && <Loader />}
      <WrapperCard>{filmsRender}</WrapperCard>
    </WrapperStyle>
  );
};

export default Films;
