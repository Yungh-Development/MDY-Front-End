/* eslint-disable import/prefer-default-export */
import { React, useState } from "react";
import { CategoryItems, Icons } from "../../../constants";

import { HomeButton } from "../homeButton";

export function NavBarMenu() {
  const [open, setOpen] = useState(true);

  const categorySelectItems = () => {};

  return (
    <div
      className={`${
        open
          ? "h-10 w-10 transition-all ease-in-out duration-300"
          : "w-[250px] h-screen transition-all ease-in-out duration-400"
      } md:h-20 md:w-auto relative font-black text-lg bg-[#24252B]  `}
    >
      <div className="flex flex-col ml-2 md:flex-row w-auto pt-4">
        <div
          className={`${
            open ? "block" : "hidden"
          } z-20 top-[-20px] relative right-2  md:hidden`}
        >
          <Icons.HamburguerListIcon
            width="24px"
            height="24px"
            fill="white"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`${
            open ? "hidden" : "block"
          } z-20 absolute top-2 right-2 md:hidden`}
        >
          <Icons.CloseListIcon
            width="20px"
            height="20px"
            fill="white"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`${
            open
              ? "ml-[-300px]"
              : "block mt-8 ml-0 transition-all ease-in-out duration-800"
          } h-10  md:flex flex-row md:mt-[-4px] md:ml-8`}
        >
          <HomeButton />
          <select
            className="bg-[#24252B] text-white font-black ml-0 mt-8 md:block md:ml-10 md:mt-0"
            onChange={(event) => categorySelectItems(event.target.value)}
          >
            {CategoryItems.map((option) => (
              <option
                key={option.value}
                value={option.value}
                label={option.label}
                className="text-white font-black"
              />
            ))}
          </select>
          <div
            className={`${
              open
                ? "hidden left-[-300px] bottom-[-400px]"
                : "right-5  bottom-4 transition-all ease-in-out duration-800"
            } absolute md:block md:right-4 md:left-auto border-1 border-[#0288AB] rounded-lg md:bottom-5`}
          >
            <label htmlFor="searchBar" className="flex">
              <input
                type="text"
                name="searchBar"
                placeholder="Chose a Item"
                className="bg-[#24252B] font-black rounded-lg p-1"
              />
              <div className="absolute right-2 top-3 bg-[#24252B]">
                <Icons.SearchIcon fill="white" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
