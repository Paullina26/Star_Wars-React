import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import CardCharacter from 'components/CardCharacter';
import { WrapperCard } from 'styles/Card.style';
import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';

export const Characters = () => {
  const { setCurrentPage, currentPage, nextPage, backPage, setIsLoading, setNext, setPrev, isLastPage, isFirstPage } =
    useContext(GlobalContext);
  const PEOPLE_PAGE = 'https://swapi.dev/api/people/?page=';
  const [peoples, setPeoples] = useState([]);

  // ustawia żeby paginacja była na pierwszej tronie po przejśćiu na ten url
  useEffect(() => {
    setCurrentPage(1);
  }, []);
  // pusta tablica - useeffect wywoła się tylko po pierwszym załadowaniu

  useEffect(() => {
    setIsLoading(true);
    fetch(`${PEOPLE_PAGE}${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setPeoples(data.results);
        setNext(data.next);
        setPrev(data.previous);
      })
      .finally(() => setIsLoading(false));
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
