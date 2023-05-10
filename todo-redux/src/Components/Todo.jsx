import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`${
        complete ? "line-through" : "none"
      } z-50 border-1 border-indigo-200 border-x-sky-500 rounded relative bg-white border-solid border-2 border-sky-500 py-2 my-2`}
    >
      {text}
    </li>
  );
};

export default Todo;
