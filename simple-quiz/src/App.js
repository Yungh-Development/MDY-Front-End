import React, { useState } from "react";
import { Home } from "./components/simpleQuiz/home";

import { SimpleQuiz } from "./components/simpleQuiz/quiz.js";

import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center teste">
      <div className="bg"></div>
      <SimpleQuiz />
    </div>
  );
}

export default App;
