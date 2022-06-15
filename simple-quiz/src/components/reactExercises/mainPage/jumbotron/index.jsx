import React from "react";
import { JumbotronCard } from "./jumbotronCard";
import { HomePageMenu } from "../homePageMenu";

export const ExerciseEight = () => {
  return (
    <div>
      <div>
        {" "}
        <HomePageMenu />
      </div>
      <JumbotronCard
        tittle="Welcome to react"
        description="React is the most popular rendering library in the world"
        buttonLabel="Go to the official website"
        buttonURL="https://reactjs.org/"
      />
    </div>
  );
};
