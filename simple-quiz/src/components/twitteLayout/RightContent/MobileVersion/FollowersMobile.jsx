import React, { useState } from "react";
import { Icons } from "../../constants";
import { FollowersContainer } from "../../RightContent/FollowersContainer";
import { TrendNews } from "../../RightContent/TrendNews";
import { SearchField } from "../../RightContent/SearchField";

export const FollowersMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="z-50 ">
      <section className="MOBILE-MENU flex flex-col md:hidden">
        <div
          className="HAMBURGER-ICON absolute top-4 right-0 px-3"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <Icons.SideMenuNews fill="#4BAFF3" width="24px" height="24px" />
        </div>

        <div className={isNavOpen ? "showRightMenu" : "hideRightMenu"}>
          {" "}
          <div className="mt-20">
            <SearchField />
          </div>
          <TrendNews />
          <div
            className="CROSS-ICON absolute top-0 right-0 px-4 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <Icons.CloseMenuIcon width="24px" height="24px" />
          </div>
          <FollowersContainer />
        </div>
      </section>
    </nav>
  );
};
