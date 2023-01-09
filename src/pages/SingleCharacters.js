import { useParams } from 'react-router-dom';
import { CardStyle, Title, Picture, WrapperCard, WrapperInformation } from 'styles/Card.style';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { WrapperStyle } from 'styles/WrapperStyles.style';
import { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import Loader from '../components/Loader';
import { imgPepole } from 'data/img';

const SingleCharacter = () => {
  const params = useParams();
  const CHARACTER_URL = `https://swapi.dev/api/people/${params.idCharacter}`;
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(CHARACTER_URL)
      .then(response => response.json())
      .then(data => {
        setCharacter(data);
        setIsLoading(false);
      });
  }, []);
  const urlImg = imgPepole.find(cover => cover.name === character.name);

  return (
    <WrapperStyle>
      {isLoading && <Loader />}
      <WrapperCard>
        <CardStyle>
          <Title>{character.name}</Title>
          <Picture>
            <img src={urlImg?.imgPath || NoPicture} />
          </Picture>
          <Button to={`/characters`}>Back</Button>
        </CardStyle>
        <WrapperInformation>
          <p>{`Height: ${character.height}`}</p>
          <p>{`Eye Color: ${character.eye_color}`}</p>
          <p>{`Brith Year: ${character.birth_year}`}</p>
          <p>{`Gender: ${character.gender}`}</p>
        </WrapperInformation>
      </WrapperCard>
    </WrapperStyle>
  );
};

export default SingleCharacter;
