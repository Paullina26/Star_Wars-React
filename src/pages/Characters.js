import Pagination from 'components/Pagination';
import { useContext } from 'react';
import CardCharacter from 'components/CardCharacter';
import { WrapperCard } from 'styles/Card.style';
import usePagination from 'utils/usePagination';
import { GlobalContext } from 'utils/GlobalContext';
import useGetListData from 'utils/useGetListData';

export const Characters = () => {
  const { setIsLoading } = useContext(GlobalContext);
  const { currentPage, nextPage, backPage, setNext, setPrev, isLastPage, isFirstPage } = usePagination();
  const { list } = useGetListData({
    currentPage,
    setNext,
    setPrev,
    setIsLoading,
    listName: 'people',
  });

  const peoplesRender = list.map(people => <CardCharacter key={people.name} data={people} />);

  return (
    <>
      <Pagination
        nextPage={nextPage}
        backPage={backPage}
        currentPage={currentPage}
        isLastPage={isLastPage}
        isFirstPage={isFirstPage}
      />
      <WrapperCard>{peoplesRender}</WrapperCard>
    </>
  );
};

export default Characters;
