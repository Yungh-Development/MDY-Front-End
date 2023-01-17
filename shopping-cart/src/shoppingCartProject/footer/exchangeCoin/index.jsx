import React, { useContext, useEffect, useState } from "react";

import { ExchangeCoinContext } from "../../ExchangeCoinContext";

// Setar valor atual Select
export const ExchangeCoin = () => {
  const [currentCoin, setCurrentCoin] = useContext(ExchangeCoinContext);
  const [teste, setTeste] = useState(currentCoin);

  /*        {coinStoraged[0] ? (
  <option label={teste.value} value={teste.value} />
) : (
  <>
    {" "}
    <option label={currentCoin.Real} value={currentCoin.Real} />
    <option label={currentCoin.Dolar} value={currentCoin.Dolar} />{" "}
  </>
)} */

  const ExchangeHandler = (data) => {
    setCurrentCoin({
      ...currentCoin,
      value: data,
    });
    console.log(teste);
  };

  useEffect(() => {
    const coinStoraged = localStorage.getItem(teste);

    setTeste(JSON.parse(coinStoraged));
    console.log(coinStoraged);
  }, []);

  return (
    <div className="flex flex-col">
      {" "}
      <span className="font-black text-sm">CURRENT COIN</span>
      <select
        className="font-black text-black text-base p-1 mt-2 lg:text-lg"
        onChange={(event) => ExchangeHandler(event.target.value)}
      >
        {teste === null ? (
          <>
            <option label={currentCoin.Real} value={currentCoin.Real} />
            <option label={currentCoin.Dolar} value={currentCoin.Dolar} />{" "}
          </>
        ) : (
          <>
            {" "}
            <option label={teste} value={teste} />
          </>
        )}
      </select>
    </div>
  );
};
