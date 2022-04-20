import React, { useState } from "react";
import { IconMap } from "./leftMenuMap";
import { HamburguerList } from "../constants";
import { TwitterButton } from "../Buttons/twitterButton";
import { TwitterLogo } from "../LogoIcons/TwitterLogo";
import { CloseMenuIcon } from "../constants";
import { leftSideMenusTyle } from "../constants";

export const LeftDesktopMenu = ({ items }) => {
  return (
    <div>
      <ul className="DESKTOP-MENU hidden lg:flex flex-col">
        {items.map((item) => (
          <li className="flex-row flex text-sm font-extrabold pb-3 pt-3 hover:opacity-50 cursor-pointer w-[105%] rounded-full md:text-base lg:text-xl ">
            <IconMap props={item} />
          </li>
        ))}
        <TwitterButton />
      </ul>
      {leftSideMenusTyle}
    </div>
  );
};
