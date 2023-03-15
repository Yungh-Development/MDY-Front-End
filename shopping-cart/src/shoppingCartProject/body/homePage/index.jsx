import React, { useContext } from "react";

import { CollectionMockContext } from "../../CollectionMock";

import { ProductList } from "./ItemsListmap";
import { LayoutPage } from "../..";
import { CarouselSlide } from "../../HeroSlider";

export const HomePage = () => {
  const [mockList] = useContext(CollectionMockContext);

  return (
    <LayoutPage>
      <div className="w-full justify-between">
        <div className="pt-0 md:pt-28">
          <CarouselSlide />
        </div>
        <div className="flex grid grid-cols-2 gap-2 lg:grid lg:grid-cols-3 gap-8 xl:grid-cols-4 gap-16 p-20 ">
          {mockList.map(
            ({ name, price, quantity, colors, sizes, image, category, id }) => (
              <ProductList
                id={id}
                name={name}
                price={price}
                quantity={quantity}
                colors={colors}
                sizes={sizes}
                image={image}
                category={category}
              />
            ),
          )}
        </div>
      </div>
    </LayoutPage>
  );
};
