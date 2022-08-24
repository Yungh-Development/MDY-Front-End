import React from "react";
import { HomePage } from "./header";
import { FooterContainer } from "./footer";
// import { CarouselSlide } from "./heroSlider";
import { BodyContainer } from "./body";
import { ExchangeCoinContextProvider } from "./ExchangeCoinContext";
import { CollectionMockProvider } from "./collectionMock";
import { FilteredContextListProvider } from "./filterContext";

export const ShoppingCartProject = () => (
  <ExchangeCoinContextProvider>
    <FilteredContextListProvider>
      <CollectionMockProvider>
        <div className="">
          <div className="absolute md:relative">
            <HomePage />
          </div>

          <BodyContainer />
          <FooterContainer />
        </div>
      </CollectionMockProvider>
    </FilteredContextListProvider>
  </ExchangeCoinContextProvider>
);
