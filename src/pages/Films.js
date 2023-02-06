import CardFilm from 'components/CardFilm';
import { WrapperCard } from 'styles/Card.style';
import { useEffect, useState, useContext } from 'react';
import { get } from 'api/api';
import { GlobalContext } from 'utils/GlobalContext';

export const Films = () => {
  const { setIsLoading } = useContext(GlobalContext);
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    setIsLoading(true);
    const params = `films/`;
    const films = await get(params);
    setFilms(films.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getFilms();
  }, []);

  const filmsRender = films.map(film => <CardFilm key={film.episode_id} data={film} />);

  return (
    <>
      <WrapperCard>{filmsRender}</WrapperCard>
    </>
  );
};

export default Films;
