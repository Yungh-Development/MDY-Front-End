import React, { useContext } from "react";
import { ExchangeCoinContext } from "../../../../../exchangeCoinContext";
import { CartItemsContext } from "../../../../../cartItemsContext";
import { UserLoginDataContext } from "../../../../../userLoginDataContext";

export const UserCartContainer = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const [CartItemsList] = useContext(CartItemsContext);
  const userLoginData = useContext(UserLoginDataContext);

  const checkOut = () => {
    console.log("Há!");
  };

  console.log(userLoginData[0]);

  return (
    // const [showCart, setShowCart] = useState(true);
    <div className="relative">
      <div className="w-[300px] h-screen pt-4 text-center shadow-stone-400 shadow">
        {currentCoin[0].value === "Dolar - $" ? (
          <div>
            <h1>Your ShoppingCart</h1>
            <div className="flex-grow mt-4 border-t border-stone-400" />
          </div>
        ) : (
          <div>
            <h1>Seu Carrinho</h1>

            <div className="flex-grow mt-4 border-t border-stone-400" />
          </div>
        )}

        {CartItemsList[0] === undefined ? (
          <div>Carrinho Vazio!</div>
        ) : (
          CartItemsList.map((option) => (
            <div key={option} className="flex flex-col">
              <span>{option.name}</span>
              <span>{option.colors}</span>
              <span>{option.sizes}</span>
              <span>{option.price}</span>
            </div>
          ))
        )}
        <div className="absolute right-4 bottom-4 bg-[#24252B] text-white p-2 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
          <label htmlFor="CheckoutButton">
            <a href="/checkout">Checkout</a>
            <input
              id="CheckoutButton"
              type="button"
              className="cursor-pointer"
              onClick={() => checkOut()}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
