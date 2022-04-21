import React from "react";
import { HomeMiddleContainerIcons } from "./constants";

export const IconsHomeMiddleContainer = () => {
  return (
    <div className="relative flex m-4 pl-24 flex-wrap">
      <span className="pr-4 cursor-pointer">
        <HomeMiddleContainerIcons.SendPicture
          fill="#4BAFF3"
          width="20px"
          height="20px"
        />
      </span>
      <span className="pr-4 cursor-pointer">
        <HomeMiddleContainerIcons.SendGif
          fill="#4BAFF3"
          width="20px"
          height="20px"
        />
      </span>
      <span className="pr-4 cursor-pointer">
        <HomeMiddleContainerIcons.SendGraph
          fill="#4BAFF3"
          width="20px"
          height="20px"
        />
      </span>
      <span className="pr-4 cursor-pointer">
        <HomeMiddleContainerIcons.SendEmoji
          fill="#4BAFF3"
          width="20px"
          height="20px"
        />
      </span>
      <span className="pr-4 cursor-pointer">
        <HomeMiddleContainerIcons.SendDate
          fill="#4BAFF3"
          width="20px"
          height="20px"
        />
      </span>
      <span className="pr-4 cursor-pointer">
        <HomeMiddleContainerIcons.SendLocation
          fill="#4BAFF3"
          width="20px"
          height="20px"
        />
      </span>
      <label className="absolute right-0 top-[-5px] w-[90px] text-center p-[6px] rounded-full bg-[#1D9BF0] text-white font-black text-base opacity-60 hover:opacity-100 lg:text-lg p-[7px]">
        Tweet
      </label>
      <input type="Button"></input>
    </div>
  );
};
