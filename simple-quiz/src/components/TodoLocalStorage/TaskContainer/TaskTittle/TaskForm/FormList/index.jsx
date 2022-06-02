import React from "react";
import { Icons } from "../../constants";

export const FormList = ({ formListHandler, formDeleteItemHandler }) => {
  const handleDeleteItem = (targetIndex) => {
    formDeleteItemHandler(targetIndex);
  };
  return (
    <>
      {formListHandler.map((item, index) => {
        const getTaskColor = (data) => {
          let date = new Date();
          let todayDate = Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
          );

          let endDate = new Date(data.endDate).valueOf();

          if (data.length < 1) {
            data.cor = "background: [#ffffff]";
          } else if (endDate < todayDate) {
            data.cor = "#ff0000";
          } else if (endDate >= todayDate) {
            data.cor = "#00ff00";
          }
        };

        return (
          <div
            className={
              "mt-8 flex rounded-md shadow-[1px_0px_1px_1px_rgba(0,0,0,0.1)] " +
              getTaskColor(item)
            }
            style={{ background: [item.cor] }}
            key={item.id}
          >
            <div className="flex w-full h-[50px] rounded-l-md justify-around font-black text-lg">
              <span className="pl-4 h-8 mt-[10px]" value="Task Name: ">
                {item.taskInput}{" "}
              </span>
              <span className="pl-4 h-8 mt-[10px]">{item.userName} </span>
              {item.startDate.length > 0 ? (
                <label>
                  Start Date
                  <input
                    readOnly
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
                    readOnly
                    className=" ml-2 pl-4 h-8 mt-[10px]"
                    type="date"
                    value={item.endDate}
                  ></input>
                </label>
              ) : (
                <span className="pl-4 h-8 mt-[10px]">Ending Date - --:-- </span>
              )}
            </div>
            <button
              style={{ background: [item.cor] }}
              className="rounded-r-md"
              onClick={() => handleDeleteItem(index)}
            >
              <Icons.Trash
                fill="black"
                className="mt-[15px] mr-4 ml-4 hover:cursor-pointer"
              />
            </button>
          </div>
        );
      })}
    </>
  );
};
