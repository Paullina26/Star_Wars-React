import { CardStyle, Title, Picture } from 'styles/Card.style';
import { imgPepole } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { Button } from './Button';

export const CardCharacter = props => {
  const urlImg = imgPepole.find(cover => cover.name === props.data.name);

  const idPeople = props.data.url.slice(29).slice(0, -1);

  return (
    <CardStyle>
      <Title>{props.data.name}</Title>
      <Picture>
        <img src={urlImg?.imgPath || NoPicture} />
      </Picture>
      <Button to={`/characters/${idPeople}`}>Show More</Button>
    </CardStyle>
  );
};

export default CardCharacter;
