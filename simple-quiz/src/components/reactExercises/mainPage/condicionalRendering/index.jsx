import React from "react";
import { Alert } from "./alert";

export const ExerciseNine = () => {
  return (
    <div>
      <Alert text="OMG! Something really bad has happended!" color="red" />
      <Alert text="Well, it is not that bad after all!" color="orange" />
      <Alert text="I am supposed to be green" color="green" />
    </div>
  );
};
