import { WrapperStyle } from 'styles/WrapperStyles.style';
import Pagination from 'components/Pagination';
import Card from 'components/Card';
import { WrapperCard } from 'components/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Films = () => {
  // const [films, setFilms] = useState([])
  // // const params = useParams();

  // useEffect(() => {
  //   console.log('teworze sie');
  //   fetch => () => {
  //     setFilms(data)
  //   }
  // }, []);

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
        <Card />
        <Card />
        <Card />
      </WrapperCard>
    </WrapperStyle>
  );
};

export default Films;
