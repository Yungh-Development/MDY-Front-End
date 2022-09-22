import React, { useState, createContext } from "react";

export const UserLoginDataContext = createContext([null, () => {}]);

export const UserLoginDataContextProvider = ({ children, value }) => {
  const [contextValue, setContextValue] = useState(value || children);

  console.log(contextValue);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserLoginDataContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </UserLoginDataContext.Provider>
  );
};
