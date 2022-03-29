import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Home } from "./components/simpleQuiz/home";
import { SimpleQuiz } from "./components/simpleQuiz/quiz.js";

import "./App.css";
import "./components/simpleQuiz/style.css";

function App() {
  return (
    <div className="flex items-center justify-center bgImg">
      <div className="bg"></div>
      <Home />
    </div>
  );
}

export default App;
