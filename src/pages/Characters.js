import Pagination from 'components/Pagination';
import { useContext, useEffect, useState } from 'react';
import CardCharacter from 'components/CardCharacter';
import { WrapperCard } from 'styles/Card.style';
import { get } from 'api/api';
import usePagination from 'utils/usePagination';
import { GlobalContext } from 'utils/GlobalContext';

export const Characters = () => {
  const { setIsLoading } = useContext(GlobalContext);
  const { currentPage, nextPage, backPage, setNext, setPrev, isLastPage, isFirstPage } = usePagination();
  const [peoples, setPeoples] = useState([]);

  const getPeoples = async () => {
    setIsLoading(true);
    const params = `people/?page=${currentPage}`;
    const peoples = await get(params);
    setPeoples(peoples.results);
    setNext(peoples.next);
    setPrev(peoples.previous);
    setIsLoading(false);
  };

  useEffect(() => {
    getPeoples();
    return () => {
      setPeoples([]);
    };
  }, [currentPage]);

  const peoplesRender = peoples.map(people => <CardCharacter key={people.name} data={people} />);

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
