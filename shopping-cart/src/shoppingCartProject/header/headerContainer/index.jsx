/* eslint-disable import/prefer-default-export */
import { React, useState } from "react";
import { Icons } from "../../constants";

import { HomeButton } from "../HomeButton";
import { UserForm } from "./UserForm";

export function HeaderContainer() {
  const [open, setOpen] = useState(true);

  // const [filterCategory, setFilterCategory] = useState("");

  /* Criar Context contendo só o Filtro, passar os filtros para o provider com a mocklist e executa-los ali dentro */

  return (
    <div className="">
      <div
        className={`${
          open
            ? "h-10 w-10 transition-all ease-in-out duration-300"
            : "w-[300px] h-screen transition-all ease-in-out duration-400"
        }flex absolute top-0 z-50 md:h-16 md:w-auto md:relative font-black text-lg bg-[#24252B] `}
      >
        <div className="flex flex-col relative pt-4 ml-2 md:flex-row md:flex md:justify-between w-auto lg:pt-4">
          <div
            className={`${
              open ? "block" : "hidden"
            } z-20 top-[-10px] relative md:hidden`}
          >
            <Icons.HamburguerListIcon
              width="22px"
              height="22px"
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
            } h-24 justify-between  md:flex flex-row md:mt-[-4px] md:h-10 md:ml-8`}
          >
            <div className={`${open ? "flex flex-col " : "flex flex-row "}`}>
              <HomeButton />
            </div>
          </div>
          <div
            className={`${
              open
                ? "ml-[-300px]"
                : "block mt-10 ml-0 transition-all ease-in-out duration-800"
            } h-24  md:flex flex-row md:mt-[-4px] md:h-10 md:ml-8`}
          >
            <div className="md:flex md:flex-row">
              <div>
                <div className="mt-20 md:mt-0">
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
