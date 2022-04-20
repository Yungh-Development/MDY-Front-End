import React, { useState } from "react";
import { rightSideMenusTyle } from "../constants";
import { SideMenuNews } from "../constants";
import { RightFollowesMobile } from "./rightFollowesMobile";

export const RightMobileNews = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8  lg:hidden">
      <RightFollowesMobile />
      {rightSideMenusTyle}
    </div>
  );
};
