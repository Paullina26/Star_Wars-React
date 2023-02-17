import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import SingleElementWrapper from 'shared/SingleElementWrapper';
import { imgPeople } from 'data/img';

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

  const urlImg = imgPeople.find(cover => cover.name === character.name);

  if (isLoading) return <Loader />;

  return (
    <SingleElementWrapper img={urlImg?.imgPath} title={character.name} backButton='/characters'>
      <p>{`Height: ${character.height}`}</p>
      <p>{`Eye Color: ${character.eye_color}`}</p>
      <p>{`Birth Year: ${character.birth_year}`}</p>
      <p>{`Gender: ${character.gender}`}</p>
    </SingleElementWrapper>
  );
};

export default SingleCharacter;
