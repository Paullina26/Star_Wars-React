import { WrapperStyle } from 'styles/WrapperStyles.style';
import Pagination from 'components/Pagination';
import Card from 'components/Card';
import { WrapperCard } from 'components/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Films = () => {
  const FILMS_URL = 'https://swapi.dev/api/films/';
  const [films, setFilms] = useState([]);
  // const params = useParams();

  useEffect(() => {
    console.log('teworze sie');
    fetch(FILMS_URL)
      .then(response => response.json())
      .then(data => {
        console.log(FILMS_URL);
        console.log(data.results);
      });
    console.log('git');
  });

  return (
    <WrapperStyle>
      <WrapperCard>
        <Pagination />
        <Link href='/link-pojedynczego-elementu/1'>
          <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </WrapperCard>
    </WrapperStyle>
  );
};

export default Films;
