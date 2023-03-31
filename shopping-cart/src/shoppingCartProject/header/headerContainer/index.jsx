/* eslint-disable import/prefer-default-export */
import { React, useState, useContext } from "react";
import { Icons } from "../../Constants";
import { FilteredContextList, CategoryItems } from "../../FilterContext";
import { searchFilterContext } from "../../SearchFilterContext";

import { HomeButton } from "../HomeButton";
import { UserForm } from "./UserForm";

export function HeaderContainer() {
  const [open, setOpen] = useState(true);

  // const [filterCategory, setFilterCategory] = useState("");

  const [searchData, setSearchData] = useContext(searchFilterContext);
  const [categoryList, setCategoryList] = useContext(FilteredContextList);

  /* Criar Context contendo só o Filtro, passar os filtros para o provider com a mocklist e executa-los ali dentro */
  const onSearchFieldHandler = (data) => {
    setSearchData({ ...searchData, searchData: data });
  };

  const onCategorySelectHandler = (data) => {
    setCategoryList({ ...categoryList, category: data });
  };

  return (
    <div className="">
      <div
        className={`${
          open
            ? "h-10 w-10 transition-all ease-in-out duration-300"
            : "w-[300px] h-screen transition-all ease-in-out duration-400"
        }flex absolute top-0 z-50 md:h-20 lg:h-28  md:w-auto md:relative font-black text-lg bg-[#24252B] shadow-stone-300 shadow`}
      >
        <div className="flex flex-col relative pt-4 ml-2 md:flex-row md:flex md:justify-between w-auto lg:pt-8  ">
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
            } h-24  md:flex flex-row md:mt-[-4px] md:h-10 md:ml-8`}
          >
            <div className={`${open ? "flex flex-col " : "flex flex-row "}`}>
              <HomeButton />
            </div>
            <select
              className="bg-[#24252B] text-white font-black mt-8 md:ml-10 md:mt-0"
              defaultValue={categoryList.value}
              onChange={(event) => onCategorySelectHandler(event.target.value)}
            >
              {CategoryItems.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  className="text-white font-black pl-2"
                />
              ))}
            </select>
          </div>
          <div className="md:flex md:flex-row">
            <div
              className={`${
                open
                  ? "hidden left-[-300px] bottom-[-400px]"
                  : "transition-all ease-in-out duration-800"
              } mt-14 md:block md:right-24 md:left-auto border-1 border-[#0288AB] rounded-lg md:mt-0`}
            >
              <label htmlFor="searchBar" className="flex relative mr-4">
                <input
                  type="text"
                  name="searchBar"
                  placeholder="Chose a Item"
                  className="bg-[#24252B] text-white rounded-lg p-1 pl-2"
                  onChange={(event) => onSearchFieldHandler(event.target.value)}
                />
                <div className="absolute right-7 md:right-2 top-[10px] bg-[#24252B]">
                  <Icons.SearchIcon fill="white" />
                </div>
              </label>
            </div>
            <div
              className={`${
                open
                  ? "hidden left-[-300px] bottom-[-400px]"
                  : "transition-all ease-in-out duration-800"
              } mt-16 md:block md:right-24 md:left-auto border-1 border-[#0288AB] rounded-lg md:mt-0`}
            >
              <div className="mt-20 md:mt-0">
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
