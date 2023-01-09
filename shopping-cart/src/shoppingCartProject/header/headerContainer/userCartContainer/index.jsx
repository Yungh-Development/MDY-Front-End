import React, { useContext, useEffect } from "react";
import { ExchangeCoinContext } from "../../../ExchangeCoinContext";
import { CartItemsContext } from "../../../CartItemsContext";

const userCart = [];

export const UserCartContainer = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);

  const checkOutHandler = () => {
    localStorage.setItem(userCart, JSON.stringify([cartItems]));
  };

  const clearCartHandler = () => {
    localStorage.setItem(userCart, JSON.stringify([]));
    setCartItems([]);
    console.log("Deleto");
  };

  const deleteItemHandler = (data) => {
    const newValue = cartItems.filter((item, index) => index !== data);

    localStorage.setItem(userCart, JSON.stringify(newValue));
    setCartItems(newValue);
  };

  useEffect(() => {
    const cartStoraged = localStorage.getItem(userCart);

    const newValue = JSON.parse(cartStoraged);

    if (cartStoraged && newValue.length > 0) {
      setCartItems(JSON.parse(cartStoraged));
    }
  }, []);

  return (
    <div className="">
      <div className="absolute w-[300px] overflow-auto h-[500px] md:h-screen pt-4 md:right-0 bg-[#ffffff] text-center shadow-stone-400 shadow">
        {currentCoin[0].value === "Dolar - $" ? (
          <div>
            <h1>Your ShoppingCart</h1>
            <div className="flex-grow mt-4 pt-4 border-t border-stone-400" />
          </div>
        ) : (
          <div>
            <h1>Seu Carrinho</h1>

            <div className="flex-grow mt-4 pt-4 border-t border-stone-400" />
          </div>
        )}

        {cartItems.length === 0 ? (
          <div>Carrinho Vazio!</div>
        ) : (
          <ul className="flex flex-col divide-y ">
            {cartItems.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="flex flex-col overflow-auto p-2">
                <span>{option.name}</span>
                <span>{option.colors}</span>
                <span>{option.sizes}</span>
                {currentCoin[0].value === "Dolar - $" ? (
                  <span>{option.price}</span>
                ) : (
                  <span>{(option.price * 5.1).toFixed(2)}</span>
                )}
                <input
                  type="button"
                  id="deleteHandler"
                  value="Excluir"
                  className="text-sky-500 font-thin text-base hover:opacity-80 hover:underline my-4 w-28 ml-20 hover:cursor-pointer font-bold"
                  onClick={() => deleteItemHandler(index)}
                />
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-row justify-between p-8">
          {cartItems.length === 0 ? (
            <div className="hidden bg-[#24252B] text-white p-3 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
              <label htmlFor="ClearCartButton">
                <input
                  id="ClearCartButton"
                  type="button"
                  value="Clear Cart"
                  className="cursor-pointer"
                  onClick={() => clearCartHandler()}
                />
              </label>
            </div>
          ) : (
            <div className="block bg-[#24252B] text-white p-3 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
              <label htmlFor="ClearCartButton">
                <input
                  id="ClearCartButton"
                  type="button"
                  value="Clear Cart"
                  className="cursor-pointer"
                  onClick={() => clearCartHandler()}
                />
              </label>
            </div>
          )}
          <div className="bg-[#24252B] text-white ml-2 p-2 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
            <label htmlFor="CheckoutButton">
              <a href="/checkout" className="pt-[-20px]">
                Checkout
              </a>
              <input
                id="CheckoutButton"
                type="button"
                className="cursor-pointer"
                onClick={() => checkOutHandler()}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
