import React, { useContext } from "react";
import { ExchangeCoinContext } from "../../../ExchangeCoinContext";

export const ShoesList = ({ ShoesRenderList = [] }) => {
  const currentCoin = useContext(ExchangeCoinContext);

  return (
    <div className="flex justify-between p-8">
      {ShoesRenderList.map(
        ({ name, price, quantity, colors, sizes, id, image }) => (
          <div key={id} className="border-2 border-slate-100 rounded-xl">
            <div className="rounded-xl font-black p-4 border-1 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)] ">
              <div className="flex flex-col">
                <img
                  className="rounded-xl w-28 lg:w-60"
                  src={image}
                  alt="T-Shirt"
                />
                <span className="text-center text-xl pb-2">{name}</span>
                <div className="flex justify-between pb-1">
                  {currentCoin[0].value === "Dolar - $" ? (
                    <span>price: {price}</span>
                  ) : (
                    <span>price: {(price * 5.1).toFixed(2)}</span>
                  )}
                  <span>stock: {quantity}</span>
                </div>
                <select className=" text-black rounded-xl pb-1">
                  {colors.map((option) => (
                    <option
                      className="w-20"
                      key={option}
                      value={option}
                      label={option}
                    />
                  ))}
                </select>
                <select className="rounded-xl">
                  {sizes.map((option) => (
                    <option key={option} value={option} label={option} />
                  ))}
                </select>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
