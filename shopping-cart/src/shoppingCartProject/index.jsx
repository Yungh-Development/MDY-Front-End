import React from "react";

// import { CarouselSlide } from "./heroSlider";

import { ExchangeCoinContextProvider } from "./exchangeCoinContext";
import { CollectionMockProvider } from "./collectionMock";
import { FilteredContextListProvider } from "./filterContext";
import { SearchFilterContextProvider } from "./searchFilterContext";
import { AddedButtonCartProvider } from "./cartItemsContext";
import { UserLoginDataContextProvider } from "./userLoginDataContext";
import { FullPageContainer } from "./mainContainer/Index";

export const ShoppingCartProject = () => (
  <ExchangeCoinContextProvider>
    <FilteredContextListProvider value="White">
      <SearchFilterContextProvider>
        <UserLoginDataContextProvider>
          <CollectionMockProvider>
            <AddedButtonCartProvider>
              <FullPageContainer />
            </AddedButtonCartProvider>
          </CollectionMockProvider>
        </UserLoginDataContextProvider>
      </SearchFilterContextProvider>
    </FilteredContextListProvider>
  </ExchangeCoinContextProvider>
);
