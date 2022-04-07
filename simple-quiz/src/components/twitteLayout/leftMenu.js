import React from "react";
import { IconMap } from "./leftMenuMap";

export const LeftMenu = ({ items }) => {
  return (
    <div className="ml-6">
      <ul className="flex-col">
        {items.map((item) => (
          <li className="flex-row flex text-2xl font-extrabold pb-3 pt-3 hover:bg-[#E7E7E8] cursor-pointer w-[105%] rounded-full ">
            <IconMap props={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
