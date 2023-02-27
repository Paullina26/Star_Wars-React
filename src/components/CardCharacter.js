import { CardStyle, Title, Picture } from 'styles/Card.style';
import { imgPeople } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { Button } from '../styles/Button.style';

export const CardCharacter = props => {
  const urlImg = imgPeople.find(img => img.name === props.data.name);
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
