import React from "react";
import { Todo } from "./components/TodoLocalStorage";

import "./App.css";

function App() {
  return (
    <div className="w-full h-screen relative bg-[#223355] flex justify-center items-center overflow-auto">
      <Todo />
    </div>
  );
}

export default App;
