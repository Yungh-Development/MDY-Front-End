import React, { useState, createContext } from "react";

export const searchFilterContext = createContext([null, () => {}]);

export const SearchFilterContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <searchFilterContext.Provider value={[searchData, setSearchData]}>
      {children}
    </searchFilterContext.Provider>
  );
};
