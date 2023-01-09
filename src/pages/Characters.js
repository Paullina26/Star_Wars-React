import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import CardCharacter from 'components/CardCharacter';
import { WrapperCard } from 'styles/Card.style';

export const Characters = () => {
  const PEOPLE_PAGE = 'https://swapi.dev/api/people/?page=';
  const [peoples, setPeoples] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    fetch(`${PEOPLE_PAGE}${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data);
        setPeoples(data.results);
        setIsLoading(false);
      });
  }, [currentPage]);

  const nextPage = () => {
    if (!characters.next) return;
    setCurrentPage(prev => prev + 1);
  };

  const backPage = () => {
    if (!characters.previous) return;
    setCurrentPage(prev => prev - 1);
  };

  const peoplesRender = peoples.map(people => <CardCharacter key={people.name} data={people} />);
  const isLastPage = !characters.next;
  const isFirstPage = !characters.previous;

  return (
    <>
      <Pagination nextPage={nextPage} currentPage={currentPage} isLastPage={isLastPage} isFirstPage={isFirstPage} backPage={backPage} />
      {isLoading && <Loader />}
      <WrapperCard>{peoplesRender}</WrapperCard>
    </>
  );
};

export default Characters;
