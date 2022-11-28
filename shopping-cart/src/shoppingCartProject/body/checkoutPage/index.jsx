import React, { useContext } from "react";
import { LayoutPage } from "../..";
import { CartItemsContext } from "../../cartItemsContext";
import { ExchangeCoinContext } from "../../exchangeCoinContext";

export const CheckoutPage = () => {
  const cartItems = useContext(CartItemsContext);
  const exchangeCoin = useContext(ExchangeCoinContext);

  let totalValue = 0;

  cartItems[0].forEach((item) => {
    totalValue += item.price;
  });
  console.log(exchangeCoin[0]);

  return (
    <LayoutPage>
      <ul className="">
        {cartItems[0].map((option) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="flex p-4 m-6 justify-evenly rounded-xl font-black border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
            <span className="p-2">Nome: {option.name}</span>
            <span className="p-2">Color: {option.colors}</span>
            <span className="p-2">Size: {option.sizes}</span>
            <span className="p-2">Price: {option.price}</span>
          </li>
        ))}
      </ul>
      <ul className="">
        {exchangeCoin[0].value === "Dolar - $" ? (
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
