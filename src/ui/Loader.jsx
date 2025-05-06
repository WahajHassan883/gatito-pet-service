import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

function Loader({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default Loader;
