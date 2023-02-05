import { WrapperCard } from 'styles/Card.style';
import Pagination from 'components/Pagination';
import { useEffect, useState, useContext } from 'react';
import { get } from 'api/api';
import CardPlanet from 'components/CardPlanet';
import usePagination from 'utils/usePagination';
import { GlobalContext } from 'utils/GlobalContext';

export const Planets = () => {
  const { setIsLoading } = useContext(GlobalContext);
  const { currentPage, nextPage, backPage, setNext, setPrev, isLastPage, isFirstPage } = usePagination();
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    setIsLoading(true);
    const planets = await get(`planets/?page=${currentPage}`);
    setPlanets(planets.results);
    setNext(planets.next);
    setPrev(planets.previous);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanets();

    return () => {
      setPlanets([]);
    };
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
