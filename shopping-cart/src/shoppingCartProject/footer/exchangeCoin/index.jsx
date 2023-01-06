import React, { useContext, useEffect } from "react";

import { ExchangeCoinContext } from "../../ExchangeCoinContext";

// Setar valor atual Select
export const ExchangeCoin = () => {
  const [currentCoin, setCurrentCoin] = useContext(ExchangeCoinContext);

  const ExchangeHandler = (data) => {
    setCurrentCoin({
      ...currentCoin,
      value: data,
    });
    console.log(data);
  };

  useEffect(() => {
    const coinStoraged = localStorage.getItem(currentCoin);

    if (coinStoraged) {
      setCurrentCoin(JSON.parse(coinStoraged));
    }
  }, []);

  return (
    <div className="flex flex-col">
      {" "}
      <span className="font-black text-sm">CURRENT COIN</span>
      <select
        className="font-black text-black text-base p-1 mt-2 lg:text-lg"
        onChange={(event) => ExchangeHandler(event.target.value)}
        defaultValue={ExchangeCoinContext}
      >
        <option label={currentCoin.Real} value={currentCoin.Real} />
        <option label={currentCoin.Dolar} value={currentCoin.Dolar} />{" "}
      </select>
    </div>
  );
};
