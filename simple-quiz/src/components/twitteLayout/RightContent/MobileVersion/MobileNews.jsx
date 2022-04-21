import React from "react";
import { rightSideMenusTyle } from "../../constants";
import { FollowersMobile } from "./FollowersMobile";

export const MobileNews = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8  lg:hidden">
      <FollowersMobile />
      {rightSideMenusTyle}
    </div>
  );
};
