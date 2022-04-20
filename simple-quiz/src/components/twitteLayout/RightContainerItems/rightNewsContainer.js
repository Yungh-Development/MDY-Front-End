import React from "react";
import { RightTrendNews } from "./rightTrendNews";
import { RightFollowersContainer } from "./rightFollowersContainer";
import { RightSearchField } from "./rightSearchField";
import { RightMobileNews } from "./rightMobileNews";

export const NewsContainer = () => {
  return (
    <div className=" text-sm md:block col-span-4 lg:block lg:col-span-3">
      <div className="w-full pr-10 pl-6 font-sans flex-col">
        <RightSearchField />
        <RightTrendNews />
        <RightFollowersContainer />
        <RightMobileNews />
      </div>
    </div>
  );
};
