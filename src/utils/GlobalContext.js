import Loader from 'components/Loader';
import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext({
  nextPage: () => {},
  backPage: () => {},
  currentPage: 1,
  isLoading: false,
  setIsLoading: () => {},
  setNext: () => {},
  setPrev: () => {},
  isLastPage: false,
  isFirstPage: true,
});

const GlobalProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [nextUrl, setNext] = useState();
  const [prevUrl, setPrev] = useState();

  const nextPage = () => {
    if (!nextUrl || isLoading) return;
    setCurrentPage(prev => prev + 1);
  };

  const backPage = () => {
    if (!prevUrl || isLoading) return;
    setCurrentPage(prev => prev - 1);
  };

  const isLastPage = !nextUrl;
  const isFirstPage = !prevUrl;

  const values = {
    nextPage,
    backPage,
    currentPage,
    isLoading,
    setIsLoading,
    setNext,
    setPrev,
    isLastPage,
    isFirstPage,
    setCurrentPage,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {isLoading && <Loader />}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
