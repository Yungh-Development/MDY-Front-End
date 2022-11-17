import React, { useContext, useEffect } from "react";
import { ExchangeCoinContext } from "../../../exchangeCoinContext";
import { CartItemsContext } from "../../../cartItemsContext";

const userCart = "teste";

export const UserCartContainer = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);

  const checkOutHandler = () => {
    localStorage.setItem(userCart, JSON.stringify([cartItems]));
  };

  const clearCartHandler = () => {
    localStorage.removeItem(cartItems);
    setCartItems();
    console.log("Deleto");
  };

  useEffect(() => {
    const cartStoraged = localStorage.getItem(userCart);
    if (cartStoraged) {
      setCartItems(JSON.parse(cartStoraged));
    }
    console.log(cartItems);
  }, []);

  console.log(cartItems);

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

        {cartItems === null ? (
          <div>Carrinho Vazio!</div>
        ) : (
          <ul>
            {cartItems.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="flex flex-col">
                <span>{option.name}</span>
                <span>{option.colors}</span>
                <span>{option.sizes}</span>
                <span>{option.price}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="absolute left-4 bottom-4 bg-[#24252B] text-white p-3 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
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
        <div className="absolute right-4 bottom-4 bg-[#24252B] text-white p-2 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
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
  );
};
