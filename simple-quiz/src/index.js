import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./components/simpleQuiz/style.css";
import { ExerciseOne } from "components/reactExercises/mainPage/hello";
import { ExerciseTwo } from "components/reactExercises/mainPage/renderingFromObjects";
import { ExerciseThree } from "components/reactExercises/mainPage/buildingLayout";
import { ExerciseFour } from "components/reactExercises/mainPage/buildingHtmlFromArray";
import { ExerciseFive } from "components/reactExercises/mainPage/mapingArrayObject";
import { ExerciseSix } from "components/reactExercises/mainPage/realComponent";
import { ExerciseSeven } from "components/reactExercises/mainPage/componentProperties";
import { ExerciseEight } from "components/reactExercises/mainPage/jumbotron";
import { ExerciseNine } from "components/reactExercises/mainPage/condicionalRendering";
import { ExerciseTen } from "components/reactExercises/mainPage/secondStyles";
import { ExerciseEleven } from "components/reactExercises/mainPage/ListeningEvents";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hello" element={<ExerciseOne />} />
      <Route path="/renderingFromObjects" element={<ExerciseTwo />} />
      <Route path="/buildingLayout" element={<ExerciseThree />} />
      <Route path="/buildingHtmlFromArray" element={<ExerciseFour />} />
      <Route path="/mapingArrayObject" element={<ExerciseFive />} />
      <Route path="/realComponent" element={<ExerciseSix />} />
      <Route path="/componentProperties" element={<ExerciseSeven />} />
      <Route path="/jumbotron" element={<ExerciseEight />} />
      <Route path="/condicionalRendering" element={<ExerciseNine />} />
      <Route path="/secondStyles" element={<ExerciseTen />} />
      <Route path="/ListeningEvents" element={<ExerciseEleven />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
