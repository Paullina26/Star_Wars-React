import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import CardCharacter from 'components/CardCharacter';
import { WrapperCard } from 'styles/Card.style';
import { get } from 'api/api';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';

export const Characters = () => {
  const { setCurrentPage, currentPage, nextPage, backPage, setIsLoading, setNext, setPrev, isLastPage, isFirstPage } =
    useContext(GlobalContext);
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const getPeoples = async () => {
    const params = `people/?page=${currentPage}`;
    const peoples = await get(params);
    setPeoples(peoples.results);
    setNext(peoples.next);
    setPrev(peoples.previous);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getPeoples();
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
