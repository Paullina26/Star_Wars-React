import Loader from 'components/Loader';
import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const values = {
    isLoading,
    setIsLoading,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {isLoading && <Loader />}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
