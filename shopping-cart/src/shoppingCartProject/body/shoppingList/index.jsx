import React from "react";
import { CollectionMock } from "../../collectionMock";
import { ShoesList } from "./shoesList";
import { ShortsList } from "./shortsList";
import { TShirtList } from "./tShirtsList";

export const ShoppingListItems = () => {
  const collections = {};
  CollectionMock.forEach((produto) => {
    if (!collections[produto.category]) {
      collections[produto.category] = {
        products: [],
      };
    }

    collections[produto.category].products.push(produto);
  });

  return (
    <div className="w-full justify-between">
      <ShoesList ShoesRenderList={collections.Shoes.products} />
      <ShortsList ShortsRenderList={collections.Shorts.products} />
      <TShirtList TShirtListList={collections.TShirts.products} />
    </div>
  );
};
