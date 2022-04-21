import React from "react";
import { TrendNews } from "./TrendNews";
import { FollowersContainer } from "./FollowersContainer";
import { SearchField } from "./SearchField";
import { MobileNews } from "./MobileVersion/MobileNews";

export const NewsContainer = () => {
  return (
    <div className=" text-sm md:block  col-span-4 lg:block lg:col-span-3">
      <div className="w-full pr-10 pl-6 font-sans flex-col hidden md:block">
        <SearchField />
        <TrendNews />
        <FollowersContainer />
      </div>
      <div className="w-full pr-10 pl-6 font-sans flex-col">
        <MobileNews />
      </div>
    </div>
  );
};
