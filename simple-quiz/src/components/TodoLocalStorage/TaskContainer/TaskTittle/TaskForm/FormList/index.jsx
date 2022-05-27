import React, { useEffect, useState } from "react";
import { Icons } from "../../constants";

export const FormList = ({ formListHandler, formDeleteItemHandler }) => {
  const handleDeleteItem = (targetIndex) => {
    formDeleteItemHandler(targetIndex);
  };
  return (
    <>
      {formListHandler.map((item, index) => {
        return (
          <div
            className="mt-8 flex rounded-md shadow-[1px_0px_1px_1px_rgba(0,0,0,0.1)] "
            key={item.id}
          >
            <div
              className="flex w-full h-[50px] rounded-l-md justify-between font-black "
              style={{ background: [item.cor] }}
            >
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
            </div>
            <div
              style={{ background: [item.cor] }}
              className="rounded-r-md"
              onClick={() => handleDeleteItem(index)}
            >
              <Icons.Trash
                fill="black"
                className="mt-[15px] mr-4 ml-4 hover:cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
