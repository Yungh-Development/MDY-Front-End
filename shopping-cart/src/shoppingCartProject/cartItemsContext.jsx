import React, { useState, useContext, createContext } from "react";

export const CartItemsContext = createContext([null, () => {}]);

export const AddedButtonCartProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState([]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartItemsContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useTestContext = () => useContext(CartItemsContext);
