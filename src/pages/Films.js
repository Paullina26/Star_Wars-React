import { WrapperStyle } from 'styles/WrapperStyles.style';
import Card from 'components/Card';
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
  console.log(films);

  const filmsRender = films.map(film => <Card key={film.episode_id} data={film} />);

  return (
    <WrapperStyle>
      <WrapperCard>
        {filmsRender}
        {/* <Link href='/link-pojedynczego-elementu/1'>
          <Card />
        </Link> */}
      </WrapperCard>
    </WrapperStyle>
  );
};

export default Films;
