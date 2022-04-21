import React from "react";
import { Icons } from "../constants";

export const SearchField = () => {
  return (
    <div className="relative flex mt-3 mr-4">
      <div className="absolute pt-7 pl-4 z-50">
        <img src={Icons.Search}></img>
      </div>
      <div className="">
        <input
          className="absolute bg-[#EFF3F4] pl-12 w-full rounded-full mt-2 h-14 font-bold z-10"
          type="text"
          name="search"
          placeholder="Search Twitter"
        />
      </div>
    </div>
  );
};
