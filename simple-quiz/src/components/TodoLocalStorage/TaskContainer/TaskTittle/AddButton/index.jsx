import React from "react";
import { Icons } from "../constants";

export const AddButton = () => {
  return (
    <button className="bg-[#ffffff] ml-4 rounded w-20 flex text-center flex justify-center items-center cursor-pointer text-center hover:opacity-90 ">
      <Icons.Pencil
        width="18px"
        height="18px"
        className="mt-[10px] m-[12px] hover:opacity-90"
      />
    </button>
  );
};
