import React from "react";
import { Icons } from "../constants";

export const AddButton = () => {
  return (
    <button className="bg-[#ffffff] ml-4 rounded">
      <Icons.Pencil
        width="18px"
        height="18px"
        className="mt-[10px] m-[12px] cursor-pointer hover:opacity-50"
      />
    </button>
  );
};
