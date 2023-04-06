import React, { useContext } from "react";

import { CollectionMockContext } from "../../CollectionMock";

import { ItemsListMapping } from "./ItemsListmap";
import { LayoutPage } from "../..";
import { CarouselSlide } from "../../HeroSlider";
import { SearchComponents } from "./SearchComponents";

export const HomePage = () => {
  const [mockList] = useContext(CollectionMockContext);

  return (
    <LayoutPage>
      <div className="fixed w-full z-20 pt-16">
        <SearchComponents />
      </div>
      <div className="w-full justify-between">
        <div className="pt-0 md:pt-32">
          <CarouselSlide />
        </div>
        <div className="flex grid grid-cols-2 gap-2 lg:grid lg:grid-cols-3 gap-8 xl:grid-cols-4 gap-16 p-20 ">
          {mockList.map(
            ({ name, price, quantity, colors, sizes, image, category, id }) => (
              <div key={id}>
                <ItemsListMapping
                  id={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                  colors={colors}
                  sizes={sizes}
                  image={image}
                  category={category}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </LayoutPage>
  );
};
