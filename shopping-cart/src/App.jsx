import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { WrapperContextProvider } from "./ShoppingCartProject/WrapperContext";

// import { HomePage } from "./shoppingCartProject/mainContainer/body";
import { HomePage } from "./shoppingCartProject/body/HomePage";
import { CheckoutPage } from "./shoppingCartProject/body/CheckoutPage";

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
