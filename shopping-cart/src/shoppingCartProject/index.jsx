import React from "react";
import { HomePageShoppingCart } from "./header";
import { FooterContainer } from "./footer";
import { CarouselSlide } from "./heroSlider";
import { BodyContainer } from "./body";

export const ShoppingCartProject = () => (
  <div className="">
    <div className="absolute md:relative">
      <HomePageShoppingCart />
    </div>
    <CarouselSlide />
    <BodyContainer />
    <FooterContainer />
  </div>
);
