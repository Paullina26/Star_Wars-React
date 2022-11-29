import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CardStyle, Title, Picture, WrapperCard } from 'styles/Card.style';
import { imgMoveCovers } from 'data/img';
import NoPicture from '../assets/Picture/noPicture.jpg';

const SingleFilms = () => {
  const params = useParams();
  console.log(params);

  // const FILM_URL = `https://swapi.dev/api/films/${params}`;
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
      <WrapperCard>
        {/* <Title>{data.title}</Title> */}
        {/* <Picture>
          <img src={urlImg?.imgPath || NoPicture} />
        </Picture> */}
        <Link to={`/films`}>Back</Link>
      </WrapperCard>
  );
};

export default SingleFilms;
