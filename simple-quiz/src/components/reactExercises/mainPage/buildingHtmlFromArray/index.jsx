import React from "react";
import { HomePageMenu } from "../homePageMenu";

let indexCount = 0;

export const ExerciseFour = () => {
  const arrayNameList = [
    <li className="nav-item" key={indexCount++}>
      <a className="nav-link" href="www.google.com">
        Link to google.com
      </a>
    </li>,
    <li className="nav-item" key={indexCount++}>
      <a className="nav-link" href="www.google.com">
        Link to facebook.com
      </a>
    </li>,
    <li className="nav-item" key={indexCount++}>
      <a className="nav-link" href="www.google.com">
        Link to amazon.com
      </a>
    </li>,
  ];
  return (
    <div>
      <div>
        {" "}
        <HomePageMenu />
      </div>
      <ul className="flex mt-[15%] justify-center items-center">
        {arrayNameList}
      </ul>
    </div>
  );
};
