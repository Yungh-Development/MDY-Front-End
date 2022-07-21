import React from "react";

export const TShirtList = ({ TShirtListList = [] }) => (
  <div className="flex justify-between p-8">
    {TShirtListList.map(
      ({ name, price, quantity, colors, sizes, index, image }) => (
        <div
          key={index}
          className="flex flex-col rounded-xl border-1 shadow-[0_15px_60px_15px_rgba(0,0,0,0.2)]"
        >
          <img className="w-28 lg:w-60" src={image} alt="T-Shirt" />
          <span>{name}</span>
          <span>price: {price}</span>
          <span>stock: {quantity}</span>
          <select className=" text-black">
            {colors.map((option) => (
              <option
                className="w-20"
                key={option}
                value={option}
                label={option}
              />
            ))}
          </select>
          <select>
            {sizes.map((option) => (
              <option key={option} value={option} label={option} />
            ))}
          </select>
        </div>
      ),
    )}
  </div>
);
