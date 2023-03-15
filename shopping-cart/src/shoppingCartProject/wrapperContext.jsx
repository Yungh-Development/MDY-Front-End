import React, { createContext } from "react";
import { ItemsStoreContextProvider } from "./ItemsStoreContext";
import { CollectionMockProvider } from "./CollectionMock";
import { ExchangeCoinContextProvider } from "./ExchangeCoinContext";
import { FilteredContextListProvider } from "./FilterContext";
import { SearchFilterContextProvider } from "./SearchFilterContext";
import { CartContextProvider } from "./CartItemsContext";

import { UserLoginDataContextProvider } from "./UserLoginDataContext";

export const wrapperContext = createContext([null, () => {}]);

export const WrapperContextProvider = ({ children }) => (
  <wrapperContext.Provider>
    <ExchangeCoinContextProvider>
      <FilteredContextListProvider>
        <SearchFilterContextProvider>
          <UserLoginDataContextProvider>
            <CollectionMockProvider>
              <CartContextProvider>
                <ItemsStoreContextProvider>
                  {children}
                </ItemsStoreContextProvider>
              </CartContextProvider>
            </CollectionMockProvider>
          </UserLoginDataContextProvider>
        </SearchFilterContextProvider>
      </FilteredContextListProvider>
    </ExchangeCoinContextProvider>
  </wrapperContext.Provider>
);
