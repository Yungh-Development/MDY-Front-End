import React from "react";
import { CollectionMock } from "../../collectionMock";
import { ShoesList } from "./shoesList";

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
  console.log(collections.Shoes.products);
  return (
    <div className="z-40">
      <ShoesList ShoesRenderList={collections.Shoes.products} />
    </div>
  );
};
