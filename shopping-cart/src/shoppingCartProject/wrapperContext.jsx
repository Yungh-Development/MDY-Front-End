import React, { createContext } from "react";
import { AddedButtonCartProvider } from "./CartItemsContext";
import { CollectionMockProvider } from "./CollectionMock";
import { ExchangeCoinContextProvider } from "./ExchangeCoinContext";
import { FilteredContextListProvider } from "./FilterContext";
import { SearchFilterContextProvider } from "./SearchFilterContext";

import { UserLoginDataContextProvider } from "./UserLoginDataContext";

export const wrapperContext = createContext([null, () => {}]);

export const WrapperContextProvider = ({ children }) => (
  <wrapperContext.Provider>
    <ExchangeCoinContextProvider>
      <FilteredContextListProvider>
        <SearchFilterContextProvider>
          <UserLoginDataContextProvider>
            <CollectionMockProvider>
              <AddedButtonCartProvider>{children}</AddedButtonCartProvider>
            </CollectionMockProvider>
          </UserLoginDataContextProvider>
        </SearchFilterContextProvider>
      </FilteredContextListProvider>
    </ExchangeCoinContextProvider>
  </wrapperContext.Provider>
);
