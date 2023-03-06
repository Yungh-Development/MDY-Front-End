import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";
// eslint-disable-next-line import/no-unresolved
import useLocalStorage from "@d2k/react-localstorage";

import { StorageKey } from "./Constants";

export const CartContext = createContext([
  null,
  { items: [], setItems: (items) => items },
]);

export function CartContextProvider({ children }) {
  const [stateValue, setStateValue] = useState([]);
  const [storageValue, setStorageValue] = useLocalStorage(StorageKey, []);

  useEffect(() => {
    setStateValue(storageValue ?? []);
  }, [storageValue]);

  const setValue = (newValue) => {
    setStateValue(newValue);
    setStorageValue(newValue);
  };

  // Memoize to get rid of excessive rendering
  const contextValue = useMemo(
    () => ({ items: stateValue, setItems: setValue }),
    [stateValue, setValue],
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
CartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useCartContext = () => useContext(CartContext);
