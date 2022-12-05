import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CardStyle, Title, Picture, WrapperCard, WrapperInformation } from 'styles/Card.style';
import { imgMoveCovers } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { WrapperStyle } from 'styles/WrapperStyles.style';
import { useEffect, useState } from 'react';

const SingleFilm = () => {
  const params = useParams();

  const FILM_URL = `https://swapi.dev/api/films/${params.idFilm}`;

  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(FILM_URL)
      .then(response => response.json())
      .then(data => {
        setFilm(data);
      });
  }, []);

  const urlImg = imgMoveCovers.find(cover => cover.episode === film.episode_id);

  return (
    <WrapperStyle>
      <WrapperCard>
        <CardStyle>
          <Title>{film.title}</Title>
          <Picture>
            <img src={urlImg?.imgPath || NoPicture} />
          </Picture>
          <Link to={`/films`}>Back</Link>
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
