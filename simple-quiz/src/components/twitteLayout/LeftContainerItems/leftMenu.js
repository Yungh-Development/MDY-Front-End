import React, { useState } from "react";
import { IconMap } from "./leftMenuMap";
import { HamburguerList } from "../constants";
import { TwitterButton } from "../Buttons/twitterButton";
import { TwitterLogo } from "../LogoIcons/TwitterLogo";
import { CloseMenuIcon } from "../constants";

import { LeftDesktopMenu } from "./leftDesktopMenu";
import { LeftMobileMenu } from "./LeftMobileMenu";

const IconsList = [
  " ",
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Bookmarks",
  "Lists",
  "Profile",
  "More",
];

export const LeftMenu = () => {
  return (
    <div className="ml-3">
      <div className="hidden lg:block">
        <TwitterLogo />
      </div>
      <LeftDesktopMenu items={IconsList} />
      <LeftMobileMenu items={IconsList} />
    </div>
  );
};
