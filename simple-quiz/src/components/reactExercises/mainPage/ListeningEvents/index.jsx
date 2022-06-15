import React from "react";

import { HomePageMenu } from "../homePageMenu";

export const ExerciseEleven = () => {
  const onClickHandler = () => {
    alert("I was Clicked");
  };
  return (
    <div className="">
      <div>
        <HomePageMenu />
      </div>

      <div className="flex mt-[15%] items-center justify-center">
        <button className="btn btn-success btn-lg" onClick={onClickHandler}>
          Click Me
        </button>
      </div>
    </div>
  );
};
