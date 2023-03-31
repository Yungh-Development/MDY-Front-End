import React, { useContext } from "react";
import { LayoutPage } from "../..";
// import { ItemsStoreContext } from "../../ItemsStoreContext";
import { ExchangeCoinContext } from "../../ExchangeCoinContext";
import { CartItemsContext } from "../../CartItemsContext";

export const CheckoutPage = () => {
  const cartItems = useContext(CartItemsContext);
  const [items, setItems] = useContext(CartItemsContext);
  const currentCoin = useContext(ExchangeCoinContext);

  let totalValue = 0;

  const deleteItemHandler = (item) => {
    const copyList = [...items];

    const newValue = copyList.filter(
      (option) => option.uniqueKey !== item.uniqueKey,
    );
    setItems([...newValue]);
  };

  cartItems[0].forEach((item) => {
    totalValue += item.price;
  });

  console.log(cartItems[0]);

  return (
    <LayoutPage>
      <ul className="pt-10 grid justify-items-center sm:justify-items-stretch md:pt-28 ">
        {cartItems[0].map((option) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="flex flex-col w-[250px] items-center justify-center sm:flex-row sm:w-[auto] p-4 m-6 sm:justify-evenly items-center rounded-xl font-black border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
            <img
              className="w-12 md:w-24 hover:scale-125 duration-300"
              src={option.image}
              alt=""
            />
            <span className="p-2">Nome: {option.name}</span>
            <span className="p-2">Color: {option.color}</span>
            <span className="p-2">Size: {option.size}</span>
            <span className="p-2">Quantity {option.quantity}</span>
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
              onClick={() => deleteItemHandler(option)}
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
