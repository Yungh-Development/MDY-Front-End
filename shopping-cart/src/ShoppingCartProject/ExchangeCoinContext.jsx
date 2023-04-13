import React, { useState, useContext, createContext } from "react";

export const ExchangeCoinContext = createContext([null, () => {}]);

export const CoinSelection = { Real: "Real - R$", Dolar: "Dolar - $" };

export const ExchangeCoinContextProvider = ({ children, value }) => {
  const [contextValue, setContextValue] = useState(value || CoinSelection);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ExchangeCoinContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </ExchangeCoinContext.Provider>
  );
};

export const useTestContext = () => useContext(ExchangeCoinContext);
