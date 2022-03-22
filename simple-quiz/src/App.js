import React, { useState } from "react";
import { SimpleQuiz } from "./components/simpleQuiz/simpleQuiz.js";
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
