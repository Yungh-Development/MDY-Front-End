import React from "react";
import { Followes } from "../constants";

export const RightFollowersContainer = () => {
  return (
    <div className="relative mt-20 pt-2 mr-4 pb-2 bg-[#F7F9F9] w-auto h-auto rounded-2xl flex flex-col">
      <p className="font-extrabold text-base ml-4 pt-2 font-sans lg:text-xl">
        Who To Follow
      </p>
      <div className="p-2 flex flex-col">
        {Followes.map((FollowOption) => (
          <div className=" font-bold p-2 hover:bg-[#E7E7E8] cursor-pointer rounded mt-4 flex flex-row  justify-between md:flex-col md:flex justify-center">
            <div className="flex max-w-[40px] max-h-[40px]">
              <img src={FollowOption.UserImg} className="rounded-full"></img>
              <div className="ml-2">
                <p className="">{FollowOption.Name}</p>
                <p className="pr-2">{FollowOption.Account}</p>
              </div>
            </div>
            <div className=" ">
              <label className="bg-[#0F1419] w-[90px] font-extrablack text-white rounded-3xl p-2 text-center hover:opacity-90 cursor-pointer">
                Follow
              </label>
              <input type="button" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
