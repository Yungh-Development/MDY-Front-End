import React, { useState, useContext, createContext, useEffect } from "react";

import { StorageKey } from "./constants";

export const CartItemsContext = createContext([null, () => {}]);

export const CartItemsContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState([]);

  const setValue = (value) => {
    setContextValue(value);
    localStorage.setItem(StorageKey, JSON.stringify(value));
  };

  useEffect(() => {
    const storeItems = localStorage.getItem(StorageKey, contextValue);

    if (storeItems) {
      setContextValue(JSON.parse(storeItems));
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartItemsContext.Provider value={[contextValue, setValue]}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useTestContext = () => useContext(CartItemsContext);
