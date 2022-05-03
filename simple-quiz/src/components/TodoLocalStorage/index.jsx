import React from "react";
import { TaskTittle } from "./TaskContainer/TaskTittle";

export const Todo = () => {
  return (
    <>
      <div className="w-auto h-auto p-10 overflow-hidden bg-[#bae6fd] rounded-md shadow-inner shadow-gray-600 text-center flex justify-center items-center">
        <TaskTittle />
      </div>
    </>
  );
};
