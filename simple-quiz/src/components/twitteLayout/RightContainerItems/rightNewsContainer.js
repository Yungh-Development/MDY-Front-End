import React from "react";
import { RightTrendNews } from "./rightTrendNews";
import { RightFollowersContainer } from "./rightFollowersContainer";
import { RightSearchField } from "./rightSearchField";

export const NewsContainer = () => {
  return (
    <div className="col-span-4 text-sm hidden md:block col-span-4 xl:block lg:col-span-3">
      <div className="w-full pr-10 pl-6 font-sans flex-col">
        <RightSearchField />
        <RightTrendNews />
        <RightFollowersContainer />
      </div>
    </div>
  );
};
