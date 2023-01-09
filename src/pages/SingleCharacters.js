import { useParams } from 'react-router-dom';
import { CardStyle, Title, Picture, WrapperCard, WrapperInformation } from 'styles/Card.style';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import Loader from '../components/Loader';
import { imgMoveCovers } from 'data/img';
import SingleElementWrapper from 'shared/SingleElementWrapper';

const SingleCharacter = () => {
  const params = useParams();
  const CHARACTER_URL = `https://swapi.dev/api/people/${params.idCharacter}`;
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // TODO
    setIsLoading(true);
    fetch(CHARACTER_URL)
      .then(response => response.json())
      .then(data => {
        setCharacter(data);
        setIsLoading(false);
      });
  }, []);

  const urlImg = imgMoveCovers.find(cover => cover.episode === character.episode_id);

  if (isLoading) return <Loader />;

  return (
    <SingleElementWrapper img={urlImg?.imgPath} title={character.name} backButton='/characters'>
      <p>{`Height: ${character.height}`}</p>
      <p>{`Eye Color: ${character.eye_color}`}</p>
      <p>{`Brith Year: ${character.birth_year}`}</p>
      <p>{`Gender: ${character.gender}`}</p>
    </SingleElementWrapper>
  );
};

export default SingleCharacter;
