import CardFilm from 'components/CardFilm';
import { WrapperCard } from 'styles/Card.style';
import { useEffect, useState } from 'react';
import { get } from 'api/api';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';

export const Films = () => {
  const { setIsLoading } = useContext(GlobalContext);
  const [films, setFilms] = useState([]);

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

  return (
    <>
      <WrapperCard>{filmsRender}</WrapperCard>
    </>
  );
};

export default Films;
