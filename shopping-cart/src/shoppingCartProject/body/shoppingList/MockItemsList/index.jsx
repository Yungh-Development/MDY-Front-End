import React, { useContext, useState } from "react";

import { ExchangeCoinContext } from "../../../exchangeCoinContext";
import { CollectionMockContext } from "../../../collectionMock";
import { CartItemsContext } from "../../../cartItemsContext";
import { Icons } from "../../../constants";

export const MockItemsList = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const [mockList] = useContext(CollectionMockContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [colorSelect, setColorSelect] = useState();

  const buyButtonHandler = (
    name,
    price,
    colors,
    sizes,
    id,
    image,
    category,
  ) => {
    setCartItems({
      ...cartItems,
      name,
      price,
      colors: colorSelect,
      sizes,
      id,
      image,
      category,
    });
  };

  const onEventHandler = (data) => {
    setColorSelect(data);
    console.log(data);
  };

  return (
    <div className="flex grid grid-cols-2 gap-2 lg:grid lg:grid-cols-3 gap-8 xl:grid-cols-4 gap-16 p-20 ">
      {mockList.map(
        ({ name, price, quantity, colors, sizes, id, image, category }) => (
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
                    value="White"
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
                  <select className="rounded-xl">
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
                        buyButtonHandler(
                          name,
                          price,
                          colors,
                          sizes,
                          id,
                          category,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
