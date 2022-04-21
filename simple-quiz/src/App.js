import React from "react";
import { LeftMenu } from "./components/twitteLayout/LeftContent/leftMenu";
import { NewsContainer } from "./components/twitteLayout/RightContent/NewsContainer";
import { CenterContainer } from "./components/twitteLayout/CenterContent/CenterContainer";
import { leftSideMenusTyle } from "./components/twitteLayout/constants";

import "./App.css";

function App() {
  return (
    <div className="relative grid grid-cols-10">
      <div className="border-gray-400 py-8 z-20 sm:col-span-5 lg:col-span-2 w-auto py-0 ">
        <LeftMenu />
        {leftSideMenusTyle}
      </div>
      <CenterContainer />
      <NewsContainer />
    </div>
  );
}

export default App;
