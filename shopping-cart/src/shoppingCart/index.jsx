import React from "react";
import { HomePageShoppingCart } from "./homePage";
import { FooterContainer } from "./footerContainer";
import { CarouselSlide } from "./heroSlider";
import { BodyContainer } from "./bodyContainer";

export const ShoppingCartProject = () => (
  <div className="relative ">
    <div className="absolute md:relative">
      <HomePageShoppingCart />
    </div>
    <CarouselSlide />
    <BodyContainer />
    <FooterContainer />
  </div>
);
