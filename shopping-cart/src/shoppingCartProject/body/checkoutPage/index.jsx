import React, { useContext } from "react";
import { LayoutPage } from "../..";
import { CartItemsContext } from "../../CartItemsContext";
import { ExchangeCoinContext } from "../../ExchangeCoinContext";

const userCart = [];

export const CheckoutPage = () => {
  const cartItems = useContext(CartItemsContext);
  const [items, setItems] = useContext(CartItemsContext);
  const currentCoin = useContext(ExchangeCoinContext);

  let totalValue = 0;

  const deleteItemHandler = (data) => {
    const newValue = items.filter((item, index) => index !== data);

    localStorage.setItem(userCart, JSON.stringify(newValue));
    setItems(newValue);
  };

  cartItems[0].forEach((item) => {
    totalValue += item.price;
  });
  console.log(cartItems);

  return (
    <LayoutPage>
      <ul className="pt-10 md:pt-28">
        {cartItems[0].map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="flex p-4 m-6 justify-evenly items-center rounded-xl font-black border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
            <img
              className="w-12 md:w-24 hover:scale-125 duration-300"
              src={option.image}
              alt=""
            />
            <span className="p-2">Nome: {option.name}</span>
            <span className="p-2">Color: {option.colors}</span>
            <span className="p-2">Size: {option.sizes}</span>
            {currentCoin[0].value === "Dolar - $" ? (
              <span>{option.price}</span>
            ) : (
              <span>{(option.price * 5.1).toFixed(2)}</span>
            )}

            <input
              type="button"
              id="deleteHandler"
              value="x"
              className="bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-0 px-2 border border-red-700 rounded"
              onClick={() => deleteItemHandler(index)}
            />
          </li>
        ))}
      </ul>
      <ul className="">
        {currentCoin[0].value === "Dolar - $" ? (
          <li className="flex p-4 m-6 justify-evenly rounded-xl font-black border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
            <span className="p-2">Total Price: {totalValue}</span>
          </li>
        ) : (
          <li className="flex p-4 m-6 justify-evenly rounded-xl font-black border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
            <span className="p-2">
              Total a Pagar: {(totalValue * 5.1).toFixed(2)}
            </span>
          </li>
        )}
      </ul>
    </LayoutPage>
  );
};
