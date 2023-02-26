import SingleElementWrapper from 'shared/SingleElementWrapper';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { get } from 'api/api';

const SinglePlanet = () => {
  const params = useParams();
  const [planet, setPlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSingleListData = async () => {
    setIsLoading(true);
    const apiLink = `/planets/${params.idPlanet}`;
    const planet = await get(apiLink);
    setPlanet(planet);
    setIsLoading(false);
  };

  useEffect(() => {
    getSingleListData();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <SingleElementWrapper title={planet.name} backButton='/planets'>
      <p>{`Climate: ${planet.climate}`}</p>
      <p>{`Diameter: ${planet.diameter}`}</p>
      <p>{`Gravity: ${planet.gravity}`}</p>
      <p>{`Population: ~${planet.population}`}</p>
      <p>{`Terrain: ${planet.terrain}`}</p>
    </SingleElementWrapper>
  );
};

export default SinglePlanet;
