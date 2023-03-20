import { CardStyle, Title, Picture } from 'styles/Card.style';
// import { imgPeople } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { Button } from '../styles/Button.style';

export const CardPlanet = props => {
  // const urlImg = imgPlanet.find(img => img.name === props.data.name);
  const idPlanet = props.data.url.slice(30).slice(0, -1);

  return (
    <CardStyle>
      <Title>{props.data.name}</Title>
      <Picture>
        <img src={NoPicture} />
      </Picture>
      <Button to={`/planets/${idPlanet}`}>Show More</Button>
    </CardStyle>
  );
};

export default CardPlanet;
