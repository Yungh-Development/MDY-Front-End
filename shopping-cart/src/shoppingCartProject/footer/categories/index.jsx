import React, { useContext } from "react";
import { FilteredContextList, CategoryItems } from "../../filterContext";

export const FooterCategories = () => {
  const [categoryList, setCategoryList] = useContext(FilteredContextList);

  const onCategorySelectHandler = (data) => {
    setCategoryList({ ...categoryList, category: data });
  };
  return (
    <div className="w-10 ml-10 ">
      <ul>
        <select
          className="bg-[#ffffff] text-black text-lg font-black h-8  ml-0 mt-8 md:block md:ml-10 md:mt-0"
          defaultValue={categoryList.value}
          onChange={(event) => onCategorySelectHandler(event.target.value)}
        >
          {CategoryItems.map((option) => (
            <option
              key={option.value}
              value={option.value}
              label={option.label}
              className="font-black "
            />
          ))}
        </select>
      </ul>
    </div>
  );
};
