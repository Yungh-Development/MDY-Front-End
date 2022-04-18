import React, { useState } from "react";
import { LeftMenu } from "./components/twitteLayout/LeftContainerItems/leftMenu";
import { NewsContainer } from "./components/twitteLayout/RightContainerItems/rightNewsContainer";
import { MiddleContainer } from "./components/twitteLayout/CenterContainerItems/middleContainer";
import { TwitterButton } from "./components/twitteLayout/Buttons/twitterButton";
import { TwitterLogo } from "./components/twitteLayout/LogoIcons/TwitterLogo";

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
      <div className="relative pl-4 pr-4 hidden lg:text-5xl col-span-2 lg:block xl:col-span-2 xl:block ">
        <TwitterLogo />
        <LeftMenu items={IconsList} />
        <TwitterButton />
      </div>
      <MiddleContainer />
      <NewsContainer />
    </div>
  );
}

export default App;
