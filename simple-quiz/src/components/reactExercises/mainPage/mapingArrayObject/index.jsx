import React from "react";
import { HomePageMenu } from "../homePageMenu";

export const ExerciseFive = () => {
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  const animalsInHtml = animals.map((item, index) => {
    return <li key={index++}>{item.label}</li>;
  });

  return (
    <div>
      <div>
        <HomePageMenu />
      </div>
      <ul className="flex flex-col mt-[15%] text-2xl font-black items-center justify-center">
        {animalsInHtml}
      </ul>
    </div>
  );
};
