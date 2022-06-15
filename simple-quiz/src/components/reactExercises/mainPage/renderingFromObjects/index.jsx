import React from "react";
import { Exercise02 } from "components/reactExercises/constants";
import { HomePageMenu } from "../homePageMenu";

export const ExerciseTwo = () => {
  return (
    <div>
      <HomePageMenu />
      <div className="text-2xl font-black flex absolute justify-center top-[50%] w-100">
        <div className="flex-col">
          <h1>My Name is {Exercise02.first_name}</h1>
          <h1>My last name is {Exercise02.last_name}</h1>
        </div>
      </div>
    </div>
  );
};
