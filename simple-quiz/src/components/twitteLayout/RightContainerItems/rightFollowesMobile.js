import React, { useState } from "react";
import { Followes } from "../constants";
import { CloseMenuIcon } from "../constants";
import { SideMenuNews } from "../constants";
import { Trends } from "../constants";

import { RightFollowersContainer } from "./rightFollowersContainer";
import { RightTrendNews } from "./rightTrendNews";
import { RightSearchField } from "./rightSearchField";

import { Search } from "../constants";

export const RightFollowesMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="z-50 ">
      <section className="MOBILE-MENU flex flex-col md:hidden">
        <div
          className="HAMBURGER-ICON absolute top-4 right-0 px-3"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          {SideMenuNews}
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          {" "}
          <div className="mt-20">
            <RightSearchField />
          </div>
          <RightTrendNews />
          <div
            className="CROSS-ICON absolute top-0 left-0 px-2 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            {CloseMenuIcon}
          </div>
          <RightFollowersContainer />
        </div>
      </section>
    </nav>
  );
};
