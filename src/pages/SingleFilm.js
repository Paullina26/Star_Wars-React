import { useParams } from 'react-router-dom';
import { imgMoveCovers } from 'data/img';
import { useEffect, useState } from 'react';
import SingleElementWrapper from 'shared/SingleElementWrapper';
import { get } from 'api/api';

const SingleFilm = () => {
  const { idFilm } = useParams();
  const [film, setFilm] = useState([]);

  const getFilm = async () => {
    const params = `films/${idFilm}`;
    const film = await get(params);
    setFilm(film);
  };

  useEffect(() => {
    getFilm();
  }, []);

  const urlImg = imgMoveCovers.find(cover => cover.episode === film.episode_id);

  return (
    <SingleElementWrapper img={urlImg?.imgPath} title={film.title} backButton='/films'>
      <p>Opening Crawl: {film.opening_crawl}</p>
      <p>Date Production: {film.release_date}</p>
      <p>Producer: {film.producer}</p>
      <p>Director: {film.director}</p>
    </SingleElementWrapper>
  );
};

export default SingleFilm;
