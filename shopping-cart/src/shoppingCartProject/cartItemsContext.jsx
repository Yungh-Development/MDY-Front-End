import React, { useState, useContext, createContext } from "react";

export const CartItemsContext = createContext([null, () => {}]);

export const AddedButtonCartProvider = ({ children, value }) => {
  const [contextValue, setContextValue] = useState(value);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartItemsContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useTestContext = () => useContext(CartItemsContext);
