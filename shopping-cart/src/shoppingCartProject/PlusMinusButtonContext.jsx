/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */

import React from "react";

export const PlusMinusButton = ({ item, onClickPlus, onClickMinus }) => (
  <div className="flex justify-center py-1">
    <input
      type="button"
      id="addButtonHandler"
      value="+"
      className="text-[#1d4ed8] bg-[#4ade80] px-2  font-thin text-lg hover:opacity-90 hover:cursor-pointer font-bold"
      onClick={() => onClickPlus(item)}
    />
    <span className="border-solid border-[1px] border-[#0f172a] px-4">
      {item.quantity}
    </span>
    <input
      type="button"
      id="deleteButtonHandler"
      value="-"
      className="text-[#1d4ed8] bg-[#f87171] px-2 font-thin text-lg hover:opacity-90 hover:cursor-pointer font-bold"
      onClick={() => onClickMinus(item)}
    />
  </div>
);
