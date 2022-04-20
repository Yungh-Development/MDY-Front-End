import React from "react";
import { Posts } from "../constants";
import { Dots } from "../constants";

export const PostsMapping = () => {
  return (
    <div className="border-solid font-sans">
      {Posts.map((UserPost) => (
        <div>
          <div className="relative p-6 border-1 border-b-lightblue-900">
            <div className="relative flex pl-6">
              <img
                className="rounded-full w-[50px] cursor-pointer hover:opacity-90 md:w-[70px]"
                src={UserPost.UserImg}
              ></img>
              <div className=" flex inline-block font-black pr-2 pt-3 pl-4">
                <p>{UserPost.Name}</p>
                <p className="pl-2">{UserPost.Account}</p>
                <p className="pl-2">- 2h</p>
                <span className="absolute right-4 mt-2 cursor-pointer">
                  {Dots}
                </span>
              </div>
            </div>
            <div className="pt-6 pl-[100px] lg:pl-[70px]">
              <img
                className="rounded-xl border-1 border-lightblue-900"
                src={UserPost.Posted}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
