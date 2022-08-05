import React, { useContext } from "react";
import { CoinSelection } from "../../constants";

import { ExchangeCoinContext } from "../../ExchangeCoinContext";

// Setar valor atual Select
export const ExchangeCoin = () => {
  const [currentCoin, setCurrentCoin] = useContext(ExchangeCoinContext);

  console.log(currentCoin);

  return (
    <div className="flex flex-col mr-12 ml-8">
      {" "}
      <span className="font-black text-sm">CURRENT COIN</span>
      <select
        className="font-black text-black text-base p-1 mt-2 lg:text-lg"
        onChange={(event) => setCurrentCoin(event.target.value)}
        defaultValue={ExchangeCoinContext}
      >
        {CoinSelection.map((option) => (
          <option
            value={option.value}
            key={option.value}
            label={option.label}
          />
        ))}
      </select>
    </div>
  );
};
