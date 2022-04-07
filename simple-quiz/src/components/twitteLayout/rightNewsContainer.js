import React from "react";
import { Search } from "./constants";
import { Trends } from "./constants";

export const NewsContainer = () => {
  return (
    <>
      <div className="w-full pr-10">
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
        <div className="relative mt-20 bg-[#F7F9F9] w-full h-full rounded-lg">
          <p className="font-black font-sans text-xl ml-4 pt-2">
            What's happening
          </p>
          <div className="p-2">
            {Trends.map((TrendNews) => (
              <div className="font-bold p-2 hover:bg-[#E7E7E8] cursor-pointer rounded">
                <p className="font-bold">{TrendNews.Tittle}</p>
                <div className="grid grid-cols-10">
                  <p className="font-extrabold col-span-8 pr-2">
                    {TrendNews.ShortHistory}
                  </p>
                  <img
                    className="w-auto h-auto float-right pr-0 mr-0 col-span-2 inline-block align-middle"
                    src={TrendNews.Logo}
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
