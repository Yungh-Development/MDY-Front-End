import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { WrapperContextProvider } from "./shoppingCartProject/wrapperContext";

import { ShoppingCartProject } from "./shoppingCartProject";

export default function App() {
  <Router>
    <WrapperContextProvider>
      <Routes>
        <Route path="/" element={<ShoppingCartProject />} />
      </Routes>
    </WrapperContextProvider>
  </Router>;
}
