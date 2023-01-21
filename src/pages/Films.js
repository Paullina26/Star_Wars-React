import CardFilm from 'components/CardFilm';
import { WrapperCard } from 'styles/Card.style';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { get } from 'api/api';

export const Films = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFilms = async () => {
    const params = `films/`;
    const films = await get(params);
    setFilms(films.results);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getFilms();
  }, []);

  const filmsRender = films.map(film => <CardFilm key={film.episode_id} data={film} />);

  if (isLoading) return <Loader />;
  return (
    <>
      <WrapperCard>{filmsRender}</WrapperCard>
    </>
  );
};

export default Films;
