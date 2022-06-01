import React, { useState, useEffect } from "react";
import { TaskForm } from "./TaskForm";
import { FormList } from "./TaskForm/FormList";

const storedTodoList = [];

let userID = 0;

const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

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
    data.id = userID;
    userID = userID + 1;

    setItems([...items, data]);

    let date = new Date();
    let todayDate = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
    let endDate = new Date(data.endDate);
    let endDateUTC = endDate;

    console.log(todayDate);
    console.log(endDate);

    if (data.endDate.length < 1) {
      data.cor = "#ffffff";
    } else if (endDate < todayDate) {
      data.cor = "#ff0000";
    } else if (endDate >= todayDate) {
      data.cor = "#00ff00";
    }

    const newValue = [...items, data];

    if (items.length > 0) {
      localStorage.setItem(storedTodoList, JSON.stringify(newValue));
    }
  };

  const handleDeleteItem = (data) => {
    const newValue = items.filter((item, index) => index !== data);

    localStorage.setItem(storedTodoList, JSON.stringify(newValue));
    setItems(newValue);
  };

  useEffect(() => {
    const newInput = localStorage.getItem(storedTodoList);
    let newValue = JSON.parse(newInput);

    if (newInput && newValue.length > 0) {
      const lastIndex = newValue.length - 1;

      userID = newValue[lastIndex].id + 1;
      setItems(JSON.parse(newInput));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <TaskForm
          onSubmitSavedDatas={handleFormSubmit}
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
