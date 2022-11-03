import React from "react";

// import { BodyContainer } from "./body";
import { FooterContainer } from "./footer";
import { HeaderContainer } from "./header";

export const LayoutPage = ({ children }) => (
  <div>
    <div>
      <HeaderContainer />
    </div>
    <div>{children}</div>
    <FooterContainer />
  </div>
);
