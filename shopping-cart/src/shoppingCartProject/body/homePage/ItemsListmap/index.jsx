import React, { useContext, useState, useEffect } from "react";
import { Icons } from "../../../Constants";
import { ExchangeCoinContext } from "../../../ExchangeCoinContext";
import { CartItemsContext } from "../../../CartItemsContext";

const sizes = ["P", "M", "G", "GG"];
const userCart = [];

export const ItemsListMapping = ({
  colors,
  image,
  category,
  name,
  price,
  quantity,
  id,
}) => {
  const currentCoin = useContext(ExchangeCoinContext);

  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [colorSelect, setColorSelect] = useState("White");
  const [sizeSelect, setSizeSelect] = useState("P");

  const buyButtonHandler = () => {
    const Datalist = {
      name,
      price,
      colors: colorSelect,
      sizes: sizeSelect,
      image,
    };
    setCartItems([...cartItems, Datalist]);

    const newItemsList = [...cartItems, Datalist];

    if (cartItems.length > 0) {
      localStorage.setItem(userCart, JSON.stringify(newItemsList));
    }
  };

  const onColorEventHandler = (data) => {
    setColorSelect(data);
  };

  const onSizeEventHandler = (data) => {
    setSizeSelect(data);
  };

  useEffect(() => {
    const cartStoraged = localStorage.getItem(userCart);

    const newValue = JSON.parse(cartStoraged);

    if (cartStoraged && newValue.length > 0) {
      setCartItems(JSON.parse(cartStoraged));
    }
  }, []);

  return (
    <div key={id} className="flex  justify-evenly max-w-[350px]">
      <div className="rounded-xl font-black p-4 border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
        <div className="flex relative flex-col">
          <img
            className="rounded-xl lg:max-w-[200px] hover:scale-110 duration-300"
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
              onChange={(e) => onColorEventHandler(e.target.value)}
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
          <div className="relative pt-12 hover:opacity-80 hover:cursor-pointer">
            <div className="absolute bottom-0 right-2 flex border-solid border-2 border-sky-500  rounded-full p-1 float-right ">
              <Icons.CartIcon
                width="20px"
                height="20px"
                className=""
                fill="#3FBCF4"
              />
              <input
                type="button"
                value="Buy"
                className="pl-1 pr-1 text-black hover:cursor-pointer"
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
