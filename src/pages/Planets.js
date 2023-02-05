import { WrapperCard } from 'styles/Card.style';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { get } from 'api/api';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import CardPlanet from 'components/CardPlanet';

export const Planets = () => {
  const { setCurrentPage, currentPage, nextPage, backPage, setIsLoading, setNext, setPrev, isLastPage, isFirstPage } =
    useContext(GlobalContext);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const getPlanets = async () => {
    const params = `planets/?page=${currentPage}`;
    const planets = await get(params);
    setPlanets(planets.results);
    setNext(planets.next);
    setPrev(planets.previous);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getPlanets();
  }, [currentPage]);

  const planetsRender = planets.map(planet => <CardPlanet key={planet.name} data={planet} />);

  return (
    <>
      <Pagination
        nextPage={nextPage}
        backPage={backPage}
        currentPage={currentPage}
        isLastPage={isLastPage}
        isFirstPage={isFirstPage}
      />
      <WrapperCard>{planetsRender}</WrapperCard>
    </>
  );
};

export default Planets;
