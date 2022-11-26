import { useParams } from 'react-router-dom';
import { Button } from './Button';
import { CardStyle, Title, Picture } from 'styles/Card.style';

import ImgEpisode1 from '../assets/covers_films/episode_1.jpg';
import ImgEpisode2 from '../assets/covers_films/episode_2.jpg';
import ImgEpisode3 from '../assets/covers_films/episode_3.jpg';
import ImgEpisode4 from '../assets/covers_films/episode_4.jpg';
import ImgEpisode5 from '../assets/covers_films/episode_5.jpg';
import ImgEpisode6 from '../assets/covers_films/episode_6.jpg';

const episodeImg = [ImgEpisode1, ImgEpisode2, ImgEpisode3, ImgEpisode4, ImgEpisode5, ImgEpisode6];

export const checkingImage = (arrayImage, arrayAPI, element, params) => {
  const image = arrayImage.find(img => img[params.first] === arrayAPI[params.second]);

  if (image) {
    element.setAttribute('src', image.imgPath);
  } else {
    element.setAttribute('src', 'img/noPicture.jpg');
  }
};

export const Card = props => {
  return (
    <CardStyle>
      <Title>{props.data.title}</Title>
      <Picture>
        <img src={episodeImg[props.data.episode_id - 1]} />
      </Picture>
      <Button>Show More</Button>
    </CardStyle>
  );
};

export default Card;
