import React from "react";
import { HomePageShoppingCart } from "./homePage";
import { FooterContainer } from "./footerContainer";
import { CarouselSlide } from "./heroSlider";

export const ShoppingCartProject = () => (
  <div className="relative ">
    <div className="absolute md:relative">
      <HomePageShoppingCart />
    </div>
    <CarouselSlide />
    <FooterContainer />
  </div>
);
