import React, { useState, useContext, createContext } from "react";

export const FilteredContextList = createContext([null, () => {}]);

export const CategoryItems = [
  { value: "categories", label: "Chose a Category" },
  { value: "TShirts", label: "T-Shirt" },
  { value: "Shorts", label: "Shorts" },
  { value: "Shoes", label: "Shoes" },
];

export const FilteredContextListProvider = ({ children, value }) => {
  const [contextValue, setContextValue] = useState(value || CategoryItems);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FilteredContextList.Provider value={[contextValue, setContextValue]}>
      {children}
    </FilteredContextList.Provider>
  );
};

export const useTestContext = () => useContext(FilteredContextList);
