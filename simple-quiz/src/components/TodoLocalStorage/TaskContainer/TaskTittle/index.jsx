import React, { useState, useEffect } from "react";
import { AddButton } from "./AddButton";
import { Icons } from "./constants";
import { IconsContainer } from "./TaskIcon/IconsContainer";
import { TimeIcons } from "./constants";

const storedTodoList = "";

let userID = 0;

const monthNumeros = [
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

export const TaskTittle = () => {
  const [taskInput, setTaskInput] = useState("");
  const [userName, setUserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [newInput, setnewInput] = useState([]);
  const [newList, setnewList] = useState();
  const [newName, setNewName] = useState("");
  const [newTask, setNewTask] = useState("");

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
  const taskFilterHandler = (event) => {
    const inputTask = event.target.value;
    setNewTask(inputTask);
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

      let date = new Date();
      let day = date.getDate();
      let month = monthNumeros[date.getMonth()];
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
    }
  };

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

  return (
    <>
      <div className="flex flex-col">
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
                  <span className="pl-4 h-8 mt-[10px]">
                    Start Date - --:--{" "}
                  </span>
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
                  <span className="pl-4 h-8 mt-[10px]">
                    Ending Date - --:--{" "}
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
                    fill="black"
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
