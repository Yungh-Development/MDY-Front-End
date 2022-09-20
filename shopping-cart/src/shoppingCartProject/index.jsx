import React from "react";
import { HomePage } from "./header";
import { FooterContainer } from "./footer";
// import { CarouselSlide } from "./heroSlider";
import { BodyContainer } from "./body";
import { ExchangeCoinContextProvider } from "./exchangeCoinContext";
import { CollectionMockProvider } from "./collectionMock";
import { FilteredContextListProvider } from "./filterContext";
import { SearchFilterContextProvider } from "./searchFilterContext";
import { AddedButtonCartProvider } from "./cartItemsContext";

export const ShoppingCartProject = () => (
  <ExchangeCoinContextProvider>
    <FilteredContextListProvider>
      <SearchFilterContextProvider>
        <CollectionMockProvider>
          <AddedButtonCartProvider>
            <div className="">
              <div className="absolute md:relative">
                <HomePage />
              </div>

              <BodyContainer />
              <FooterContainer />
            </div>
          </AddedButtonCartProvider>
        </CollectionMockProvider>
      </SearchFilterContextProvider>
    </FilteredContextListProvider>
  </ExchangeCoinContextProvider>
);
