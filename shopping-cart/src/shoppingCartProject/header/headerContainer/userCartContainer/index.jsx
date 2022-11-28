import React, { useContext } from "react";
import { ExchangeCoinContext } from "../../../exchangeCoinContext";
import { CartItemsContext } from "../../../cartItemsContext";

const userCart = [];

export const UserCartContainer = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);

  const checkOutHandler = () => {
    localStorage.setItem(userCart, JSON.stringify([cartItems]));
  };

  const clearCartHandler = () => {
    localStorage.removeItem(cartItems);
    setCartItems([]);
    console.log("Deleto");
  };

  console.log(cartItems);

  return (
    // const [showCart, setShowCart] = useState(true);
    <div className="relative">
      <div className="w-[300px] h-screen pt-4 text-center  overflow-auto shadow-stone-400 shadow">
        {currentCoin[0].value === "Dolar - $" ? (
          <div>
            <h1>Your ShoppingCart</h1>
            <div className="flex-grow mt-4 pt-6 border-t border-stone-400" />
          </div>
        ) : (
          <div>
            <h1>Seu Carrinho</h1>

            <div className="flex-grow mt-4 pt-6 border-t border-stone-400" />
          </div>
        )}

        {cartItems.length === 0 ? (
          <div>Carrinho Vazio!</div>
        ) : (
          <ul>
            {cartItems.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="flex flex-col overflow-auto">
                <span>{option.name}</span>
                <span>{option.colors}</span>
                <span>{option.sizes}</span>
                {currentCoin[0].value === "Dolar - $" ? (
                  <span>{option.price}</span>
                ) : (
                  <span>{(option.price * 5.1).toFixed(2)}</span>
                )}
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

          <div className="bg-[#24252B] text-white p-2 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
            <label htmlFor="CheckoutButton">
              <a href="/checkout">Checkout</a>
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
