import React, { useContext } from "react";
import { ExchangeCoinContext } from "../../../exchangeCoinContext";
import { CollectionMockContext } from "../../../collectionMock";

export const ShortsList = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const [mockList] = useContext(CollectionMockContext);

  return (
    <div className="flex p-8 grid grid-cols-4 gap-4">
      {mockList.map(
        ({ name, price, quantity, colors, sizes, id, image, category }) => (
          <div key={id} className="border-2 border-slate-100 rounded-xl ">
            <div className="rounded-xl font-black p-4 border-1 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)] ">
              <div className="flex flex-col items-center">
                <img
                  className="rounded-xl w-28  lg:w-60"
                  src={image}
                  alt="T-Shirt"
                />

                <div className="flex flex-col flex justify-around">
                  <h1>{category}</h1>
                  <span className="text-center text-xl pb-2">{name}</span>
                  {currentCoin[0].value === "Dolar - $" ? (
                    <span>Price: {price}</span>
                  ) : (
                    <span>Price: {(price * 5.1).toFixed(2)}</span>
                  )}
                  <span>Stock: {quantity}</span>
                  <select className=" text-black rounded-xl">
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
          </div>
        ),
      )}
    </div>
  );
};
