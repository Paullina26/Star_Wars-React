import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CardStyle, Title, Picture, WrapperCard, WrapperInformation } from 'styles/Card.style';
import { imgMoveCovers } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { WrapperStyle } from 'styles/WrapperStyles.style';

const SingleFilms = () => {
  const params = useParams();
  console.log(params);

  // const FILM_URL = `https://swapi.dev/api/films/${idFilm}`;
  // const [film, setFilm] = useState([]);

  // useEffect(() => {
  //   fetch(FILM_URL)
  //     .then(response => response.json())
  //     .then(data => {
  //       setFilm(data.results);
  //     });
  // }, []);
  // console.log(film);

  // const urlImg = imgMoveCovers.find(cover => cover.episode === data.episode_id);

  // const filmRender = film.map(film => <Card key={film.episode_id} data={film} />);

  return (
    <WrapperStyle>
      <WrapperCard>
        <CardStyle>
          {/* <Title>{data.title}</Title> */}
          {/* <Picture>
          <img src={urlImg?.imgPath || NoPicture} />
        </Picture> */}
          <Link to={`/films`}>Back</Link>
        </CardStyle>
        <WrapperInformation>
          <p>Deskrypcja</p>
          <p>data wydania</p>
          <p>studio</p>
        </WrapperInformation>
      </WrapperCard>
    </WrapperStyle>
  );
};

export default SingleFilms;
