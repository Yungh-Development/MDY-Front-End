import React, { useState } from "react";
import { Followes } from "../constants";
import { CloseMenuIcon } from "../constants";
import { SideMenuNews } from "../constants";
import { Trends } from "../constants";

import { RightFollowersContainer } from "../RightContainerItems/rightFollowersContainer";
import { RightTrendNews } from "../RightContainerItems/rightTrendNews";
import { RightSearchField } from "../RightContainerItems/rightSearchField";

import { Search } from "../constants";

export const RightFollowesMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="z-50 ">
      <section className="MOBILE-MENU flex flex-col md:hidden">
        <div
          className="HAMBURGER-ICON absolute top-4 right-0 px-3"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {SideMenuNews}
        </div>

        <div className={isNavOpen ? "showRightMenu" : "hideRightMenu"}>
          {" "}
          <div className="mt-20">
            <RightSearchField />
          </div>
          <RightTrendNews />
          <div
            className="CROSS-ICON absolute top-0 right-0 px-4 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            {CloseMenuIcon}
          </div>
          <RightFollowersContainer />
        </div>
      </section>
    </nav>
  );
};
