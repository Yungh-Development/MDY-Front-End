import React, { useState } from "react";
import { IconMap } from "./leftMenuMap";
import { HamburguerList } from "../constants";
import { TwitterButton } from "../Buttons/twitterButton";
import { TwitterLogo } from "../LogoIcons/TwitterLogo";
import { CloseMenuIcon } from "../constants";

export const LeftMobileMenu = ({ items }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section className="MOBILE-MENU flex flex-col lg:hidden">
      <div
        className="HAMBURGER-ICON absolute top-4"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {HamburguerList}
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        {" "}
        <div
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          {CloseMenuIcon}
        </div>
        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col min-h-[250px]">
          <TwitterLogo />
          {items.map((item) => (
            <li className="flex-row  flex text-sm font-extrabold pb-3 pt-3 hover:opacity-50  cursor-pointer w-[50%] rounded-full md:text-base lg:text-xl ">
              <IconMap props={item} />
            </li>
          ))}
          <div className="hidden lg:block">
            <TwitterButton />
          </div>
        </ul>
      </div>
    </section>
  );
};
