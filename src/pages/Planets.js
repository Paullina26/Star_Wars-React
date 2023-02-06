import { WrapperCard } from 'styles/Card.style';
import Pagination from 'components/Pagination';
import { useContext } from 'react';
import CardPlanet from 'components/CardPlanet';
import usePagination from 'utils/usePagination';
import { GlobalContext } from 'utils/GlobalContext';
import useGetListData from 'utils/useGetListData';

export const Planets = () => {
  const { setIsLoading } = useContext(GlobalContext);
  const { currentPage, nextPage, backPage, setNext, setPrev, isLastPage, isFirstPage } = usePagination();
  const { list } = useGetListData({
    currentPage,
    setNext,
    setPrev,
    setIsLoading,
    listName: 'planets',
  });

  const planetsRender = list.map(planet => <CardPlanet key={planet.name} data={planet} />);

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
