import SingleElementWrapper from 'shared/SingleElementWrapper';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const SinglePlanet = () => {
  return (
    <SingleElementWrapper title={'planet.name'} backButton='/planets'>
      {/* <p>{`Climate: ${props.climate}`}</p> */}
      {/* <p>{`Eye Color: ${props.eye_color}`}</p>
      <p>{`Birth Year: ${props.birth_year}`}</p>
      <p>{`Gender: ${props.gender}`}</p> */}
    </SingleElementWrapper>
  );
};

export default SinglePlanet;
