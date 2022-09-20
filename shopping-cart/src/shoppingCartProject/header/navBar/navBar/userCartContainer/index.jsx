import React, { useContext } from "react";
import { ExchangeCoinContext } from "../../../../exchangeCoinContext";
import { CartItemsContext } from "../../../../cartItemsContext";

export const UserCartContainer = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const CartItemsList = useContext(CartItemsContext);

  const checkOut = () => {
    console.log("Há!");
  };

  console.log(CartItemsList);

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
        {/* 
        <div>
          {CartItemsList.map((option) => (
            <div>{option.name}</div>
          ))}
        </div>
        */}
        <div className="absolute right-4 bottom-4 bg-[#24252B] text-white p-2 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm">
          <input
            type="button"
            value="Checkout"
            className="cursor-pointer"
            onClick={() => checkOut()}
          />
        </div>
      </div>
    </div>
  );
};
