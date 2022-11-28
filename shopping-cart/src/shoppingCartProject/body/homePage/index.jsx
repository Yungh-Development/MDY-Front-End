import React, { useContext, useState, useEffect } from "react";

import { CollectionMockContext } from "../../collectionMock";
import { CartItemsContext } from "../../cartItemsContext";
import { ItemsListMapping } from "./ItemsListmap";
import { LayoutPage } from "../..";

const userCart = [];

export const HomePage = () => {
  const [mockList] = useContext(CollectionMockContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [colorSelect, setColorSelect] = useState("White");

  const buyButtonHandler = (name, price, colors, sizes) => {
    localStorage.setItem(userCart, JSON.stringify(cartItems));
    setCartItems([
      ...cartItems,
      {
        name,
        price,
        colors: colorSelect,
        sizes,
      },
    ]);
  };

  const onEventHandler = (data) => {
    setColorSelect(data);
  };

  useEffect(() => {
    const cartStoraged = localStorage.getItem(userCart);
    if (cartStoraged) {
      setCartItems(JSON.parse(cartStoraged));
    }
  }, []);

  console.log(cartItems);

  return (
    <LayoutPage>
      <div className="w-full justify-between">
        <div className="flex grid grid-cols-2 gap-2 lg:grid lg:grid-cols-3 gap-8 xl:grid-cols-4 gap-16 p-20 ">
          {mockList.map(
            ({ name, price, quantity, colors, sizes, image, category, id }) => (
              <ItemsListMapping
                id={id}
                name={name}
                price={price}
                quantity={quantity}
                colors={colors}
                sizes={sizes}
                image={image}
                category={category}
                onEventHandler={onEventHandler}
                buyButtonHandler={buyButtonHandler}
              />
            ),
          )}
        </div>
      </div>
    </LayoutPage>
  );
};
