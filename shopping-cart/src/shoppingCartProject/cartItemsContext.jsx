import React, { useState, useContext, createContext, useEffect } from "react";

export const CartItemsContext = createContext([null, () => {}]);

export const AddedButtonCartProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState([]);

  useEffect(() => {
    const cartStoraged = localStorage.getItem(contextValue);
    if (cartStoraged) {
      setContextValue(JSON.parse(cartStoraged));
    }
    console.log(contextValue);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartItemsContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useTestContext = () => useContext(CartItemsContext);
