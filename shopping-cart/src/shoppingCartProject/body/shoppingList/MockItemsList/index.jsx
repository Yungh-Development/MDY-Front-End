import React, { useContext, useState } from "react";

import { CollectionMockContext } from "../../../collectionMock";
import { CartItemsContext } from "../../../cartItemsContext";
import { ItemsListMapping } from "./ItemsListmap";

export const MockItemsList = () => {
  const [mockList] = useContext(CollectionMockContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [colorSelect, setColorSelect] = useState("White");

  const buyButtonHandler = (
    name,
    price,
    colors,
    sizes,
    id,
    image,
    category,
  ) => {
    setCartItems([
      ...cartItems,
      {
        name,
        price,
        colors: colorSelect,
        sizes,
        id,
        image,
        category,
      },
    ]);
  };
  console.log(cartItems.length);

  const onEventHandler = (data) => {
    setColorSelect(data);
    console.log(data);
  };

  return (
    <div className="flex grid grid-cols-2 gap-2 lg:grid lg:grid-cols-3 gap-8 xl:grid-cols-4 gap-16 p-20 ">
      {mockList.map(
        ({ name, price, quantity, colors, sizes, image, category }) => (
          <ItemsListMapping
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
  );
};
