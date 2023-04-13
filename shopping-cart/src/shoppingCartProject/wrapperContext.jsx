import React, { createContext } from "react";
import { ItemsStoreContextProvider } from "./ItemsStoreContext";
import { CollectionMockProvider } from "./CollectionMock";
import { ExchangeCoinContextProvider } from "./ExchangeCoinContext";
import { FilteredContextListProvider } from "./FilterContext";
import { SearchFilterContextProvider } from "./SearchFilterContext";
import { CartItemsContextProvider } from "./CartItemsContext";

import { UserLoginDataContextProvider } from "./UserLoginDataContext";

export const WrapperContext = createContext([null, () => {}]);

export const WrapperContextProvider = ({ children }) => (
  <WrapperContext.Provider value={children}>
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
  </WrapperContext.Provider>
);
