import React, { createContext } from "react";
import { ItemsStoreContextProvider } from "./ItemsStoreContext";
import { CollectionMockProvider } from "./CollectionMock";
import { ExchangeCoinContextProvider } from "./ExchangeCoinContext";
import { FilteredContextListProvider } from "./FilterContext";
import { SearchFilterContextProvider } from "./SearchFilterContext";
import { CartItemsContextProvider } from "./CartItemsContext";

import { UserLoginDataContextProvider } from "./UserLoginDataContext";

export const wrapperContext = createContext([null, () => {}]);

export const WrapperContextProvider = ({ children }) => (
  <wrapperContext.Provider>
    <ExchangeCoinContextProvider>
      <FilteredContextListProvider>
        <SearchFilterContextProvider>
          <UserLoginDataContextProvider>
            <CollectionMockProvider>
              <CartItemsContextProvider>
                <ItemsStoreContextProvider>
                  {children}
                </ItemsStoreContextProvider>
              </CartItemsContextProvider>
            </CollectionMockProvider>
          </UserLoginDataContextProvider>
        </SearchFilterContextProvider>
      </FilteredContextListProvider>
    </ExchangeCoinContextProvider>
  </wrapperContext.Provider>
);
