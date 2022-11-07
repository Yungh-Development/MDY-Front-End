import React, { useState, createContext } from "react";

const userCartContext = createContext([null, () => {}]);

export const UserCartContextProvider = ({ children, value }) => {
  const [contextValue, setContextValue] = useState(value || children);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <userCartContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </userCartContext.Provider>
  );
};
