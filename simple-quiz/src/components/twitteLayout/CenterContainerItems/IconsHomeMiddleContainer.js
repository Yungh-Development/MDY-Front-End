import React from "react";
import {
  SendPicture,
  SendGif,
  SendGraph,
  SendEmoji,
  SendDate,
  SendLocation,
} from "../constants";

export const IconsHomeMiddleContainer = () => {
  return (
    <div className="relative flex m-4 pl-24 flex-wrap">
      <span className="pr-4 cursor-pointer">{SendPicture}</span>
      <span className="pr-4 cursor-pointer">{SendGif}</span>
      <span className="pr-4 cursor-pointer">{SendGraph}</span>
      <span className="pr-4 cursor-pointer">{SendEmoji}</span>
      <span className="pr-4 cursor-pointer">{SendDate}</span>
      <span className="pr-4 cursor-pointer">{SendLocation}</span>
      <label className="absolute right-0 top-[-5px] w-[90px] text-center p-[6px] rounded-full bg-[#1D9BF0] text-white font-black text-base opacity-60 hover:opacity-100 lg:text-lg p-[10px]">
        Tweet
      </label>
      <input type="Button"></input>
    </div>
  );
};
