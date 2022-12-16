import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { CardStyle, Title, Picture, WrapperCard, WrapperInformation } from 'styles/Card.style';
import { imgMoveCovers } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { WrapperStyle } from 'styles/WrapperStyles.style';
import { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import Loader from '../components/Loader';

const SingleFilm = () => {
  const params = useParams();
  const FILM_URL = `https://swapi.dev/api/films/${params.idFilm}`;
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(FILM_URL)
      .then(response => response.json())
      .then(data => {
        setFilm(data);
        setIsLoading(false);
      });
  }, []);

  const urlImg = imgMoveCovers.find(cover => cover.episode === film.episode_id);

  return (
    <WrapperStyle>
      {isLoading && <Loader />}
      <WrapperCard>
        <CardStyle>
          <Title>{film.title}</Title>
          <Picture>
            <img src={urlImg?.imgPath || NoPicture} />
          </Picture>
          <Button to={`/films`}>Back</Button>
        </CardStyle>
        <WrapperInformation>
          <p>{`Opening Crawl: ${film.opening_crawl}`}</p>
          <p>{`Date Production: ${film.release_date}`}</p>
          <p>{`Producer: ${film.producer}`}</p>
          <p>{`Director: ${film.director}`}</p>
        </WrapperInformation>
      </WrapperCard>
    </WrapperStyle>
  );
};

export default SingleFilm;
