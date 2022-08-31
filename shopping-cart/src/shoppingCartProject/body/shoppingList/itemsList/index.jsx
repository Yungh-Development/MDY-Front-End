import React, { useContext } from "react";
import { ExchangeCoinContext } from "../../../exchangeCoinContext";
import { CollectionMockContext } from "../../../collectionMock";

export const MockItemsList = () => {
  const currentCoin = useContext(ExchangeCoinContext);
  const [mockList] = useContext(CollectionMockContext);

  return (
    <div className="flex p-20 grid grid-cols-4 gap-16 ">
      {mockList.map(({ name, price, quantity, colors, sizes, id, image }) => (
        <div key={id} className="flex w-full justify-evenly">
          <div className="rounded-xl font-black p-4 border-2 shadow-[0_15px_60px_15px_rgba(0,0,0,0.1)]">
            <div className="flex relative flex-col">
              <img
                className="rounded-xl  w-28  lg:w-60"
                src={image}
                alt="T-Shirt"
              />
              <div className="flex flex-col flex ">
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
      ))}
    </div>
  );
};
