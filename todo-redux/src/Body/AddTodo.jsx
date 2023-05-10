import React from "react";
import { format } from "date-fns";
import { addTodo } from "../Actions/TodoActions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  let addTodoHandler = () => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value));
    }
  };
  return (
    <div className="items-center ">
      <div className="flex flex-col justify-center w-full p-3 items-center relative ">
        <p className="text-3xl text-gray-600">Todo List</p>
        <p className="text-sm ">{format(new Date(), "d MMM, yyyy")}</p>
      </div>
      <div className="flex ">
        <input
          type="text"
          className="border-[1px] w-4/6 rounded-r-none rounded-l-md"
          ref={(data) => (input = data)}
        />

        <a
          href="#_"
          onClick={addTodoHandler}
          className="flex flex-nowrap relative z-30 inline-flex items-center justify-center w-auto px-2 py-[3px] overflow-hidden font-semibold text-gray-800 transition-all duration-500 border border-gray-200 rounded-l-none rounded-r-md cursor-pointer group ease bg-gradient-to-b from-sky-200 to-gray-50 hover:from-sky-500 hover:to-white active:to-white"
        >
          <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-sky-150"></span>
          <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-sky-150"></span>
          Add Todo
        </a>
      </div>
    </div>
  );
};

export default connect()(AddTodo);
