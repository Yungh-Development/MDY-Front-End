import React, { createContext } from "react";
import { AddedButtonCartProvider } from "./cartItemsContext";
import { CollectionMockProvider } from "./collectionMock";
import { ExchangeCoinContextProvider } from "./exchangeCoinContext";
import { FilteredContextListProvider } from "./filterContext";
import { SearchFilterContextProvider } from "./searchFilterContext";
import { UserCartContextProvider } from "./userCartContext";
import { UserLoginDataContextProvider } from "./userLoginDataContext";
import { UserCartContextProvider } from "./userCartContext";

export const wrapperContext = createContext([null, () => {}]);

export const WrapperContextProvider = ({ children }) => (
  <div>
    <wrapperContext.Provider>
      <ExchangeCoinContextProvider>
        <FilteredContextListProvider value="White">
          <SearchFilterContextProvider>
            <UserLoginDataContextProvider>
              <CollectionMockProvider>
                <AddedButtonCartProvider>
                  <UserCartContextProvider>{children}</UserCartContextProvider>
                </AddedButtonCartProvider>
              </CollectionMockProvider>
            </UserLoginDataContextProvider>
          </SearchFilterContextProvider>
        </FilteredContextListProvider>
      </ExchangeCoinContextProvider>
    </wrapperContext.Provider>
  </div>
);
