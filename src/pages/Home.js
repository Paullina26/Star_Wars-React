import { WrapperInformation } from 'styles/Card.style';

export const Home = () => {
  return (
    <WrapperInformation>
      <p>Star Wars in React.</p>
      <p>I created this project to practice using React and fetching data from the API.</p>
      <p>Resource information:</p>
      <p>
        API: <a href='https://swapi.dev/'>SWAPI</a>
      </p>
      <p>
        Picture: <a href='https://starwars.fandom.com/wiki/Main_Page'>Wookieepedia</a>
      </p>
    </WrapperInformation>
  );
};

export default Home;
