import React from "react";
import { CoinSelection } from "../../constants";

export const ExchangeCoin = () => (
  <div className="flex flex-col mr-12 ml-8">
    {" "}
    <span className="font-black text-sm">CURRENT COIN</span>
    <select className="font-black text-black text-base p-1 mt-2 lg:text-lg">
      {CoinSelection.map((option) => (
        <option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  </div>
);
