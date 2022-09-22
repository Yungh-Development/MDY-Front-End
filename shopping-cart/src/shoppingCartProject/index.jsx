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
import { UserLoginDataContextProvider } from "./userLoginDataContext";

export const ShoppingCartProject = () => (
  <ExchangeCoinContextProvider>
    <FilteredContextListProvider value="White">
      <SearchFilterContextProvider>
        <UserLoginDataContextProvider>
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
        </UserLoginDataContextProvider>
      </SearchFilterContextProvider>
    </FilteredContextListProvider>
  </ExchangeCoinContextProvider>
);
