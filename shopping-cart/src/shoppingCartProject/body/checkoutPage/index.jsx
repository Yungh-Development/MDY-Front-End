import React, { useContext } from "react";
import { LayoutPage } from "../..";
import { CartItemsContext } from "../../cartItemsContext";

export const CheckoutPage = () => {
  const cartItems = useContext(CartItemsContext);

  console.log(cartItems);
  return (
    <LayoutPage>
      <h1>TESTEEEE</h1>
    </LayoutPage>
  );
};
