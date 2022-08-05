import React from "react";
import { HomePage } from "./header";
import { FooterContainer } from "./footer";
import { CarouselSlide } from "./heroSlider";
import { BodyContainer } from "./body";
import { ExchangeCoinContext } from "./ExchangeCoinContext";

export const ShoppingCartProject = () => (
  <ExchangeCoinContext.Provider value="Dolar - $">
    <div className="">
      <div className="absolute md:relative">
        <HomePage />
      </div>
      <CarouselSlide />
      <BodyContainer />
      <FooterContainer />
    </div>
  </ExchangeCoinContext.Provider>
);
