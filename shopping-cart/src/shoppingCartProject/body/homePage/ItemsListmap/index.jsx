import React, { useContext, useState, useEffect } from "react";
import { Icons } from "../../../Constants";
import { ExchangeCoinContext } from "../../../ExchangeCoinContext";
import { ItemsStoreContext } from "../../../ItemsStoreContext";

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

  const [cartItems, setCartItems] = useContext(ItemsStoreContext);
  const [colorSelect, setColorSelect] = useState("White");
  const [sizeSelect, setSizeSelect] = useState("P");

  const buyButtonHandler = () => {
    const dataList = {
      name,
      price,
      id,
      colors: colorSelect,
      sizes: sizeSelect,
      image,
    };

    // objeto vazio.
    const uniqueItemsList = {};

    const newItemsList = [...cartItems, dataList];

    if (cartItems.length > 0) {
      localStorage.setItem(userCart, JSON.stringify(newItemsList));
    }

    console.log(cartItems);

    // eslint-disable-next-line no-restricted-syntax
    for (const item of newItemsList) {
      const uniqueItem = JSON.stringify({
        name: item.name,
        price: item.price,
        id: item.id,
        colors: item.colors,
        sizes: item.sizes,
      });

      if (uniqueItemsList[uniqueItem]) {
        // eslint-disable-next-line no-plusplus, no-unused-expressions
        uniqueItemsList[uniqueItem].quantity += 1;
        // acessa o objeto/valor e adiciona mais um caso igual
      } else {
        uniqueItemsList[uniqueItem] = {
          // eslint-disable-next-line object-shorthand
          item: item,
          quantity: 1,
        };
      }

      localStorage.setItem(
        uniqueItemsList[uniqueItem],
        JSON.stringify(
          uniqueItemsList[uniqueItem],
          uniqueItemsList[uniqueItem].quantity,
        ),
      );

      setCartItems(newItemsList);
      console.log(uniqueItemsList[uniqueItem].quantity);
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
      <div className="rounded-md font-medium text-base p-4 border-2 w-[280px] shadow-[0_2px_1px_2px_rgba(0,0,0,0.2)]">
        <div className="flex relative flex-col grid justify-items-stretch justify-center">
          <img
            className="rounded-xl lg:max-w-[200px] opacity-80 hover:scale-110 duration-300 hover:opacity-100"
            src={image}
            alt={category}
          />
          <div className="flex flex-col flex ">
            <span className="text-center font-bold text-2xl pb-2">{name}</span>
            {currentCoin[0].value === "Dolar - $" ? (
              <span className="font-black text-xl text-sky-500">
                Price: {price}
              </span>
            ) : (
              <p className="font-black text-xl text-sky-500">
                Price: {(price * 5.1).toFixed(2)}
              </p>
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
