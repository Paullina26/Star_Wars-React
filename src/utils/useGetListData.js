import { useState, useEffect } from 'react';
import { get } from 'api/api';

const useGetListData = ({ currentPage, setIsLoading, setPrev, setNext, listName }) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    setIsLoading(true);
    const params = `${listName}/?page=${currentPage}`;
    const element = await get(params);
    setList(element.results);
    setNext(element.next);
    setPrev(element.previous);
    setIsLoading(false);
  };

  useEffect(() => {
    getList();
    return () => {
      setList([]);
    };
  }, [currentPage]);

  return { list };
};

export default useGetListData;
