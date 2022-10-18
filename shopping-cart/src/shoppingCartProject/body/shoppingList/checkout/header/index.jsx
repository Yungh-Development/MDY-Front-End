/* eslint-disable import/prefer-default-export */
import { React, useState, useContext } from "react";
import { Icons } from "../../../../constants";

import { HomeButton } from "../../../../header/navBar/homeButton";
import { UserLoginRegister } from "../../../../header/navBar/navBar/userForm";
import { UserLoginDataContext } from "../../../../userLoginDataContext";

export function CheckoutHeader() {
  const [open, setOpen] = useState(true);
  const [userLoginData] = useContext(UserLoginDataContext);

  console.log(userLoginData);

  return (
    <div
      className={`${
        open
          ? "h-10 w-10 transition-all ease-in-out duration-300"
          : "w-[250px] h-screen transition-all ease-in-out duration-400"
      }flex md:h-20 md:w-auto z-50 relative font-black text-lg bg-[#24252B] shadow-stone-300 shadow`}
    >
      <div className="flex flex-col relative ml-2 md:flex-row md:flex md:justify-between w-auto pt-4  ">
        <div
          className={`${
            open ? "block" : "hidden"
          } z-20 top-[-10px] relative md:hidden`}
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
              : "block mt-10 ml-0 transition-all ease-in-out duration-800"
          } h-10  md:flex flex-row md:mt-[-4px] md:ml-8`}
        >
          <div className={`${open ? "flex flex-col " : "flex flex-row "}`}>
            <HomeButton />
          </div>
        </div>
        <div className="md:flex md:flex-row">
          <div className="mt-40 md:mt-0">
            <UserLoginRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
