import React from "react";
import { Todo } from "./components/TodoLocalStorage";

import "./App.css";

function App() {
  return (
    <div className="relative w-full h-screen bg-[#223355] flex justify-center items-center ">
      <Todo />
    </div>
  );
}

export default App;
