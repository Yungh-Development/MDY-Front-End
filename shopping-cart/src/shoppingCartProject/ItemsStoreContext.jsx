import React, { useState, useContext, createContext, useEffect } from "react";

export const ItemsStoreContext = createContext([null, () => {}]);

export const ItemsStoreContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState([]);

  useEffect(() => {
    const storeItems = localStorage.getItem(contextValue);
    if (storeItems) {
      setContextValue(JSON.parse(storeItems));
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ItemsStoreContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </ItemsStoreContext.Provider>
  );
};

export const useTestContext = () => useContext(ItemsStoreContext);
