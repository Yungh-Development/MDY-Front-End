import React, { useState } from "react";
import { IconMap } from "../LeftMenuItens";
import { Icons } from "../../constants";
import { TwitterButton } from "../../Buttons/TwitterButton";
import { TwitterLogo } from "../../LogoIcons/TwitterLogo";

export const MobileMenu = ({ items }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section className="MOBILE-MENU flex flex-col lg:hidden">
      <div
        className="HAMBURGER-ICON absolute top-4"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <Icons.HamburguerMenu fill="#4BAFF3" width="24px" height="24px" />
      </div>

      <div className={isNavOpen ? "showLeftMenu" : "hideLeftMenu"}>
        <div
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          <Icons.CloseMenuIcon width="24px" height="24px" />
        </div>
        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col min-h-[250px]">
          <TwitterLogo />
          {items.map((item, index) => (
            <li
              key={index}
              className="flex-row  flex text-sm font-extrabold pb-3 pt-3 hover:opacity-50  cursor-pointer w-[50%] rounded-full md:text-base lg:text-xl "
            >
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
