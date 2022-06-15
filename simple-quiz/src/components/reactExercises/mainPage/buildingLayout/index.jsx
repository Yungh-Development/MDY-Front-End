import React from "react";
import { Exercise03 } from "components/reactExercises/constants";
import { HomePageMenu } from "../homePageMenu";

export const ExerciseThree = () => {
  return (
    <div>
      <div>
        <HomePageMenu />
      </div>
      <div className="flex justify-center items-center">
        <div className="card m-5 w-[350px] ">
          <img
            className="card-img-top w-30"
            src={Exercise03.image}
            alt="Card cap"
          />
          <div className="card-body m-2 ">
            <h5 className="card-title">{Exercise03.cardTitle}</h5>
            <p className="card-text">{Exercise03.cardDescription}</p>
            <a href={Exercise03.button.url} className="btn btn-primary">
              {Exercise03.button.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
