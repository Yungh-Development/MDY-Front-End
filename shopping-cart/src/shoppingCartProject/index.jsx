import React from "react";

import { FooterContainer } from "./footer";
import { HeaderContainer } from "./header/headerContainer";

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
