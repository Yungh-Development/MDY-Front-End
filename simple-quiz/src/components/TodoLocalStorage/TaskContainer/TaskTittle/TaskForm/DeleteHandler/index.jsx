import React from "react";
import { TaskForm } from "..";

import { Icons } from "../../constants";

export const DeleteHandler = () => {
  const handleDeleteItem = (targetIndex) => {
    const newValue = TaskForm.newInput.filter(
      (item, index) => index !== targetIndex
    );

    TaskForm.setnewInput(newValue);
    localStorage.setItem(TaskForm.storedTodoList, JSON.stringify(newValue));
  };
  return (
    <div className="" onClick={() => handleDeleteItem()}>
      <Icons.Trash
        fill="black"
        className="mt-[15px] mr-4 ml-4 hover:cursor-pointer"
      />
    </div>
  );
};
