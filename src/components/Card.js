import { useParams } from 'react-router-dom';
import { Button } from './Button';
import { CardStyle, Title, Picture } from 'styles/Card.style';
import { imgMoveCovers } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';

export const Card = props => {
  const urlImg = imgMoveCovers.find(cover => cover.episode === props.data.episode_id);
  return (
    <CardStyle>
      <Title>{props.data.title}</Title>
      <Picture>
        <img src={urlImg?.imgPath || NoPicture} />
      </Picture>
      <Button>Show More</Button>
    </CardStyle>
  );
};

export default Card;
