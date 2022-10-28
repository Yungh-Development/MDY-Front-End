import React from "react";

import { BodyContainer } from "./body";
import { FooterContainer } from "./footer";
import { HomePage } from "./header";

export const FullPageContainer = () => (
  <div>
    <div>
      <HomePage />
    </div>
    <BodyContainer />
    <FooterContainer />
  </div>
);
