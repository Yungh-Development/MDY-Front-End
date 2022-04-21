import React from "react";
import { Trends } from "../constants";

export const TrendNews = () => {
  return (
    <div className="relative mt-20 pt-2 mr-4 pb-4 bg-[#F7F9F9] w-auto h-auto rounded-2xl">
      <p className="font-extrabold  text-base ml-4 pt-2 font-sans lg:text-xl">
        What's happening
      </p>
      <div className="p-2 flex-col lg:flex-row">
        {Trends.map((TrendNews, index) => (
          <div
            key={index}
            className="font-black p-2 hover:bg-[#E7E7E8] cursor-pointer rounded"
          >
            <p className="font-sans text-sm">{TrendNews.Tittle}</p>
            <div className="flex flex-row  justify-between ">
              <span className="font-black  col-span-7 pr-2">
                {TrendNews.ShortHistory}
              </span>
              <img
                className="max-w-[80px] max-h-[60px] col-span-3 rounded-md"
                src={TrendNews.Logo}
              ></img>
            </div>
          </div>
        ))}
      </div>
      <a className="font-sans font-semibold pl-6 mt-4 text-[#58B4F3]" href="#">
        Show more
      </a>
    </div>
  );
};
