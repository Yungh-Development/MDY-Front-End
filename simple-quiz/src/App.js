import React, { useState } from "react";
import { LeftMenu } from "./components/twitteLayout/LeftContainerItems/leftMenu";
import { NewsContainer } from "./components/twitteLayout/RightContainerItems/rightNewsContainer";
import { MiddleContainer } from "./components/twitteLayout/CenterContainerItems/middleContainer";
import { leftSideMenusTyle } from "./components/twitteLayout/constants";

import "./App.css";

function App() {
  return (
    <div className="relative grid grid-cols-10">
      {/*className="absolute z-10 bg-gray-100 h-screen pl-4 pr-4 lg:text-5xl
      relative bg-inherit col-span-none left-[-300px] lg:z-0 hidden lg:block
      col-span-2 xl:col-span-2 block left-0 relative w-full
  */}
      <div className="border-gray-400 py-8 z-20 sm:col-span-5 lg:col-span-2 w-auto py-0 ">
        <LeftMenu />
        {leftSideMenusTyle}
      </div>
      <MiddleContainer />
      <NewsContainer />
    </div>
  );
}

export default App;
