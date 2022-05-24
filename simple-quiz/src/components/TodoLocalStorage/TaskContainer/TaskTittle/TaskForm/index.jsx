import { useState, useEffect } from "react";
import React from "react";

import { Icons } from "../constants";
import { AddButton } from "../AddButton";

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

const IconsList = ["DizzyEmoji", "Hourglass"];

export const TaskForm = () => {
  const storedTodoList = "";

  const [taskInput, setTaskInput] = useState("");
  const [userName, setUserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [newInput, setnewInput] = useState([]);
  const [newList, setnewList] = useState();
  const [newName, setNewName] = useState();

  const taskNameHandle = (event) => {
    const inputTask = event.target.value;
    setTaskInput(inputTask);
  };
  const userNameHandle = (event) => {
    const inputTask = event.target.value;
    setUserName(inputTask);
  };

  const startDateHandleChange = (event) => {
    const inputTask = event.target.value;
    setStartDate(inputTask);
  };

  const startTimeHandleChange = (event) => {
    const inputTask = event.target.value;
    setStartTime(inputTask);
  };

  const endDateHandleChange = (event) => {
    const inputTask = event.target.value;
    setEndDate(inputTask);
  };

  const endTimeHandleChange = (event) => {
    const inputTask = event.target.value;
    setEndTime(inputTask);
  };

  const dateAscFilterHandler = (event) => {
    const inputTask = event.target.value;
    setnewList(inputTask);
  };

  const nameFilterHandler = (event) => {
    const inputTask = event.target.value;
    setNewName(inputTask);
  };

  const handleDeleteItem = (targetIndex) => {
    const newValue = newInput.filter((item, index) => index !== targetIndex);

    setnewInput(newValue);
    localStorage.setItem(storedTodoList, JSON.stringify(newValue));
  };

  // concluido, remove delete
  //Setar data minima desejada e utilizar ela para o filtro

  const handleAddItemToList = (event) => {
    const newTodoTask = {
      id: userID++,
      taskInput: taskInput,
      userName: userName,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
      cor: "white",
    };

    let date = new Date();
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let fullDate = year + "-" + month + "-" + day;

    const itemColor = newTodoTask;

    itemColor.cor = event;

    if (newTodoTask.endDate.length === 0) {
      itemColor.cor = "white";
    } else if (newTodoTask.endDate <= fullDate) {
      itemColor.cor = "#ff0000";
    } else if (newTodoTask.endDate >= fullDate) {
      itemColor.cor = "green";
    }

    const newValue = [...newInput, newTodoTask];

    event.preventDefault();
    setnewInput(newValue);
    setTaskInput("");

    if (newInput.length > 0) {
      localStorage.setItem(storedTodoList, JSON.stringify(newValue));
    }
  };

  const newInputList = newInput.filter((item) => {
    let dataList = true;

    if (item.endDate <= newList) {
      return false;
    }
    if (item.userName !== newName) {
      return false;
    }

    return dataList;
  });

  useEffect(() => {
    const newInput = localStorage.getItem(storedTodoList);

    if (newInput && newInput.length > 0) {
      let UltimoIndex = newInput[newInput.length - 1];
      userID = UltimoIndex.id + 1;

      setnewInput(JSON.parse(newInput));
    }
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="flex mb-4 w-full">
          <label className="font-black p-2" htmlFor="beginDateTask">
            Filter dates from:
          </label>
          <input
            className="pl-2"
            type="date"
            name="beginDateTask"
            onChange={(event) => dateAscFilterHandler(event)}
          ></input>
          <div className="flex mb-4 w-full">
            <input
              type="text"
              className="rounded bg-[#ffffff] font-black  h-10 pl-4"
              placeholder="Who are you looking for?"
              onChange={(event) => nameFilterHandler(event)}
            />
          </div>
        </div>
        <form
          onSubmit={handleAddItemToList}
          className="flex flex-col p-2 items-center justify-between rounded-md shadow-[1px_0px_1px_1px_rgba(0,0,0,0.1)]"
        >
          <div className="flex mb-4 w-full">
            <input
              type="text"
              className="rounded bg-[#ffffff] font-black w-full h-10 pl-4"
              placeholder="What's your new task ?"
              onChange={(event) => taskNameHandle(event)}
            />
            <AddButton />
          </div>
          <div className="flex mb-4 w-full">
            <input
              type="text"
              className="rounded bg-[#ffffff] font-black w-full h-10 pl-4"
              placeholder="What's your name or UserID ?"
              onChange={(event) => userNameHandle(event)}
            />
          </div>
          <div>
            <label className="font-black p-2" htmlFor="beginDateTask">
              Start Date:
            </label>
            <input
              className="pl-2"
              type="date"
              name="beginDateTask"
              onChange={(event) => startDateHandleChange(event)}
            ></input>
            <label className="font-black p-2" htmlFor="endDateTask">
              End Date:
            </label>
            <input
              className="pl-2"
              type="date"
              name="endDateTask"
              onChange={(event) => endDateHandleChange(event)}
            ></input>

            <label className="font-black p-2" htmlFor="beginTimeTask">
              Start Time:
            </label>
            <input
              className="pl-2"
              type="time"
              name="beginTimeTask"
              onChange={(event) => startTimeHandleChange(event)}
            ></input>
            <label className="font-black p-2" htmlFor="endTimeTask">
              End Time:
            </label>
            <input
              className="pl-2"
              type="time"
              name="endTimeTask"
              onChange={(event) => endTimeHandleChange(event)}
            ></input>
          </div>
        </form>
        {/*Render List*/}
      </div>
      {newInputList.map((item, index) => {
        return (
          <div
            className="mt-8 flex rounded-md shadow-[1px_0px_1px_1px_rgba(0,0,0,0.1)] "
            key={item.id}
          >
            <div
              className="flex w-full h-[50px] justify-between font-black "
              style={{ background: [item.cor] }}
            >
              {/*LABEL*/}

              <span className="pl-4 h-8 mt-[10px]" value="Task Name: ">
                {item.taskInput}{" "}
              </span>
              <span className="pl-4 h-8 mt-[10px]">{item.userName} </span>
              {item.startDate.length > 0 ? (
                <label>
                  Start Date
                  <input
                    className="ml-2 pl-4 h-8 mt-[10px]"
                    type="date"
                    value={item.startDate}
                  ></input>
                </label>
              ) : (
                <span className="pl-4 h-8 mt-[10px]">Start Date - --:-- </span>
              )}
              {item.endDate.length > 0 ? (
                <label className="pl-2 pr-4">
                  End Date
                  <input
                    className=" ml-2 pl-4 h-8 mt-[10px]"
                    type="date"
                    value={item.endDate}
                  ></input>
                </label>
              ) : (
                <span className="pl-4 h-8 mt-[10px]">Ending Date - --:-- </span>
              )}
              {item.startTime.length > 0 ? (
                <input
                  className="pl-4 h-8 mt-[10px]"
                  type="time"
                  value={item.startTime}
                ></input>
              ) : (
                <span className="pl-4 h-8 mt-[10px]">Start Time - --:-- </span>
              )}
              {item.endTime.length > 0 ? (
                <input
                  className="pl-4 h-8 mt-[10px]"
                  type="time"
                  value={item.endTime}
                ></input>
              ) : (
                <span className="pl-4 h-8 mt-[10px]">Ending Time - --:-- </span>
              )}
              <div className="" onClick={() => handleDeleteItem(index)}>
                <Icons.Trash
                  fill="black"
                  className="mt-[15px] mr-4 ml-4 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
