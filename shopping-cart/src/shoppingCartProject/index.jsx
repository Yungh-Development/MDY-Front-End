import React from "react";
import { BodyContainer } from "./mainContainer/body";
import { FooterContainer } from "./mainContainer/footer";
import { HomePage } from "./mainContainer/header";

// import { CarouselSlide } from "./heroSlider";

export const ShoppingCartProject = () => (
  <div>
    <div>
      <HomePage />
    </div>
    <BodyContainer />
    <FooterContainer />
  </div>
);
