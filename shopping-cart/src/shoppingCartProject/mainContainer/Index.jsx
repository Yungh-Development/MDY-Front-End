import React from "react";

import { BodyContainer } from "./mainContainer/body";
import { FooterContainer } from "./mainContainer/footer";
import { HomePage } from "./header";

export const FullPageContainer = () => {
  return (
    <div>
      <div>
        <HomePage />
      </div>
      <BodyContainer />
      <FooterContainer />
    </div>
  );
};
