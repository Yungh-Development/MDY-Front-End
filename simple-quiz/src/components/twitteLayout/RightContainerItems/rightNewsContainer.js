import React from "react";
import { RightTrendNews } from "./rightTrendNews";
import { RightFollowersContainer } from "./rightFollowersContainer";
import { RightSearchField } from "./rightSearchField";
import { RightMobileNews } from "../MobileVersion/rightMobileNews";

export const NewsContainer = () => {
  return (
    <div className=" text-sm md:block  col-span-4 lg:block lg:col-span-3">
      <div className="w-full pr-10 pl-6 font-sans flex-col hidden md:block">
        <RightSearchField />
        <RightTrendNews />
        <RightFollowersContainer />
      </div>
      <div className="w-full pr-10 pl-6 font-sans flex-col">
        <RightMobileNews />
      </div>
    </div>
  );
};
