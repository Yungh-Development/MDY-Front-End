import React, { useState, useEffect } from "react";
import { AddButton } from "./AddButton";
import { Icons } from "./constants";

const storedTodoList = "";

let userID = 0;

export const TaskTittle = () => {
  const [taskInput, setTaskInput] = useState("");
  const [userName, setUserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [novoInput, setNovoInput] = useState([]);
  const [novaList, setNovaList] = useState();

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

  const handleDeleteItem = (targetIndex) => {
    const newValue = novoInput.filter((item, index) => index !== targetIndex);

    setNovoInput(newValue);

    localStorage.setItem(storedTodoList, JSON.stringify(newValue));
  };

  const handleAddItemToList = (event) => {
    const newTodoTask = {
      id: ++userID,
      taskInput: taskInput,
      userName: userName,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
    };

    const newValue = [...novoInput, newTodoTask];

    event.preventDefault();
    setNovoInput(newValue);
    setTaskInput("");

    if (novoInput.length > 0) {
      localStorage.setItem(storedTodoList, JSON.stringify(newValue));
    }
  };

  useEffect(() => {
    const novoInput = localStorage.getItem(storedTodoList);
    if (novoInput && novoInput.length > 0) {
      setNovoInput(JSON.parse(novoInput));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full">
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
        {novoInput.map((item, index) => {
          return (
            <div
              className="mt-8 flex rounded-md shadow-[1px_0px_1px_1px_rgba(0,0,0,0.1)] "
              key={item.id}
            >
              <div className="flex w-full h-[50px] justify-between font-black ">
                {/*LABEL*/}

                <span className="pl-4 h-8 mt-[10px]" value="Task Name: ">
                  {item.taskInput}{" "}
                </span>
                <span className="pl-4 h-8 mt-[10px]">{item.userName} </span>
                {item.startDate.length > 0 ? (
                  <label>
                    Start Date
                    <input
                      className="pl-4 h-8 mt-[10px]"
                      type="date"
                      value={item.startDate}
                    ></input>
                  </label>
                ) : (
                  <span className="pl-4 h-8 mt-[10px]">
                    Start Date - --:--{" "}
                  </span>
                )}
                {item.startTime.length > 0 ? (
                  <input
                    className="pl-4 h-8 mt-[10px]"
                    type="time"
                    value={item.startTime}
                  ></input>
                ) : (
                  <span className="pl-4 h-8 mt-[10px]">
                    Start Time - --:--{" "}
                  </span>
                )}

                {item.endDate.length > 0 ? (
                  <input
                    className="pl-4 h-8 mt-[10px]"
                    type="date"
                    value={item.endDate}
                  ></input>
                ) : (
                  <span className="pl-4 h-8 mt-[10px]">
                    Ending Date - --:--{" "}
                  </span>
                )}
                {item.endTime.length > 0 ? (
                  <input
                    className="pl-4 h-8 mt-[10px]"
                    type="time"
                    value={item.endTime}
                  ></input>
                ) : (
                  <span className="pl-4 h-8 mt-[10px]">
                    Ending Time - --:--{" "}
                  </span>
                )}
                <div className="" onClick={() => handleDeleteItem(index)}>
                  <Icons.Trash
                    fill="red"
                    className="mt-[15px] mr-4 ml-4 hover:cursor-pointer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
