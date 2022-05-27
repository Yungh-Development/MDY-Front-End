import React, { useState, useEffect } from "react";
import { TaskForm } from "./TaskForm";
import { FormList } from "./TaskForm/FormList";

const storedTodoList = "";
let userID = 0;

export const TaskTittle = () => {
  const [items, setItems] = useState([]);
  const [newList, setnewList] = useState();
  const [newName, setNewName] = useState("");
  const [newTask, setNewTask] = useState("");

  const newInputList = items.filter((item) => {
    let dataList = true;

    if (item.endDate.length > 0) {
      if (item.endDate <= newList) {
        return false;
      }
    }

    if (newName.length > 0) {
      if (!item.userName.toLowerCase().includes(newName)) {
        return false;
      }
    }

    if (newTask.length > 0) {
      if (!item.taskInput.toLowerCase().includes(newTask)) {
        return false;
      }
    }

    return dataList;
  });

  const taskFilterHandler = (data) => {
    setNewTask(data);
  };

  const nameFilterHandler = (data) => {
    setNewName(data);
  };

  const handleDateAscFilter = (data) => {
    setnewList(data);
  };

  const handleFormSubmit = (data) => {
    setItems([...items, data]);

    const newValue = [...items, data];

    if (items.length > 0) {
      localStorage.setItem(storedTodoList, JSON.stringify(newValue));
    }
  };

  const handleDeleteItem = (data) => {
    const newValue = items.filter((item, index) => index !== data);

    setItems(newValue);
    localStorage.setItem(storedTodoList, JSON.stringify(newValue));
  };

  useEffect(() => {
    const newInput = localStorage.getItem(storedTodoList);

    if (newInput && newInput.length > 0) {
      let lastIndex = newInput[newInput.length - 1];
      userID = lastIndex.id + 1;

      setItems(JSON.parse(newInput));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <TaskForm
          formProps={handleFormSubmit}
          //onSubmitSavedDatas={localStorageSavedDatas}
          handleDateAscFilter={handleDateAscFilter}
          handleTaskFilter={taskFilterHandler}
          handleNameFilter={nameFilterHandler}
        />
        <FormList
          formListHandler={newInputList}
          formDeleteItemHandler={handleDeleteItem}
        />
      </div>
    </>
  );
};
