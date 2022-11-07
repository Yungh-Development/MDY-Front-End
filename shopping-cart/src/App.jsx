import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { WrapperContextProvider } from "./shoppingCartProject/wrapperContext";

// import { HomePage } from "./shoppingCartProject/mainContainer/body";
import { HomePage } from "./shoppingCartProject/body/homePage";
import { CheckoutPage } from "./shoppingCartProject/body/checkoutPage";

export const App = () => (
  <Router>
    <WrapperContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </WrapperContextProvider>
  </Router>
);

export default App;
