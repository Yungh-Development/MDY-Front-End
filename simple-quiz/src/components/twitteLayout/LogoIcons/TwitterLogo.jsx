import React from "react";
import { Icons } from "../constants";

export const TwitterLogo = () => {
  return (
    <div className="relative pb-10">
      <div className="absolute ml-[15px] mt-[30px]">
        <Icons.Twitter fill="#4BAFF3" width="28px" height="28px" />
      </div>
      <div className="absolute ml-1 mt-[20px] bg-[#1D9BF0] w-[48px] h-[48px] rounded-full opacity-10 hover:opacity-20 cursor-pointer"></div>
    </div>
  );
};
