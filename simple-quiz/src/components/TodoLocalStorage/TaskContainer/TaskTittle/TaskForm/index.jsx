import React, { useState, useRef } from "react";
import { AddButton } from "../AddButton";

export const TaskForm = ({
  onSubmitSavedDatas,
  handleDateAscFilter,
  handleTaskFilter,
  handleNameFilter,
}) => {
  const [taskInput, setTaskInput] = useState("");
  const [userName, setUserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const inputRef = useRef(null);

  const taskNameHandle = (event) => {
    setTaskInput(event.target.value);
  };
  const userNameHandle = (event) => {
    setUserName(event.target.value);
  };

  const startDateHandleChange = (event) => {
    setStartDate(event.target.value);
  };
  const endDateHandleChange = (event) => {
    setEndDate(event.target.value);
  };
  const dateAscFilterHandler = (event) => {
    handleDateAscFilter(event.target.value);
  };
  const taskFilterHandler = (event) => {
    handleTaskFilter(event.target.value);
  };

  const nameFilterHandler = (event) => {
    handleNameFilter(event.target.value);
  };

  const handleAddItemToList = (event) => {
    if (userName.length === 0) {
      alert("Please, Tell us your name or userID!");
    } else if (startDate > endDate) {
      alert("Start date can't be higher then end date!");
      setStartDate("");
      setEndDate("");
    } else {
      const newTodoTask = {
        taskInput: taskInput,
        userName: userName,
        startDate: startDate,
        endDate: endDate,
        cor: "#ffffff",
      };

      onSubmitSavedDatas && onSubmitSavedDatas(newTodoTask);

      event.preventDefault();
      setTaskInput("");
      setUserName("");
      setStartDate("");
      setEndDate("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full">
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="font-black p-2" htmlFor="beginDateTask">
            Filter dates from:
            <input
              className="rounded bg-[#ffffff] font-black ml-2 w-auto h-8 pl-2"
              type="date"
              name="beginDateTask"
              onChange={(event) => dateAscFilterHandler(event)}
            ></input>
          </label>
        </div>
        <div className="mr-4">
          <label className="font-black p-2">
            What task you are looking for?
            <input
              type="text"
              className="rounded bg-[#ffffff] font-black ml-2 w-auto h-8 pl-2"
              placeholder="Enter the task"
              onChange={(event) => taskFilterHandler(event)}
            />
          </label>
        </div>
        <div className="">
          <label className="font-black p-2">
            Who are you looking for?
            <input
              type="text"
              className="rounded bg-[#ffffff] font-black ml-2 w-auto h-8 pl-2"
              placeholder="Enter a name or UserID?"
              onChange={(event) => nameFilterHandler(event)}
            />
          </label>
        </div>
      </div>
      <form
        onSubmit={handleAddItemToList}
        className="flex flex-col p-2 items-center justify-center rounded-md shadow-[1px_0px_1px_1px_rgba(0,0,0,0.1)] "
      >
        <div className="flex mb-4 w-full ">
          <input
            ref={inputRef}
            type="text"
            className="rounded bg-[#ffffff] font-black w-full h-10 pl-4"
            placeholder="What's your new task ?"
            value={taskInput}
            onChange={(event) => taskNameHandle(event)}
          />
        </div>

        <div className="flex mb-4 w-full">
          <input
            type="text"
            className="rounded bg-[#ffffff] font-black w-full h-10 pl-4"
            placeholder="What's your name or UserID ?"
            value={userName}
            onChange={(event) => userNameHandle(event)}
          />
        </div>
        <div className="flex justify-between w-full">
          <label className="font-black p-2" htmlFor="beginDateTask">
            Start Date:
            <input
              className="pl-2 ml-2"
              type="date"
              name="beginDateTask"
              value={startDate}
              onChange={(event) => startDateHandleChange(event)}
            ></input>
          </label>

          <label className="font-black p-2" htmlFor="endDateTask">
            End Date:
            <input
              className="pl-2 ml-2"
              type="date"
              name="endDateTask"
              value={endDate}
              onChange={(event) => endDateHandleChange(event)}
            ></input>
          </label>
          <AddButton />
        </div>
      </form>
      {/*Render List*/}
    </div>
  );
};
