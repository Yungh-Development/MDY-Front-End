import React from "react";
import { PostsMapping } from "./PostsMapping";

import Dog from "../../../public/imgs/Dog.JPG";
import { IconsHomeMiddleContainer } from "./IconsHomeMiddleContainer";

export const MiddleContainer = () => {
  return (
    <div className="col-span-10 md:col-span-6 lg:col-span-5">
      <div className="border-solid border-1 border-x-lightblue-900 font-sans">
        <h1 className="text-lg font-bold font-sans ml-6 pt-4 md:text-2xl">
          Home
        </h1>
        <div className="flex p-6">
          <img className="rounded-full w-[50px] md:w-[70px]" src={Dog}></img>
          <input
            type="text"
            className="text-[18px] ml-4 w-full font-sans md:text-2xl"
            placeholder="What's happening?"
          />
        </div>
        <IconsHomeMiddleContainer />
      </div>
      <PostsMapping />
    </div>
  );
};
