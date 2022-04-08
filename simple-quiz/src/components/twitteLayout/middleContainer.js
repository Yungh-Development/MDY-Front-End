import React from "react";
import { Followes } from "./constants";
import { Posts } from "./constants";
import { Dots } from "./constants";
import Dog from "../../public/imgs/Dog.JPG";
import {
  SendPicture,
  SendGif,
  SendGraph,
  SendEmoji,
  SendDate,
  SendLocation,
} from "./constants";

export const MiddleContainer = () => {
  return (
    <>
      <div className="border-solid border-1 border-x-lightblue-900 font-sans">
        <h1 className="text-2xl font-bold font-sans ml-6 pt-4">Home</h1>
        <div className="flex p-6">
          <img className="rounded-full w-[70px]" src={Dog}></img>
          <input
            type="text"
            className="text-[22px] ml-4 w-full font-sans"
            placeholder="What's happening?"
          />
        </div>
        <div className="relative flex m-4 pl-24 flex-wrap">
          <span className="pr-4 cursor-pointer">{SendPicture}</span>
          <span className="pr-4 cursor-pointer">{SendGif}</span>
          <span className="pr-4 cursor-pointer">{SendGraph}</span>
          <span className="pr-4 cursor-pointer">{SendEmoji}</span>
          <span className="pr-4 cursor-pointer">{SendDate}</span>
          <span className="pr-4 cursor-pointer">{SendLocation}</span>
          <label className="absolute right-0 top-[-15px] w-[100px] text-center p-[10px] rounded-full bg-[#1D9BF0] text-white font-black text-xl opacity-60 hover:opacity-100">
            Tweet
          </label>
          <input type="Button"></input>
        </div>
      </div>
      <div className="border-solid font-sans">
        {Posts.map((UserPost) => (
          <div>
            <div className="relative p-6 border-1 border-b-lightblue-900">
              <div className="relative flex">
                <img
                  className="rounded-full w-[70px] cursor-pointer hover:opacity-90"
                  src={UserPost.UserImg}
                ></img>
                <div className=" flex inline-block font-black pr-2 pt-4 pl-2">
                  <p>{UserPost.Name}</p>
                  <p className="pl-2">{UserPost.Account}</p>
                  <p className="pl-2">- 2h</p>
                  <span className="absolute right-4 mt-2 cursor-pointer">
                    {Dots}
                  </span>
                </div>
              </div>
              <div className="pt-6 pl-[70px]">
                <img
                  className="rounded-xl border-1 border-lightblue-900"
                  src={UserPost.Posted}
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
