import React from "react";
import { Search } from "./constants";
import { Trends } from "./constants";
import { Followes } from "./constants";

export const NewsContainer = () => {
  return (
    <>
      <div className="w-full pr-10 pl-6 font-sans">
        <div className="relative flex mt-3">
          <div className="absolute pt-7 pl-4 z-50">{Search}</div>
          <div className="">
            <input
              className="absolute bg-[#EFF3F4] pl-12 w-full rounded-full mt-2 h-14 font-bold z-10"
              type="text"
              name="search"
              placeholder="Search Twitter"
            />
          </div>
        </div>
        <div className="relative mt-20 bg-[#F7F9F9] w-full h-full rounded-2xl">
          <p className="font-extrabold  text-xl ml-4 pt-2 font-sans">
            What's happening
          </p>
          <div className="p-2">
            {Trends.map((TrendNews) => (
              <div className="font-black p-2 hover:bg-[#E7E7E8] cursor-pointer rounded">
                <p className="font-sans text-sm">{TrendNews.Tittle}</p>
                <div className="grid grid-cols-10">
                  <span className="font-black  col-span-7 pr-2">
                    {TrendNews.ShortHistory}
                  </span>
                  <img
                    className="w-auto h-auto col-span-3 rounded-md"
                    src={TrendNews.Logo}
                  ></img>
                </div>
              </div>
            ))}
          </div>
          <a className="font-sans font-semibold pl-6 text-[#58B4F3]" href="#">
            Show more
          </a>
        </div>
        <div className="relative mt-20 bg-[#F7F9F9] w-full h-full rounded-2xl ">
          <p className="font-extrabold text-xl ml-4 pt-2 font-sans">
            Who To Follow
          </p>
          <div className="p-2">
            {Followes.map((FollowOption) => (
              <div className="grid grid-cols-10 font-bold p-2 hover:bg-[#E7E7E8] cursor-pointer rounded mt-4 ">
                <div className="flex max-w-[40px] max-h-[40px] col-span-7">
                  <img
                    src={FollowOption.UserImg}
                    className="rounded-full"
                  ></img>
                  <div className="ml-2">
                    <p className="">{FollowOption.Name}</p>
                    <p className="pr-2">{FollowOption.Account}</p>
                  </div>
                </div>
                <div className="col-span-3 ">
                  <label className="bg-[#0F1419] w-[90px] font-extrablack text-white rounded-3xl p-2 text-center hover:opacity-90 cursor-pointer">
                    Follow
                  </label>
                  <input type="button" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
