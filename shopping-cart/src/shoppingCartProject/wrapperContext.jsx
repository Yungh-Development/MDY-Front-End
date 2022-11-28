import React, { createContext } from "react";
import { AddedButtonCartProvider } from "./cartItemsContext";
import { CollectionMockProvider } from "./collectionMock";
import { ExchangeCoinContextProvider } from "./exchangeCoinContext";
import { FilteredContextListProvider } from "./filterContext";
import { SearchFilterContextProvider } from "./searchFilterContext";

import { UserLoginDataContextProvider } from "./userLoginDataContext";

export const wrapperContext = createContext([null, () => {}]);

export const WrapperContextProvider = ({ children }) => (
  <div>
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
  </div>
);
