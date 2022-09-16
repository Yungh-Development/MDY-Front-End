import React, { useState, useContext, createContext } from "react";

export const AddedButtonCart = createContext([null, () => {}]);

export const AddedButtonCartProvider = ({ value }) => {
  const [contextValue, setContextValue] = useState(value);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AddedButtonCart.Provider value={[contextValue, setContextValue]} />
  );
};

export const useTestContext = () => useContext(AddedButtonCart);
