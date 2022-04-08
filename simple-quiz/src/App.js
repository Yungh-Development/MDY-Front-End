import React, { useState } from "react";
import { LeftMenu } from "./components/twitteLayout/leftMenu";
import { NewsContainer } from "./components/twitteLayout/rightNewsContainer";
import { MiddleContainer } from "./components/twitteLayout/middleContainer";

import { Twitter } from "./components/twitteLayout/constants";
import "./App.css";

const IconsList = [
  " ",
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Bookmarks",
  "Lists",
  "Profile",
  "More",
];

function App() {
  return (
    <div className="grid grid-cols-10">
      <div className="relative col-span-2 pl-4 pr-4">
        <div className="relative pb-10">
          <div className="absolute ml-[35px] mt-[30px] ">{Twitter}</div>
          <div className="absolute ml-6 mt-[20px] bg-[#1D9BF0] w-[48px] h-[48px] rounded-full opacity-10 hover:opacity-20 cursor-pointer"></div>
        </div>
        <LeftMenu items={IconsList} />
        <button className="text-center w-[90%] p-3 ml-3 mt-4 rounded-full bg-[#1D9BF0] text-white font-black text-xl hover:opacity-90">
          Tweet
        </button>
      </div>
      <div className="col-span-5">
        <MiddleContainer />
      </div>
      <div className="col-span-3">
        <NewsContainer />
      </div>
    </div>
  );
}

export default App;
