import React, { useContext } from "react";
import { Icons } from "../../../constants";
import { ExchangeCoinContext } from "../../../exchangeCoinContext";

export const ItemsListMapping = ({
  colors,
  image,
  category,
  name,
  price,
  quantity,
  colorSelect,
  sizes,
  id,
  onEventHandler,
  onSizeEventHandler,
  buyButtonHandler,
}) => {
  const currentCoin = useContext(ExchangeCoinContext);

  return (
    <div key={id} className="flex  justify-evenly max-w-[350px]">
      <div className="rounded-xl font-black p-4 border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
        <div className="flex relative flex-col">
          <img
            className="rounded-xl lg:max-w-[200px]"
            src={image}
            alt={category}
          />
          <div className="flex flex-col flex ">
            <span className="text-center text-xl pb-2">{name}</span>
            {currentCoin[0].value === "Dolar - $" ? (
              <span>Price: {price}</span>
            ) : (
              <span>Price: {(price * 5.1).toFixed(2)}</span>
            )}
            <span>Stock: {quantity}</span>
            <select
              className=" text-black rounded-xl mb-2 mt-2"
              onChange={(e) => onEventHandler(e.target.value)}
              defaultValue={colorSelect}
            >
              {colors.map((option) => (
                <option
                  className="w-20"
                  key={option}
                  value={option}
                  label={option}
                />
              ))}
            </select>
            <select
              className="rounded-xl"
              onChange={(e) => onSizeEventHandler(e.target.value)}
            >
              {sizes.map((option) => (
                <option key={option} value={option} label={option} />
              ))}
            </select>
          </div>
          <div className="relative pt-12 hover:opacity-80 ">
            <div className="absolute bottom-0 right-2 flex border-solid border-2 border-sky-500  rounded-full p-1 float-right cursor-pointer">
              <Icons.CartIcon
                width="20px"
                height="20px"
                className=""
                fill="#3FBCF4"
              />
              <input
                type="button"
                value="Buy"
                className="pl-1 pr-1 text-black"
                onClick={() =>
                  buyButtonHandler(name, price, colors, sizes, category)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
