import { useState, useEffect, useRef } from "react";
import React from "react";
import { AddButton } from "../AddButton";

const storedTodoList = "";
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

export const TaskForm = ({
  formProps,
  onSubmitSavedDatas,
  handleDateAscFilter,
  handleTaskFilter,
  handleNameFilter,
}) => {
  const [taskInput, setTaskInput] = useState("");
  const [userName, setUserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const [newList, setnewList] = useState();
  const [newName, setNewName] = useState("");
  const [newTask, setNewTask] = useState("");

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

  const startTimeHandleChange = (event) => {
    setStartTime(event.target.value);
  };

  const endDateHandleChange = (event) => {
    setEndDate(event.target.value);
  };

  const endTimeHandleChange = (event) => {
    setEndTime(event.target.value);
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
    } else {
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

      formProps && formProps(newTodoTask);

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

      //const newValue = [...newInput, newTodoTask];

      onSubmitSavedDatas && onSubmitSavedDatas(newTodoTask);

      event.preventDefault();
      setTaskInput("");
      inputRef.current.focus();

      // setnewInput(newValue);
      // if (newInput.length > 0) {
      //   localStorage.setItem(storedTodoList, JSON.stringify(newValue));
      //}
    }
  };
  {
    /*
  const newInputList = newInput.filter((item) => {
    let dataList = true;

    if (item.endDate <= newList) {
      return false;
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



  useEffect(() => {
    const newInput = localStorage.getItem(storedTodoList);

    if (newInput && newInput.length > 0) {
      let UltimoIndex = newInput[newInput.length - 1];
      userID = UltimoIndex.id + 1;

      setnewInput(JSON.parse(newInput));
    }
  }, []);
 */
  }
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
        className="flex flex-col p-2 items-center justify-between rounded-md shadow-[1px_0px_1px_1px_rgba(0,0,0,0.1)]"
      >
        <div className="flex mb-4 w-full">
          <input
            ref={inputRef}
            type="text"
            className="rounded bg-[#ffffff] font-black w-full h-10 pl-4"
            placeholder="What's your new task ?"
            onChange={(event) => taskNameHandle(event)}
          />
        </div>

        <div className="flex mb-4 w-full">
          <input
            type="text"
            className="rounded bg-[#ffffff] font-black w-full h-10 pl-4"
            placeholder="What's your name or UserID ?"
            onChange={(event) => userNameHandle(event)}
          />
        </div>
        <div className="flex justify-between w-full">
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
          <AddButton />
        </div>
      </form>
      {/*Render List*/}
    </div>
  );
};
