import React, { useContext, useState } from "react";
import { Icons } from "../../../constants";
import { FilteredContextList, CategoryItems } from "../../../FilterContext";
import { searchFilterContext } from "../../../SearchFilterContext";

export const SearchComponents = () => {
  const [categoryList, setCategoryList] = useContext(FilteredContextList);
  const [searchData, setSearchData] = useContext(searchFilterContext);
  const [open, setOpen] = useState(true);

  const onCategorySelectHandler = (data) => {
    setCategoryList({ ...categoryList, category: data });
  };
  const onSearchFieldHandler = (data) => {
    setSearchData({ ...searchData, searchData: data });
  };

  return (
    <div
      className={`${
        open
          ? "h-10 w-10 transition-all ease-in-out duration-300"
          : "w-[250px] h-screen transition-all ease-in-out duration-400"
      }flex absolute top-0 right-0 z-10 md:h-16 md:relative md:w-full font-black text-lg bg-[#24252B]`}
    >
      <div className="flex flex-col md:flex-row md:flex md:justify-between md:pt-8">
        <div
          className={`${
            open ? "block" : "hidden"
          } z-20 top-2 left-2 relative md:hidden`}
        >
          <Icons.SearchIcon
            width="18px"
            height="18px"
            fill="white"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`${
            open ? "hidden" : "block"
          } z-20 absolute top-2 right-4 md:hidden`}
        >
          <Icons.CloseListIcon
            width="20px"
            height="20px"
            fill="white"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col justify-around ml-4 mt-10 md:mt-2">
          <div className={`${open ? "hidden" : "block"} z-20 md:block `}>
            <div className="relative md:absolute md:top-4 md:left-10">
              <select
                className="bg-[#24252B] text-white font-black mt-8 md:mt-0"
                defaultValue={categoryList.value}
                onChange={(event) =>
                  onCategorySelectHandler(event.target.value)
                }
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
            <div className="relative top-14 md:absolute md:top-4 md:right-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};
