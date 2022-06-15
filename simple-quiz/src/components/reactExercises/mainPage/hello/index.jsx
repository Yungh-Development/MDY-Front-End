import React from "react";
import { HomePageMenu } from "../homePageMenu";

export const ExerciseOne = () => {
  let age = "12";
  let name = "John";

  return (
    <div>
      <div>
        <HomePageMenu />
      </div>
      <div>
        <span className="text-2xl font-black flex absolute justify-center top-[50%] w-100">
          {name} is {age} years old.
        </span>
      </div>
    </div>
  );
};
