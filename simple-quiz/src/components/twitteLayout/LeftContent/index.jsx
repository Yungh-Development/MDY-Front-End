import React, { useState } from "react";
import { TwitterLogo } from "../LogoIcons/TwitterLogo";
import { DesktopMenu } from "./LeftDesktopMenu";
import { MobileMenu } from "./MobileVersion/MobileMenu";

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
      <DesktopMenu items={IconsList} />
      <MobileMenu items={IconsList} />
    </div>
  );
};
