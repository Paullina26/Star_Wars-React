import { CardStyle, Title, Picture } from 'styles/Card.style';
import { imgMoveCovers } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { Link } from 'react-router-dom';

export const CardFilm = props => {
  const urlImg = imgMoveCovers.find(cover => cover.episode === props.data.episode_id);

  const idFilm = props.data.url.slice(28).slice(0, -1);

  return (
    <CardStyle>
      <Title>{props.data.title}</Title>
      <Picture>
        <img src={urlImg?.imgPath || NoPicture} />
      </Picture>
      <Link to={`/films/${idFilm}`}>Show More</Link>
    </CardStyle>
  );
};

export default CardFilm;
