import React, { useState } from "react";
import { AddButton } from "./AddButton";
import { Icons } from "./constants";

const optionsValues = [
  { value: "white", label: "Tasks" },
  { value: "green", label: "Concluído" },
  { value: "yellow", label: "Em Andamento" },
  { value: "orange", label: "Na Fila" },
];

const valorCores = {
  white: "#ffffff",
  green: "#00ff00",
  yellow: "#ffff00",
  orange: "#ffa500",
};

export const TaskTittle = () => {
  const [mainInput, setMainInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [novoInput, setNovoInput] = useState([]);
  const [selectFiltro, setSelectFiltro] = useState();

  const handleChange = (event) => {
    const inputTask = event.target.value;
    setMainInput(inputTask);
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
    setNovoInput(novoInput.filter((item, index) => index !== targetIndex));
  };

  const handleAddItemToList = (event) => {
    const novaTask = {
      nome: mainInput,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
      cor: "white",
    };

    event.preventDefault();
    setNovoInput([...novoInput, novaTask]);
    setMainInput("");
  };

  const selectHandle = (event, item, index) => {
    // const selectHandle = (value, item, index) => {
    const allItems = [...novoInput];
    const itemCor = allItems[index];

    itemCor.cor = event.value;
    // itemCor.cor = value;
    setNovoInput(allItems);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <form
            onSubmit={handleAddItemToList}
            className="flex flex-col items-center justify-between"
          >
            <input
              type="text"
              className="rounded bg-[#ffffff] font-black w-full h-auto pl-4"
              placeholder="What's your new task ?"
              onChange={(event) => handleChange(event)}
            />

            <div>
              <label className="font-black p-2" for="beginDateTask">
                Start Date:
              </label>
              <input
                className="pl-2"
                type="date"
                name="beginDateTask"
                onChange={(event) => startDateHandleChange(event)}
              ></input>
              <label className="font-black p-2" for="endDateTask">
                End Date:
              </label>
              <input
                className="pl-2"
                type="date"
                name="endDateTask"
                onChange={(event) => endDateHandleChange(event)}
              ></input>
            </div>
            <div>
              <label className="font-black p-2" for="beginTimeTask">
                Start Time:
              </label>
              <input
                className="pl-2"
                type="time"
                name="beginTimeTask"
                onChange={(event) => startTimeHandleChange(event)}
              ></input>
              <label className="font-black p-2" for="endTimeTask">
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
        {novoInput.map((item, index) => {
          const currentValue = optionsValues.find(
            (option) => option.value === item.cor
          );

          return (
            <div className="mt-8 ">
              <div
                className="flex h-10 rounded justify-between font-black"
                style={{ background: valorCores[item.cor] }}
              >
                {/*LABEL*/}
                <span className="pl-4 mt-[10px]">{item.nome} </span>
                {item.startDate.length > 0 ? (
                  <span className="pl-4 mt-[10px]">
                    Start Date - {item.startDate}{" "}
                  </span>
                ) : (
                  <span className="pl-4 mt-[10px]">Start Date - --:-- </span>
                )}
                {item.startTime.length > 0 ? (
                  <span className="pl-4 mt-[10px]">
                    Start Time - {item.startTime}{" "}
                  </span>
                ) : (
                  <span className="pl-4 mt-[10px]">Start Time - --:-- </span>
                )}
                {item.endDate.length > 0 ? (
                  <span className="pl-4 mt-[10px]">
                    Ending Date - {item.endDate}{" "}
                  </span>
                ) : (
                  <span className="pl-4 mt-[10px]">Ending Date - --:-- </span>
                )}
                {item.endTime.length > 0 ? (
                  <span className="pl-4 mt-[10px]">
                    Ending Time - {item.endTime}{" "}
                  </span>
                ) : (
                  <span className="pl-4 mt-[10px]">Ending Time - --:-- </span>
                )}

                <div
                  className="taskBtn"
                  onClick={() => handleDeleteItem(index)}
                >
                  <Icons.Trash
                    fill="red"
                    className="mt-[10px] mr-2 hover:cursor-pointer"
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
