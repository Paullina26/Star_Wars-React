import { WrapperStyle } from 'styles/WrapperStyles.style';
import CardFilm from 'components/CardFilm';
import { WrapperCard } from 'styles/Card.style';
import { useEffect, useState } from 'react';

export const Films = () => {
  const FILMS_URL = 'https://swapi.dev/api/films/';
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(FILMS_URL)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results);
      });
  }, []);

  const filmsRender = films.map(film => <CardFilm key={film.episode_id} data={film} />);

  return (
    <WrapperStyle>
      <WrapperCard>{filmsRender}</WrapperCard>
    </WrapperStyle>
  );
};

export default Films;
