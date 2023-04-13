import React from "react";

import { FooterContainer } from "./Footer";
import { HeaderContainer } from "./Header/HeaderContainer";

// import { CarouselSlide } from "./heroSlider";

export const LayoutPage = ({ children }) => (
  <div>
    <div className="fixed w-full z-50 mb-12">
      <HeaderContainer />
    </div>
    <div>{children}</div>
    <FooterContainer />
  </div>
);
