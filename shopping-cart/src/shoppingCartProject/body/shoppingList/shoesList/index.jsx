import React from "react";

export const ShoesList = ({ ShoesRenderList = [] }) => (
  <div className="flex justify-between p-8">
    {ShoesRenderList.map(
      ({ name, price, quantity, colors, sizes, index, image }) => (
        <div key={index} className="flex flex-col p-8">
          <img className="w-28 lg:w-60" src={image} alt="Shoes" />
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
