import { useState } from 'react';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextUrl, setNext] = useState(null);
  const [prevUrl, setPrev] = useState(null);

  const nextPage = () => {
    if (!nextUrl) return;
    setCurrentPage(prev => prev + 1);
  };

  const backPage = () => {
    if (!prevUrl) return;
    setCurrentPage(prev => prev - 1);
  };

  const isLastPage = !nextUrl;
  const isFirstPage = !prevUrl;

  return {
    nextPage,
    backPage,
    currentPage,
    setNext,
    setPrev,
    isLastPage,
    isFirstPage,
    setCurrentPage,
  };
};

export default usePagination;
