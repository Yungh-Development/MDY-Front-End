import React, { useContext } from "react";
import { LayoutPage } from "../..";
import { CartItemsContext } from "../../cartItemsContext";
import { ExchangeCoinContext } from "../../exchangeCoinContext";

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
      <ul className="pt-28">
        {cartItems[0].map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="flex p-4 m-6 justify-evenly rounded-xl font-black border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
            <img src={option.image} alt="" />
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
              value="X"
              className="hover:cursor-pointer bg-white rounded-md px-4 pt-[-15px] inline-flex items-center justify-center bg-[#ef4444] fonte-black hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
