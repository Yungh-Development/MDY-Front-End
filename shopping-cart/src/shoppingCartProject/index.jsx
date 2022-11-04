import React from "react";

import { FooterContainer } from "./footer";
import { HeaderContainer } from "./header/headerContainer";

// import { CarouselSlide } from "./heroSlider";

export const LayoutPage = ({ children }) => (
  <div>
    <div>
      <HeaderContainer />
    </div>
    <div>{children}</div>
    <FooterContainer />
  </div>
);
