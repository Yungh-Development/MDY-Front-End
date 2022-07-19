import React from "react";

export const ShoesList = (ShoesRenderList) => (
  <div>
    {ShoesRenderList.map(({ name, price, quantity, colors, sizes, index }) => (
      <div key={index}>
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
    ))}
  </div>
);
